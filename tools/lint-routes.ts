import fs from 'fs';
import path from 'path';
import { ROUTES, LEGACY_ROUTES, DYNAMIC_ROUTE_PREFIXES } from '../lib/routes';

type Finding = {
  file: string;
  line: number;
  message: string;
  excerpt: string;
};

const roots = ['app', 'components', 'hooks', 'lib', 'src'];
const exts = new Set(['.ts', '.tsx']);

const allowedRoutes = new Set<string>(Object.values(ROUTES));
const legacyRoutes = new Set<string>(LEGACY_ROUTES as readonly string[]);
const dynamicPrefixes = Array.from(DYNAMIC_ROUTE_PREFIXES);

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

function isInternalPath(raw: string) {
  return raw.startsWith('/') && !raw.startsWith('//');
}

function stripHashAndQuery(raw: string) {
  let base = raw;
  const hashIndex = base.indexOf('#');
  if (hashIndex >= 0) base = base.slice(0, hashIndex);
  const queryIndex = base.indexOf('?');
  if (queryIndex >= 0) base = base.slice(0, queryIndex);
  return base === '' ? '/' : base;
}

function isDynamicAllowed(base: string) {
  if (!base.includes('${')) return false;
  const prefix = base.split('${')[0];
  return dynamicPrefixes.some((allowed) => prefix.startsWith(allowed));
}

const hrefLiteralPatterns = [
  /href\s*=\s*"([^"]+)"/g,
  /href\s*=\s*'([^']+)'/g,
  /href\s*=\s*{\s*"([^"]+)"\s*}/g,
  /href\s*=\s*{\s*'([^']+)'\s*}/g,
  /href\s*=\s*{\s*`([^`]+)`\s*}/g,
];

function lintFile(file: string) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  lines.forEach((line, idx) => {
    const lineNumber = idx + 1;

    for (const pattern of hrefLiteralPatterns) {
      pattern.lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = pattern.exec(line)) !== null) {
        const raw = match[1];

        if (!isInternalPath(raw)) continue;

        const base = stripHashAndQuery(raw);

        if (legacyRoutes.has(base)) {
          addFinding(file, lineNumber, `Legacy route used (${base}). Prefer canonical routes.`, line);
          continue;
        }

        if (allowedRoutes.has(base)) continue;
        if (isDynamicAllowed(base)) continue;

        addFinding(file, lineNumber, `Unknown internal route (${base}).`, line);
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
    console.log('Route lint: no issues found.');
    return;
  }

  console.error(`Route lint failed (${findings.length} issues)\n`);
  const byFile = new Map<string, Finding[]>();
  for (const f of findings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file)!.push(f);
  }

  for (const [file, list] of byFile.entries()) {
    console.error(`- ${file}`);
    list.forEach((f) => {
      console.error(`  - [${f.line}] ${f.message}`);
      console.error(`    ${f.excerpt}`);
    });
  }
  process.exitCode = 1;
}

main();
