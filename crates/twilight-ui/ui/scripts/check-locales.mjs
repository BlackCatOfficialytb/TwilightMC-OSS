// Locale catalog check: every en-US key must exist in vi-VN, and both
// catalogs must parse without Fluent syntax errors. FluentResource silently
// drops lines it cannot parse, so parse errors are detected by comparing the
// number of top-level message/term starts in the raw source with the number
// of entries the parser produced.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { FluentResource } from '@fluent/bundle';

const here = dirname(fileURLToPath(import.meta.url));
const locales = join(here, '../../../../locales');

let failed = false;
const ids = {};

for (const loc of ['en-US', 'vi-VN']) {
  const src = readFileSync(join(locales, loc, 'main.ftl'), 'utf8');
  const res = new FluentResource(src);
  // top-level entries start at column 0: `id = value` (messages) or `-id = value` (terms)
  const starts = src.split('\n').filter((line) => /^-?[\w][\w-]*\s*=/.test(line)).length;
  const parsed = res.body.length;
  if (starts !== parsed) {
    console.error(`${loc}/main.ftl: ${starts} message start(s) but ${parsed} parsed — syntax error(s) present.`);
    failed = true;
  }
  ids[loc] = new Set(res.body.map((e) => e.id));
}

const missing = [...ids['en-US']].filter((id) => !ids['vi-VN'].has(id));
if (missing.length) {
  console.error(`vi-VN is missing ${missing.length} key(s) present in en-US:\n  ${missing.join('\n  ')}`);
  failed = true;
}

if (failed) process.exit(1);
console.log(`locales OK: ${ids['en-US'].size} en-US keys, ${ids['vi-VN'].size} vi-VN keys, 0 missing, 0 parse errors.`);
