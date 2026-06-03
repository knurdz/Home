import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const projects = [
  { slug: "origami", url: "https://origami.knurdz.org" },
  { slug: "mazex", url: "https://mazex.knurdz.org" },
  { slug: "what-should-i-build", url: "https://whatshouldibuild.knurdz.org" },
  { slug: "defense-panel", url: "https://defense-panel-two.vercel.app/" },
  { slug: "nexus-os", url: "https://roaring-mooncake-e0698a.netlify.app/" },
  { slug: "diss-master", url: "https://diss-master.knurdz.org" },
  { slug: "meta-scribe", url: "https://meta-scribe.vercel.app/" },
];

const WIDTH = 1920;
const HEIGHT = 720;

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: WIDTH, height: 1080 },
  deviceScaleFactor: 2,
});

for (const project of projects) {
  const dir = path.join("public/images/projects", project.slug);
  fs.mkdirSync(dir, { recursive: true });
  const outPath = path.join(dir, "banner.png");

  const page = await context.newPage();
  try {
    await page.goto(project.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: outPath,
      clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
    });
    console.log(`OK ${project.slug} -> ${outPath}`);
  } catch (err) {
    console.error(`FAIL ${project.slug}:`, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
