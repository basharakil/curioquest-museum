import fs from "node:fs";
import path from "node:path";

const requiredFiles = [
  "dist/index.html",
  "dist/src/app.js",
  "dist/src/artifacts.js",
  "dist/src/styles.css",
  "dist/build-info.json"
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)));

if (missing.length > 0) {
  console.error("Build validation failed. Missing files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

const html = fs.readFileSync(path.join(process.cwd(), "dist/index.html"), "utf8");
if (!html.includes("CurioQuest Museum")) {
  console.error("Build validation failed. dist/index.html does not contain the expected title.");
  process.exit(1);
}

console.log("Build validation passed.");
