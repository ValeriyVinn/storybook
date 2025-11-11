import { launch } from 'puppeteer';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const components = [
  { name: 'Button', stories: ['default', 'hover'] },
  { name: 'Card', stories: ['default', 'with-image'] },
  { name: 'Accordion', stories: ['collapsed', 'expanded'] },
];

const STORYBOOK_URL = 'http://localhost:6006/iframe.html?id='; // базовий URL Storybook

(async () => {
  const browser = await launch();
  const page = await browser.newPage();

  const screenshotsDir = join(__dirname, '../screenshots');
  if (!existsSync(screenshotsDir)) mkdirSync(screenshotsDir);

  for (const comp of components) {
    for (const story of comp.stories) {
      const storyUrl = `${STORYBOOK_URL}${comp.name.toLowerCase()}--${story}`;
      await page.goto(storyUrl);
      await page.waitForTimeout(500); // даємо час на рендер
      const screenshotPath = join(screenshotsDir, `${comp.name.toLowerCase()}-${story}.png`);
      await page.screenshot({ path: screenshotPath });
      console.log(`Saved screenshot: ${screenshotPath}`);
    }
  }

  // Storybook UI
  await page.goto('http://localhost:6006');
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(screenshotsDir, 'storybook-ui.png') });
  console.log('Saved Storybook UI screenshot');

  await browser.close();
})();
