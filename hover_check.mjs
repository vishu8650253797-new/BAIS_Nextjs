import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

// Process block card hover
await page.locator('text=Smarter strategy').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.hover('text=Smarter strategy');
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/hover-process.png' });

// Coverage visa card hover
await page.locator('text=Immigrant Visas').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.hover('text=Immigrant Visas');
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/hover-visa.png' });

// Testimonial card hover
await page.locator('text=A trusted partner').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
const card = page.locator('p:has-text("I had the opportunity")').first();
await card.hover();
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/hover-testimonial.png' });

// TrustStats hover
await page.locator('text=Experience you can count on').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.hover('text=25+ years');
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/hover-stats.png' });

// Blog card hover
await page.locator('text=From the BAIS Blog').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.hover('text=STEM OPT Ending');
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/hover-blog.png' });

console.log('errors:', errors.length ? errors : 'none');
await browser.close();
