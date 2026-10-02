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
  assert.match(files[0], /05 apps/);
  assert.match(files[0], /다섯 가지 방식으로/);
  assert.doesNotMatch(files[0], /04 apps/);
  assert.match(files[0], /앱을 만듭니다/);
  assert.doesNotMatch(files[0], /Small ideas/);
  assert.match(files[0], /screenshotSets\.overtake/);
  assert.match(files[0], /screenshotSets\.mintwallet/);
  assert.match(files[0], /screenshotSets\.weeklyswi(?:ft)/);
  assert.match(files[0], /screenshotSets\.ottChart/);
  assert.match(files[0], /href: "\/ott-chart"/);
  assert.match(files[0], /ott-chart\/media\/hero-ko\.jpg/);
  assert.match(files[0], /ott-chart\/media\/widget-ko\.jpg/);
  const widgetImage = await readFile(new URL("public/ott-chart/media/widget-ko.jpg", root));
  assert.ok(widgetImage.byteLength > 50000 && widgetImage.byteLength < 400000);
  assert.match(files[0], /ScreenshotRail/);
  assert.match(files[0], /mintwallet: Array\.from\(\{ length: 11/);
  assert.match(files[0], /\/weeklyswift\/pad_01\.png/);
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

test("OTT Chart privacy and support pages cover supported locales", async () => {
  const [config, landing, privacy, support] = await Promise.all([
    readFile(new URL("next.config.ts", root), "utf8"),
    readFile(new URL("public/ott-chart/index.html", root), "utf8"),
    readFile(new URL("public/ott-chart/privacy/index.html", root), "utf8"),
    readFile(new URL("public/ott-chart/support/index.html", root), "utf8"),
  ]);

  assert.match(config, /\/ott-chart.*\/ott-chart\/index\.html/);
  assert.match(config, /\/ott-chart\/privacy/);
  assert.match(config, /\/ott-chart\/support/);
  for (const locale of ["ko", "en", "ja"]) {
    assert.match(landing, new RegExp(`data-locale="${locale}"`));
    assert.match(privacy, new RegExp(`data-locale="${locale}"`));
    assert.match(support, new RegExp(`data-locale="${locale}"`));
  }
  assert.match(landing, /App Store 출시 준비 중/);
  assert.match(landing, /Coming soon to the App Store/);
  assert.match(landing, /App Store公開準備中/);
  assert.doesNotMatch(landing, /apps\.apple\.com\/app\/id6817267231/);
  assert.match(landing, /Home Screen widget/);
  assert.match(landing, /확정된 공개일 오전 9시/);
  assert.match(landing, /languageNav: "언어"/);
  assert.match(landing, /languageNav: "言語"/);
  for (const locale of ["ko", "en", "ja"]) {
    const image = await readFile(new URL(`public/ott-chart/media/hero-${locale}.jpg`, root));
    assert.ok(image.byteLength > 50000 && image.byteLength < 400000);
  }
  assert.match(privacy, /Firebase Analytics/);
  assert.match(privacy, /로컬 공개 알림/);
  assert.match(privacy, /공개일 알림은 사용자가 iOS 알림 권한을 허용하면 기기 안에 예약됩니다/);
  assert.doesNotMatch(privacy, /Firebase Cloud Messaging|remote schedule-change notifications|topic subscription|トピック購読/);
  assert.match(privacy, /정보주체는.*열람, 정정·삭제, 처리정지/);
  assert.match(privacy, /Where applicable law provides these rights/);
  assert.match(privacy, /ご本人の権利/);
  assert.match(privacy, /us-central1/);
  assert.match(privacy, /US-EAST1/);
  assert.match(privacy, /2026年10月2日/);
  assert.match(privacy, /October 2, 2026/);
  assert.match(privacy, /최정훈 · CoolMint/);
  assert.match(privacy, /data-language-nav/);
  assert.match(support, /data-language-nav/);
  assert.match(privacy, /個人情報保護担当者/);
  assert.match(privacy, /hello@coolmint\.studio/);
  assert.match(privacy, /data-locale-href="\/ott-chart\/support"/);
  assert.match(support, /hello@coolmint\.studio/);
  assert.match(support, /data-locale-href="\/ott-chart\/privacy"/);
  assert.match(support, /ott-chart\/privacy/);
  assert.match(support, /data-locale="ja">プライバシー/);
});
