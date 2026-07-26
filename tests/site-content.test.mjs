import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("portfolio routes and metadata are present", async () => {
  const files = await Promise.all([
    "app/page.tsx", "app/overtake/page.tsx", "app/mintwallet/page.tsx", "app/layout.tsx", "vercel.json",
  ].map((file) => readFile(new URL(file, root), "utf8")));
  assert.match(files[0], /href: "\/overtake"/);
  assert.match(files[0], /href: "\/mintwallet"/);
  assert.match(files[1], /Overtake/);
  assert.match(files[2], /MintWallet/);
  assert.match(files[3], /lang="ko"/);
  assert.equal(JSON.parse(files[4]).framework, "nextjs");
});
