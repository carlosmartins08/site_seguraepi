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

const allowedRadius = new Set(['sm', 'md', 'lg', 'xl', '2xl', 'full']);
const ignoreFiles = new Set([
  path.join('src', 'styles', 'tokens.ts'),
  path.join('app', 'opengraph-image.tsx'),
  path.join('app', 'twitter-image.tsx'),
  path.join('app', 'epi', '[categoria]', 'opengraph-image.tsx'),
]);

const forbiddenRawTypography = /\btext-(xs|sm|base|lg|xl|[2-9]xl)\b/;

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

    if (/(^|\s)(-)?(p|m|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb|gap|space-[xy])-\[/.test(line)) {
      addFinding(file, lineNumber, 'Arbitrary spacing value (use spacing tokens)', line);
    }

    if (/rounded-\[/.test(line)) {
      addFinding(file, lineNumber, 'Radius arbitrario (rounded-[...])', line);
    }

    const radiusRegex = /rounded(?:-[trbl]{1,2})?-([a-z0-9]+)/g;
    let radiusMatch: RegExpExecArray | null;
    while ((radiusMatch = radiusRegex.exec(line)) !== null) {
      const token = radiusMatch[1];
      if (token && !allowedRadius.has(token)) {
        addFinding(file, lineNumber, `Radius fora da escala (${token})`, line);
      }
    }

    if (forbiddenRawTypography.test(line)) {
      addFinding(
        file,
        lineNumber,
        'Tipografia crua detectada (use text-display*, text-title*, text-body* ou text-label*)',
        line,
      );
    }

    if (/(^|\s)(text|border|fill|stroke)-\[/.test(line)) {
      addFinding(file, lineNumber, 'Cor arbitraria detectada (use token/classe semantica)', line);
    }

    if (!line.includes('bg-[')) {
      if (/(#[0-9A-Fa-f]{3,8})/.test(line)) {
        addFinding(file, lineNumber, 'Hex encontrado (use tokens/classe semantica)', line);
      }
      if (/rgba\(/i.test(line)) {
        addFinding(file, lineNumber, 'RGBA encontrado (use tokens/classe semantica)', line);
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
    console.log('Design lint: nenhum problema encontrado.');
    return;
  }

  console.error(`Design lint falhou (${findings.length} problemas)\n`);

  const byFile = new Map<string, Finding[]>();
  for (const finding of findings) {
    if (!byFile.has(finding.file)) byFile.set(finding.file, []);
    byFile.get(finding.file)!.push(finding);
  }

  for (const [file, list] of byFile.entries()) {
    console.error(`- ${file}`);
    list.forEach((finding) => {
      console.error(`  - [${finding.line}] ${finding.message}`);
      console.error(`    ${finding.excerpt}`);
    });
  }

  process.exitCode = 1;
}

main();
