import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(dist, "index.html"));
fs.cpSync(path.join(root, "src"), path.join(dist, "src"), { recursive: true });
fs.writeFileSync(
  path.join(dist, "build-info.json"),
  JSON.stringify({ app: "CurioQuest Museum", builtAt: new Date().toISOString() }, null, 2)
);

console.log("Build completed: dist/");
