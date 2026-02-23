import fs from "node:fs";
import path from "node:path";

const exts = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".txt"]);
const skipDirs = new Set(["node_modules", ".next", ".git", "dist", "build", "out", ".turbo"]);

function shouldSkip(p) {
  const parts = p.split(path.sep);
  return parts.some((d) => skipDirs.has(d));
}

function walk(dir, out=[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (shouldSkip(full)) continue;

    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function looksMojibake(s) {
  return /Ã|Â|â€™|â€“|â€œ|â€|Ã§|Ã£|Ã³|Ãª|Ã¡|Ãº/.test(s);
}

// Repair clássico: bytes UTF-8 interpretados como latin1/Win-1252 e gravados como string.
// Conserto: re-interpretar como latin1 e decodificar como utf8.
function repairLatin1ToUtf8(str) {
  const buf = Buffer.from(str, "latin1");
  return buf.toString("utf8");
}

const root = process.cwd();
const files = walk(root).filter((f) => exts.has(path.extname(f)));

let changedFiles = 0;
let totalHits = 0;
const report = [];

for (const f of files) {
  let raw;
  try {
    raw = fs.readFileSync(f, "utf8");
  } catch {
    // se não for utf8 legível, ignora
    continue;
  }

  if (!looksMojibake(raw)) continue;

  const fixed = repairLatin1ToUtf8(raw);

  // Se a “correção” piorar (introduzir mais mojibake), não aplica.
  const before = (raw.match(/Ã|Â|â€™|â€“|â€œ|â€|Ã§|Ã£|Ã³|Ãª|Ã¡|Ãº/g) || []).length;
  const after  = (fixed.match(/Ã|Â|â€™|â€“|â€œ|â€|Ã§|Ã£|Ã³|Ãª|Ã¡|Ãº/g) || []).length;

  totalHits += before;

  if (after > before) {
    report.push({ file: f, status: "SKIP_WORSE", before, after });
    continue;
  }

  if (fixed !== raw) {
    fs.writeFileSync(f, fixed, "utf8");
    changedFiles++;
    report.push({ file: f, status: "FIXED", before, after });
  }
}

console.log("==> FIX MOJIBAKE REPORT");
console.log(JSON.stringify({ changedFiles, totalHits, details: report.slice(0, 60) }, null, 2));
console.log("Obs: details truncado nos 60 primeiros para não poluir log.");
