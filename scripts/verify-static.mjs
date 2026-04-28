import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');
for (const required of [
  '<title>New Doublo 2.0',
  'https://blog.newdoublo2.com/blog',
  '/assets/index-Buf3chpX.js',
  '/assets/index-CSwyJKN2.css',
]) {
  if (!html.includes(required)) throw new Error(`Missing ${required}`);
}

for (const file of ['assets/index-Buf3chpX.js', 'assets/index-CSwyJKN2.css', 'vercel.json']) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}

const js = fs.readFileSync('assets/index-Buf3chpX.js', 'utf8');
const assetRefs = new Set(js.match(/["']\/(?:assets|images)\/[^"']+["']/g)?.map((ref) => ref.slice(2, -1)) ?? []);
const missingAssets = [...assetRefs].filter((file) => !fs.existsSync(file));
if (missingAssets.length) {
  throw new Error(`Missing static assets referenced by JS:\n${missingAssets.map((file) => `- ${file}`).join('\n')}`);
}

console.log(`Static NewDoublo2 site verified (${assetRefs.size} JS asset refs present)`);
