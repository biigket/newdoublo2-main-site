import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');
const head = html.match(/<head[\s\S]*?<\/head>/i)?.[0] ?? '';
const js = fs.readFileSync('assets/index-Buf3chpX.js', 'utf8');

for (const required of [
  '<title>New Doublo 2 คืออะไร? 3-in-1 FL / SD / RM ไม่ใช่แค่ HIFU</title>',
  'content="รู้จัก New Doublo 2 แบบเข้าใจง่าย: แพลตฟอร์ม 3-in-1 ที่รวม FL, SD และ RM พร้อมข้อมูลสเปกและข้อควรรู้ก่อนเลือกคลินิก"',
  '<link rel="canonical" href="https://newdoublo2.com/" />',
  '<meta property="og:type" content="website" />',
  '<meta property="og:title" content="New Doublo 2 คืออะไร? 3-in-1 FL / SD / RM ไม่ใช่แค่ HIFU">',
  '<meta name="twitter:title" content="New Doublo 2 คืออะไร? 3-in-1 FL / SD / RM ไม่ใช่แค่ HIFU">',
  '"@type": "MedicalDevice"',
  '"@type": "FAQPage"',
  'https://blog.newdoublo2.com/blog',
  '/assets/index-Buf3chpX.js',
  '/assets/index-CSwyJKN2.css',
]) {
  if (!html.includes(required)) throw new Error(`Missing ${required}`);
}

for (const risky of ['พิสูจน์แล้วว่าดีกว่า', 'ดีกว่า HIFU เดี่ยว', 'กระชับทุกชั้นผิว', 'ไม่ต้องผ่าตัด']) {
  if (head.includes(risky)) throw new Error(`Risky SEO claim remains in head: ${risky}`);
}

for (const risky of [
  'พิสูจน์แล้วว่า',
  'รวมกันดีกว่า',
  'ดีกว่า HIFU',
  'เหนือยิ่งกว่า',
  'เครื่องเดียว ทำได้ทุกอย่าง',
  'ครบทุกปัญหา',
  'ไม่ต้องผ่าตัด',
  'ไม่มี Downtime',
  'เห็นผลชัด',
  'เจ็บน้อยสุดๆ',
  'ไม่ต้องแปะยาชา',
  'ผลลัพธ์ดีจึ้ง',
  'ครบจบในเครื่องเดียว',
  'คุ้มค่ากว่า',
  'ครบทุกชั้นผิว',
  'กระชับทันที',
  'หน้าเรียวขึ้น',
  'ผิวแน่นขึ้นตั้งแต่ครั้งแรก',
  'สลายไขมัน',
  'ลดแก้มป่อง',
  'ผิว Glow',
  'ผิวฟื้นตัวไว',
  'ทุกคนเลือก',
  'เครื่องเริ่ดกว่า',
  'ตัวจบงานผิว',
  'ซ้ำแน่นอน',
]) {
  if (html.includes(risky) || js.includes(risky)) throw new Error(`Risky visible claim remains: ${risky}`);
}

for (const unchanged of [
  '<div id="root">',
  '<main style="font-family:Kanit,Arial,sans-serif;max-width:960px;margin:0 auto;padding:48px 24px;color:#f6fbff;background:#061522">',
  '<h1>New Doublo 2.0 — 3-in-1 FL / SD / RM platform</h1>',
]) {
  if (!html.includes(unchanged)) throw new Error(`Visible homepage markup changed or missing: ${unchanged}`);
}

for (const file of ['assets/index-Buf3chpX.js', 'assets/index-CSwyJKN2.css', 'vercel.json']) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}

const assetRefs = new Set(js.match(/["']\/(?:assets|images)\/[^"']+["']/g)?.map((ref) => ref.slice(2, -1)) ?? []);
const missingAssets = [...assetRefs].filter((file) => !fs.existsSync(file));
if (missingAssets.length) {
  throw new Error(`Missing static assets referenced by JS:\n${missingAssets.map((file) => `- ${file}`).join('\n')}`);
}

console.log(`Static NewDoublo2 site verified (${assetRefs.size} JS asset refs present)`);
