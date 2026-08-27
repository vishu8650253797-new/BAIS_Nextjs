import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

async function checkHover(selector, label) {
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  const before = await el.evaluate(e => getComputedStyle(e).boxShadow);
  await el.hover();
  await page.waitForTimeout(350);
  const after = await el.evaluate(e => getComputedStyle(e).boxShadow);
  const transformBefore = await el.evaluate(e => getComputedStyle(e).transform);
  console.log(label, '\n  shadow before:', before.slice(0,60), '\n  shadow after: ', after.slice(0,60), '\n  changed:', before !== after);
}

await checkHover('div:has-text("Smarter strategy, the right path")', 'ProcessBlock card (need parent, checking text div)');
await checkHover('div.rounded-2xl:has-text("Immigrant Visas")', 'VisaCard');
await checkHover('div.rounded-2xl.p-7:has-text("I had the opportunity")', 'Testimonial card');
await checkHover('div.rounded-2xl.bg-white.p-7:has-text("Experience")', 'TrustStats card');

await browser.close();
