import { chromium } from 'playwright';
import path from 'path';

const sites = [
  { id: 'muhasaba', url: 'https://muhasaba.me/' },
  { id: 'villa-cottages', url: 'https://villacottages.in/' },
  { id: 'altayyab', url: 'https://www.altayyabglobalconsultants.com/' },
  { id: 'alisaffudin', url: 'https://alisaffudin.com/' },
  { id: 'offerxray', url: 'https://www.offerxray.com/' },
];

const OUT_DIR = path.join(process.cwd(), 'public', 'design-work');

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  for (const site of sites) {
    console.log(`Capturing ${site.id}...`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1500);
      const outPath = path.join(OUT_DIR, `${site.id}.png`);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  ✓ Saved ${outPath}`);
    } catch (err) {
      console.error(`  ✗ Failed ${site.id}:`, err);
    }
  }

  await browser.close();
}

main();
