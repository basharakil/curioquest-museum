import test from "node:test";
import assert from "node:assert/strict";
import { artifacts, allowedCategories, allowedStatuses } from "../src/artifacts.js";

test("artifact catalog has at least three artifacts", () => {
  assert.ok(artifacts.length >= 3);
});

test("artifact ids are unique", () => {
  const ids = artifacts.map((artifact) => artifact.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("each artifact uses valid category and status values", () => {
  for (const artifact of artifacts) {
    assert.ok(allowedCategories.includes(artifact.category), `${artifact.id} has invalid category`);
    assert.ok(allowedStatuses.includes(artifact.status), `${artifact.id} has invalid status`);
  }
});

test("at least one artifact is ready for visitors", () => {
  assert.ok(artifacts.some((artifact) => artifact.status === "on-display"));
});
