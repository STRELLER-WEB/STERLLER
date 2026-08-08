/**
 * One-off script: generate .webp versions of the public JPEG assets.
 * Run with: npm run images
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.resolve(process.cwd(), "client", "public", "assets");

async function main() {
  const files = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".jpg"));
  for (const file of files) {
    const source = path.join(assetsDir, file);
    const target = path.join(assetsDir, file.replace(/\.jpg$/, ".webp"));
    await sharp(source).webp({ quality: 82 }).toFile(target);
    const before = fs.statSync(source).size;
    const after = fs.statSync(target).size;
    console.log(`${file} -> ${path.basename(target)} (${before} -> ${after} bytes)`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
