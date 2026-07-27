import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("portfolio routes and metadata are present", async () => {
  const files = await Promise.all([
    "app/page.tsx", "app/components/ProjectBanner.tsx", "app/overtake/page.tsx", "app/overtake/privacy.html/page.tsx", "app/overtake/terms.html/page.tsx", "app/overtake/policy-content.tsx", "app/mintwallet/page.tsx", "app/layout.tsx", "vercel.json",
  ].map((file) => readFile(new URL(file, root), "utf8")));
  assert.match(files[0], /href: "\/overtake"/);
  assert.match(files[0], /href: "\/mintwallet"/);
  assert.match(files[1], /vercel-header-overtake-white-layout-v2\.png/);
  assert.match(files[1], /vercel-header-overtake-black-layout-v2\.png/);
  assert.match(files[1], /vercel-header-mintwallet-white-layout-v2\.png/);
  assert.match(files[1], /vercel-header-mintwallet-black-layout-v2\.png/);
  assert.match(files[2], /Overtake/);
  assert.match(files[2], /ProjectBanner/);
  assert.match(files[2], /id6760613857/);
  assert.match(files[3], /privacySections/);
  assert.match(files[4], /termsSections/);
  assert.match(files[5], /개인정보 처리방침/);
  assert.match(files[5], /이용약관/);
  assert.match(files[6], /MintWallet/);
  assert.match(files[6], /ProjectBanner/);
  assert.match(files[6], /id1532835617/);
  assert.match(files[7], /lang="ko"/);
  assert.equal(JSON.parse(files[8]).framework, "nextjs");
});
