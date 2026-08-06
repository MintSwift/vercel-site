import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("portfolio routes and metadata are present", async () => {
  const files = await Promise.all([
    "app/page.tsx", "app/components/ProjectBanner.tsx", "app/components/ContactButton.tsx", "app/overtake/page.tsx", "app/overtake/privacy.html/page.tsx", "app/overtake/terms.html/page.tsx", "app/overtake/policy-content.tsx", "app/mintwallet/page.tsx", "app/weeklyswift/page.tsx", "app/layout.tsx", "vercel.json",
  ].map((file) => readFile(new URL(file, root), "utf8")));
  const appAds = await Promise.all([
    "public/app-ads.txt", "public/overtake/app-ads.txt", "public/mintwallet/app-ads.txt", "public/weeklyswift/app-ads.txt",
  ].map((file) => readFile(new URL(file, root), "utf8")));
  for (const content of appAds) {
    assert.equal(content.trim(), "google.com, pub-1655656579913535, DIRECT, f08c47fec0942fa0");
  }
  assert.match(files[0], /href: "\/overtake"/);
  assert.match(files[0], /href: "\/mintwallet"/);
  assert.match(files[0], /app-intro-section/);
  assert.match(files[0], /href: "\/weeklyswift"/);
  assert.match(files[0], /03 products/);
  assert.match(files[1], /vercel-header-overtake-black-layout-v3\.png/);
  assert.match(files[1], /vercel-header-mintwallet-white-layout-v2\.png/);
  assert.match(files[1], /vercel-header-mintwallet-black-layout-v2\.png/);
  assert.match(files[1], /onTouchStart/);
  assert.match(files[1], /vercel-header-weeklyswift-white-layout-v2\.png/);
  assert.match(files[2], /FORM_URL/);
  assert.match(files[3], /Overtake/);
  assert.match(files[3], /ProjectBanner/);
  assert.match(files[3], /projectName="Overtake"/);
  assert.match(files[3], /ContactButton/);
  assert.match(files[3], /id6760613857/);
  assert.match(files[4], /privacySections/);
  assert.match(files[5], /termsSections/);
  assert.match(files[6], /개인정보 처리방침/);
  assert.match(files[6], /이용약관/);
  assert.match(files[7], /MintWallet/);
  assert.match(files[7], /ProjectBanner/);
  assert.match(files[7], /projectName="MintWallet"/);
  assert.match(files[7], /id1532835617/);
  assert.match(files[8], /민트주간/);
  assert.match(files[8], /vercel-header-weeklyswift-white-layout-v2\.png/);
  assert.match(files[8], /1661868347/);
  assert.match(files[8], /App Store Connect/);
  assert.match(files[9], /lang="ko"/);
  assert.equal(JSON.parse(files[10]).framework, "nextjs");
});
