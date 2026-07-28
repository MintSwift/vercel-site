import type { Metadata } from "next";
import Link from "next/link";
import AppStoreButton from "../components/AppStoreButton";
import IPhoneFrame from "../components/IPhoneFrame";
import ProjectBanner from "../components/ProjectBanner";

export const metadata: Metadata = {
  title: "MintWallet — 나만의 디지털 지갑 | CoolMint",
  description: "카드·계좌·구독·개인정보를 한곳에 안전하게 정리하는 나만의 디지털 지갑.",
};

const productFeatures = [
  {
    label: "카드 관리",
    title: "카드 정보를\n깔끔하게 정리하세요",
    description: "여러 장의 신용카드와 체크카드를 한곳에 보관하고, 필요한 카드 정보를 빠르게 확인하세요.",
    images: ["/mintwallet/02.png", "/mintwallet/03.png"],
  },
  {
    label: "계좌 관리",
    title: "계좌번호도\n안전하게 보관하세요",
    description: "은행 계좌와 보안 정보를 따로 기억하지 않아도 됩니다. 필요한 순간에 보호된 화면에서 확인할 수 있습니다.",
    images: ["/mintwallet/04.png", "/mintwallet/05.png"],
  },
  {
    label: "구독 관리",
    title: "반복되는 지출을\n미리 확인하세요",
    description: "다음 결제일과 금액, 월 예상 지출을 한눈에 보고 매달 반복되는 결제를 더 편하게 관리하세요.",
    images: ["/mintwallet/06.png", "/mintwallet/07.png"],
  },
  {
    label: "개인정보 보관",
    title: "중요한 신분 정보를\n필요할 때 바로",
    description: "주민등록증, 여권, 운전면허증, 통관고유부호까지 찾기 어려운 정보를 목적별로 정리하세요.",
    images: ["/mintwallet/08.png", "/mintwallet/09.png", "/mintwallet/10.png"],
  },
];

const faqs = [
  ["정보가 서버에 저장되나요?", "아니요. MintWallet은 별도의 서버에 개인정보를 저장하지 않는 독립 실행형 앱입니다."],
  ["백업은 어떻게 관리하나요?", "암호화된 백업 파일을 직접 내보내 원하는 위치에 보관할 수 있습니다. 백업 비밀번호를 잊으면 복구할 수 없으니 안전하게 보관해 주세요."],
  ["어떤 기기에서 사용할 수 있나요?", "iOS 17.0 이상을 지원하는 iPhone과 iPad에서 사용할 수 있습니다."],
];

