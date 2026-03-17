import fs from 'fs';
import path from 'path';

type Finding = {
  file: string;
  line: number;
  message: string;
  excerpt: string;
};

const roots = ['app', 'components', 'hooks', 'lib', 'src'];
const exts = new Set(['.ts', '.tsx']);

const allowedSpacing = new Set(
  Array.from({ length: 25 }, (_, i) => String(i * 4)), // 0..96 em passos de 4px
);
const allowedRadius = new Set(['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']);
const allowedDuration = new Set(['fast', 'base', 'slow']);
const allowedEase = new Set(['standard', 'emphasized']);
const ignoreFiles = new Set([
  path.join('src', 'styles', 'tokens.ts'),
  path.join('app', 'opengraph-image.tsx'),
  path.join('app', 'twitter-image.tsx'),
]);

const findings: Finding[] = [];

function walk(dir: string, files: string[] = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (exts.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function addFinding(file: string, line: number, message: string, excerpt: string) {
  findings.push({ file, line, message, excerpt: excerpt.trim() });
}

function lintFile(file: string) {
  if (ignoreFiles.has(path.normalize(file))) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, idx) => {
    const lineNumber = idx + 1;

    // Arbitrary spacing (square brackets)
    if (/(^|\s)(-)?(p|m|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb|gap|space-[xy])-\[/.test(line)) {
      addFinding(file, lineNumber, 'Arbitrary spacing value (use spacing tokens)', line);
    }

    // Radius
    if (/rounded-\[/.test(line)) addFinding(file, lineNumber, 'Radius arbitrário (rounded-[...])', line);
    const radiusRegex = /rounded(?:-[trbl]{1,2})?-([a-z0-9]+)/g;
    let rMatch: RegExpExecArray | null;
    while ((rMatch = radiusRegex.exec(line)) !== null) {
      const token = rMatch[1];
      if (token && !allowedRadius.has(token)) {
        addFinding(file, lineNumber, `Radius fora da escala (${token})`, line);
      }
    }

    // Hex / rgba (evitar cores soltas em JSX/Tailwind) — ignorar gradientes arbitrários para não quebrar fundos existentes
    if (!line.includes('bg-[')) {
      if (/(#[0-9A-Fa-f]{3,8})/.test(line)) {
        addFinding(file, lineNumber, 'Hex encontrado (use tokens/classe semântica)', line);
      }
      if (/rgba\(/i.test(line)) {
        addFinding(file, lineNumber, 'RGBA encontrado (use tokens/classe semântica)', line);
      }
    }
  });
}

function main() {
  const files: string[] = [];
  roots.forEach((root) => {
    if (fs.existsSync(root)) walk(root, files);
  });

  files.forEach(lintFile);

  if (findings.length === 0) {
    console.log('✔ Design lint: nenhum problema encontrado.');
    return;
  }

  console.error(`✖ Design lint falhou (${findings.length} problemas)\n`);
  const byFile = new Map<string, Finding[]>();
  for (const f of findings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file)!.push(f);
  }

  for (const [file, list] of byFile.entries()) {
    console.error(`• ${file}`);
    list.forEach((f) => {
      console.error(`  - [${f.line}] ${f.message}`);
      console.error(`    ${f.excerpt}`);
    });
  }
  process.exitCode = 1;
}

main();
