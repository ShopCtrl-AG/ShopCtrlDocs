// Helper for the Dutch (nl) translation of the docs.
//
//   node scripts/i18n-nl.mjs prepare [docs-subfolder-or-file]
//     Copies English docs that have no Dutch version yet into the nl folder and
//     stamps every heading with its English ID ({#english-id}), so links to
//     sections keep working after the headings are translated.
//     Existing Dutch files are never overwritten.
//
//   node scripts/i18n-nl.mjs status
//     Lists English docs that are not translated yet, and translated docs whose
//     English source changed after the translation (by last git commit, or by
//     file modification time for uncommitted files).

import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {writeMarkdownHeadingId} from '@docusaurus/utils';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'docs');
const DEST = path.join(ROOT, 'i18n', 'nl', 'docusaurus-plugin-content-docs', 'current');

function listDocs(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listDocs(full));
    else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

function lastChanged(file) {
  const rel = path.relative(ROOT, file);
  const dirty = execFileSync('git', ['status', '--porcelain', '--', rel], {cwd: ROOT}).toString().trim();
  if (!dirty) {
    const ts = execFileSync('git', ['log', '-1', '--format=%ct', '--', rel], {cwd: ROOT}).toString().trim();
    if (ts) return Number(ts) * 1000;
  }
  return fs.statSync(file).mtimeMs;
}

function prepare(target = '') {
  const start = path.resolve(SRC, target);
  const files = fs.statSync(start).isDirectory() ? listDocs(start) : [start];
  let created = 0;
  for (const src of files) {
    const dest = path.join(DEST, path.relative(SRC, src));
    if (fs.existsSync(dest)) continue;
    // Links written as /docs/User-Guide/...md resolve to the English source file and break as soon
    // as the target page has a Dutch version; /User-Guide/...md resolves in both languages.
    const content = fs.readFileSync(src, 'utf8').replaceAll('](/docs/User-Guide/', '](/User-Guide/');
    fs.mkdirSync(path.dirname(dest), {recursive: true});
    fs.writeFileSync(dest, writeMarkdownHeadingId(content, {maintainCase: false, overwrite: false}));
    console.log('prepared', path.relative(ROOT, dest));
    created++;
  }
  console.log(`${created} file(s) prepared, ${files.length - created} already existed.`);
}

function status() {
  const missing = [];
  const prepared = [];
  const stale = [];
  const stripIds = (s) => s.replace(/ \{#[^}]+\}$/gm, '').replace(/\r\n/g, '\n').trim();
  for (const src of listDocs(SRC)) {
    const rel = path.relative(SRC, src);
    const dest = path.join(DEST, rel);
    if (!fs.existsSync(dest)) missing.push(rel);
    else if (stripIds(fs.readFileSync(dest, 'utf8')) === stripIds(fs.readFileSync(src, 'utf8'))) prepared.push(rel);
    else if (lastChanged(src) > lastChanged(dest)) stale.push(rel);
  }
  console.log(`Not translated (${missing.length}):`);
  missing.forEach((f) => console.log('  ' + f));
  console.log(`\nPrepared but still English (${prepared.length}):`);
  prepared.forEach((f) => console.log('  ' + f));
  console.log(`\nEnglish changed after translation (${stale.length}):`);
  stale.forEach((f) => console.log('  ' + f));
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'prepare') prepare(arg);
else if (cmd === 'status') status();
else console.log('Usage: node scripts/i18n-nl.mjs prepare [docs-subfolder] | status');
