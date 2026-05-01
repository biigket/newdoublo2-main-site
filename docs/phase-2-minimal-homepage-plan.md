# Phase 2 Minimal Homepage Plan — New Doublo 2

Goal: improve homepage SEO/conversion with the smallest visible changes possible. Do not redesign the page, do not change brand/layout direction, and do not replace the existing visual system unless explicitly approved.

## Phase 1 baseline already applied

SEO-only changes, no visible layout change:
- Safer SEO title
- Safer meta description
- Canonical preserved
- OG/Twitter title/description updated
- JSON-LD expanded with Organization, WebSite, MedicalDevice, and FAQPage
- Risky SEO-head claims removed from metadata
- Existing visible homepage markup/assets preserved

## Phase 2 status

Applied as copy-only minimal patch:
- Replaced visible high-risk superiority/guarantee wording in the bundled homepage copy.
- Kept the existing layout, navigation, assets, and visual system.
- Updated the static no-JS fallback copy to match the safer 3-in-1 positioning.
- Added verification so risky visible claims cannot return silently.

## Phase 2 principle

Change as little as possible in this order:
1. Copy-only edits inside existing sections
2. Add one small crawlable SEO block only if needed
3. Add one small FAQ block near the bottom only if needed
4. Avoid layout redesign, new animations, new color system, or major hero restructuring

## Minimal change set

### 1. Hero copy micro-edit

Keep existing hero layout and visual. Only adjust text if needed:
- Make headline less overclaiming
- Keep “RF & MFU” if it is core brand copy, but avoid guaranteed outcome language
- Avoid claims like “ดีกว่า HIFU”, “กระชับทุกชั้นผิว”, “ไม่ต้องผ่าตัด” unless source/doctor approval confirms exact scope

Suggested safer hero line:
`New Doublo 2.0 — 3-in-1 FL / SD / RM platform`

Suggested safer support line:
`ข้อมูลสำหรับผู้ที่ต้องการเข้าใจ FL, SD และ RM ก่อนปรึกษาคลินิกหรือแพทย์`

### 2. Soft CTA wording

Do not add a full clinic finder unless the system exists.

Use softer CTA labels:
- `อ่านเทคโนโลยี 3-in-1`
- `อ่านบทความ New Doublo 2 Guide`
- `สอบถามข้อมูลการตรวจสอบเครื่องกับคลินิก`

Avoid implying there is already a complete official finder/checker if not live.

### 3. Tiny FL / SD / RM explainer block

If a visible SEO block is needed, add a compact 3-card row under the existing hero, without changing global layout.

Content:
- FL: Focused Linear U/S / MFU, depth 1.5 / 3.0 / 4.5 / 9.0 mm
- SD: MFU + Bipolar RF, depth 1.5–9.0 mm
- RM: RF Microneedle, 49-pin, depth 0.1–3.5 mm

Keep one sentence caveat:
`การเลือกใช้ขึ้นกับการประเมินของแพทย์และข้อจำกัดของแต่ละเคส`

### 4. Minimal FAQ block

Add only 3 FAQs if needed for on-page consistency with schema:
- New Doublo 2 คือ HIFU ไหม?
- ทุกคนต้องใช้ครบ FL / SD / RM ไหม?
- ก่อนเลือกคลินิกควรถามอะไร?

Keep FAQ near the bottom and visually simple.

### 5. Doctor note

Add a short note only if approved:
`การเลือกใช้ FL, SD หรือ RM ไม่ควรตัดสินจากชื่อเทคโนโลยีอย่างเดียว ควรประเมินจากปัญหาผิว ชั้นผิว ประวัติการรักษา และข้อจำกัดของแต่ละเคสก่อนเสมอ`

## Do not do in Phase 2

- Do not redesign homepage UI
- Do not replace current assets
- Do not add before/after claims
- Do not state superiority over HIFU or competitors
- Do not claim guaranteed lift, no pain, no downtime, or no side effects
- Do not add clinic finder/authentic checker claims unless those flows are live and verified

## Verification checklist

Before deploy:
- `npm run build`
- Check raw HTML title/meta/canonical/OG/JSON-LD
- Verify existing JS/CSS asset refs still load
- Visual check homepage for no layout shift or broken assets
- Confirm no risky claims in `<head>`
- Confirm no new visible claims beyond approved copy
