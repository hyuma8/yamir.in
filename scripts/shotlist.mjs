// Prints the photograph shot list from src/data/site.ts and marks which
// files already exist in public/photos/. Run: npm run shots
import { existsSync, readFileSync } from 'node:fs';
const src = readFileSync('src/data/site.ts', 'utf8');
const rows = [...src.matchAll(/\{ id: '([^']+)', page: '([^']+)', subject: '([^']+)', ratio: '([^']+)'(?:, note: '([^']+)')?/g)];
let done = 0;
console.log('\nPHOTOGRAPHS FOR YAMIR.IN — save each as public/photos/<id>.webp, long side 2000px\n');
let page = '';
for (const [, id, pg, subject, ratio, note] of rows) {
  if (pg !== page) { page = pg; console.log(`\n${pg.toUpperCase()}`); }
  const has = existsSync(`public/photos/${id}.webp`); if (has) done++;
  console.log(`  [${has ? 'x' : ' '}] ${id.padEnd(34)} ${ratio.padEnd(5)} ${subject}${note ? `\n       note: ${note}` : ''}`);
}
console.log(`\n${done} of ${rows.length} photographs in place.\n`);
