import fs from "node:fs";
import path from "node:path";
import { artifacts, allowedCategories, allowedStatuses } from "../src/artifacts.js";

const root = process.cwd();
const filesToInspect = ["index.html", "src/app.js", "src/artifacts.js", "src/styles.css"];
const failures = [];

for (const file of filesToInspect) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    failures.push(`${file} is missing`);
    continue;
  }
  const content = fs.readFileSync(fullPath, "utf8");
  if (content.includes("console.log")) failures.push(`${file} contains console.log`);
  if (content.includes("TODO")) failures.push(`${file} still contains TODO`);
}

const ids = new Set();
for (const artifact of artifacts) {
  if (!artifact.id || !artifact.title || !artifact.category || !artifact.status || !artifact.summary) {
    failures.push(`Artifact ${artifact.id || "unknown"} is missing a required field`);
  }
  if (ids.has(artifact.id)) failures.push(`Duplicate artifact id: ${artifact.id}`);
  ids.add(artifact.id);
  if (!allowedCategories.includes(artifact.category)) failures.push(`Invalid category for ${artifact.id}`);
  if (!allowedStatuses.includes(artifact.status)) failures.push(`Invalid status for ${artifact.id}`);
}

if (failures.length > 0) {
  console.error("Lint failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Lint passed.");
