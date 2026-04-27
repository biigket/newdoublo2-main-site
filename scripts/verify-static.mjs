import fs from 'node:fs';
const html = fs.readFileSync('index.html','utf8');
for (const required of ['<title>New Doublo 2.0', 'https://blog.newdoublo2.com/blog', '/assets/index-Buf3chpX.js', '/assets/index-CSwyJKN2.css']) {
  if (!html.includes(required)) throw new Error(`Missing ${required}`);
}
for (const file of ['assets/index-Buf3chpX.js','assets/index-CSwyJKN2.css','vercel.json']) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
console.log('Static NewDoublo2 site verified');