export default function MintWalletPage() {
  return (
    <main className="case-page case-wallet astrowind-wallet-page">
      <header className="site-header page-shell">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">✦</span>CoolMint
        </Link>
        <Link className="back-link" href="/">Back to portfolio <span aria-hidden="true">↗</span></Link>
      </header>
      <ProjectBanner projectName="MintWallet" />

      <section className="astrowind-wallet-hero page-shell">
        <div className="astrowind-wallet-hero-copy">
          <span className="astrowind-wallet-pill"><span aria-hidden="true">✦</span> 나만의 디지털 지갑</span>
          <h1>중요한 정보를<br /><strong>한곳에, 안전하게.</strong></h1>
          <p>카드·계좌·구독·개인정보를 복잡하지 않게 정리하고, 필요한 순간에 바로 확인하세요.</p>
          <div className="astrowind-wallet-actions">
            <AppStoreButton href="https://apps.apple.com/kr/app/id1532835617" locale="ko-kr" />
            <a className="astrowind-text-link" href="#features">주요 기능 보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="astrowind-wallet-proof"><span>iOS 17.0+</span><span>한국어 · English · 日本語</span><span>개인정보를 수집하지 않음</span></div>
        </div>
        <div className="astrowind-wallet-hero-art" aria-label="MintWallet 구독 화면 미리보기">
          <div className="astrowind-wallet-glow" />
          <IPhoneFrame
            alt="MintWallet 위젯 화면"
            className="astrowind-wallet-hero-device"
            mode="dark"
            priority
            sizes="(max-width: 800px) 62vw, 300px"
            src="/mintwallet/01.png"
          />
          <span className="astrowind-wallet-float astrowind-wallet-float-one">구독 결제일</span>
          <span className="astrowind-wallet-float astrowind-wallet-float-two">내 정보는 내가 보관</span>
        </div>
      </section>

      <section className="astrowind-wallet-value page-shell">
        <div><strong>카드 · 계좌</strong><span>흩어진 정보를 한곳에</span></div>
        <div><strong>구독 일정</strong><span>다음 결제를 미리 확인</span></div>
        <div><strong>암호화 백업</strong><span>내가 직접 보관하고 복원</span></div>
      </section>

      <section id="features" className="astrowind-wallet-features page-shell">
        <div className="astrowind-wallet-section-intro">
          <span className="astrowind-wallet-eyebrow">MintWallet features</span>
          <h2>필요한 순간,<br /><strong>바로 찾도록.</strong></h2>
          <p>매일 쓰는 정보는 단순하게, 민감한 정보는 안전하게. MintWallet은 생활 속 금융 정보를 한 화면의 흐름으로 정리합니다.</p>
        </div>
        <div className="astrowind-wallet-feature-list">
          {productFeatures.map((feature, index) => (
            <article className={`astrowind-wallet-feature astrowind-wallet-feature-${index + 1}`} key={feature.label}>
              <div className="astrowind-wallet-feature-copy">
                <span className="astrowind-wallet-feature-index">0{index + 1}</span>
                <span className="astrowind-wallet-eyebrow">{feature.label}</span>
                <h3>{feature.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                <p>{feature.description}</p>
              </div>
              <div className={`astrowind-wallet-feature-images${feature.images.length === 3 ? " is-trio" : ""}`}>
                {feature.images.map((image, imageIndex) => (
                  <IPhoneFrame
                    alt={`${feature.label} 화면 ${imageIndex + 1}`}
                    className="astrowind-wallet-feature-image"
                    key={image}
                    sizes="(max-width: 800px) 35vw, 205px"
                    src={image}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="astrowind-wallet-security page-shell">
        <div className="astrowind-wallet-security-copy">
          <span className="astrowind-wallet-eyebrow">Private by design</span>
          <h2>내 정보는<br /><strong>내가 보관합니다.</strong></h2>
          <p>MintWallet은 개인정보를 수집하거나 별도의 서버에 저장하지 않습니다. 기기 내 암호화와 앱 잠금, 직접 관리하는 백업으로 나만의 보관 방식을 완성하세요.</p>
          <Link className="astrowind-wallet-outline-button" href="/mintwallet/privacy-policy">개인정보 처리방침 <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="astrowind-wallet-security-art">
          <div className="astrowind-wallet-security-card"><span>SECURE BACKUP</span><strong>내가 설정한<br />비밀번호로 암호화</strong><small>iCloud · Export · Restore</small></div>
          <div className="astrowind-wallet-security-orbit" />
        </div>
      </section>

      <section className="astrowind-wallet-faq page-shell">
        <div className="astrowind-wallet-section-intro"><span className="astrowind-wallet-eyebrow">FAQ</span><h2>궁금한 점을<br /><strong>먼저 확인하세요.</strong></h2></div>
        <div className="astrowind-wallet-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="astrowind-wallet-cta page-shell">
        <div><span className="astrowind-wallet-eyebrow">Start with MintWallet</span><h2>중요한 정보 관리를<br /><strong>오늘 시작하세요.</strong></h2><p>카드부터 구독, 개인정보까지 한 곳에서 안전하게 관리하세요.</p></div>
        <AppStoreButton href="https://apps.apple.com/kr/app/id1532835617" locale="ko-kr" />
      </section>

      <footer className="case-footer page-shell">
        <div className="case-policy-links"><Link href="/mintwallet/privacy-policy">Privacy Policy</Link><Link href="/mintwallet/terms">Terms of Use</Link></div>
        <Link href="/overtake">Next project <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
