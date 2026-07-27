import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectBanner from "../components/ProjectBanner";

export const metadata: Metadata = {
  title: "MintWallet — Personal information, kept safe | CoolMint",
  description: "카드·계좌·구독·개인정보를 한곳에 안전하게 정리하는 나만의 디지털 지갑.",
};

const appShots = [
  { src: "/mintwallet/01.png", number: "01", label: "Widgets", title: "다음 결제와 순위를 한눈에", description: "앱을 열지 않아도 다음 구독 일정과 팀 선택, 주요 순위를 홈 화면에서 바로 확인할 수 있습니다." },
  { src: "/mintwallet/02.png", number: "02", label: "Cards", title: "모든 카드를 깔끔하게 정리", description: "여러 장의 신용카드와 체크카드를 한 화면에서 보고, 카드사와 마지막 네 자리를 빠르게 찾습니다." },
  { src: "/mintwallet/03.png", number: "03", label: "Card details", title: "필요한 정보만 빠르게 확인", description: "카드번호와 CVC 같은 민감한 정보는 잠금 상태로 보관하고, 필요할 때만 인증 후 확인합니다." },
  { src: "/mintwallet/04.png", number: "04", label: "Bank accounts", title: "계좌번호도 안전하게 보관", description: "흩어진 은행 계좌를 정리해 급하게 송금하거나 정보를 전달해야 할 때 헤매지 않도록 합니다." },
  { src: "/mintwallet/05.png", number: "05", label: "Account details", title: "복사하고 확인하는 계좌 정보", description: "계좌번호, 비밀번호, 보안카드처럼 함께 관리해야 하는 정보를 한곳에서 보호합니다." },
  { src: "/mintwallet/06.png", number: "06", label: "Subscriptions", title: "구독 결제일과 지출을 한곳에", description: "월 예상 지출과 구독 개수를 한눈에 보고, 서비스별 결제 금액과 다음 결제일을 비교합니다." },
  { src: "/mintwallet/07.png", number: "07", label: "Subscription details", title: "다음 결제를 미리 준비", description: "환율과 결제 주기까지 포함한 구독 상세 정보로 매달 반복되는 지출을 더 선명하게 관리합니다." },
  { src: "/mintwallet/08.png", number: "08", label: "Personal information", title: "중요한 신분 정보를 정리", description: "주민등록증, 운전면허증, 여권, 통관고유부호를 각각의 목적에 맞게 정리해 필요할 때 바로 찾습니다." },
  { src: "/mintwallet/09.png", number: "09", label: "Passport", title: "여권 정보도 필요할 때 바로", description: "여권번호와 발급·만료일을 보호된 카드 형태로 보관하고 필요한 항목만 확인할 수 있습니다." },
  { src: "/mintwallet/10.png", number: "10", label: "Driver license", title: "자격증명 정보를 안전하게", description: "운전면허번호와 보안카드 등 외우기 어려운 정보를 앱 잠금 뒤에 두고 관리합니다." },
  { src: "/mintwallet/11.png", number: "11", label: "Backup & security", title: "백업과 잠금 방식을 직접 관리", description: "암호화 백업, iCloud 저장, 자동 백업, 앱 잠금과 화면 모드까지 내 사용 방식에 맞게 설정합니다." },
];

export default function MintWalletPage() {
  return (
    <main className="case-page case-wallet">
      <header className="site-header page-shell">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">✦</span>CoolMint
        </Link>
        <Link className="back-link" href="/">Back to portfolio <span aria-hidden="true">↗</span></Link>
      </header>
      <ProjectBanner projectName="MintWallet" />

      <section className="wallet-intro page-shell">
        <div className="wallet-intro-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Personal finance · private by design</p>
          <h1>Your details,<br /><em>in your hands.</em></h1>
          <p className="wallet-lead">구독 결제일과 지출부터 카드·계좌·개인정보까지, 흩어진 중요한 정보를 한 곳에 안전하고 보기 좋게 정리하세요.</p>
          <a className="button app-store-button" href="https://apps.apple.com/kr/app/id1532835617" target="_blank" rel="noreferrer">
            App Store에서 다운로드 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="wallet-intro-aside">
          <p>민트월렛은 서버에 정보를 보내지 않는 독립 실행형 앱입니다. 내 정보는 내가 보관하고, 필요할 때만 꺼내 봅니다.</p>
          <div className="wallet-metadata">
            <span>Platform</span><strong>iPhone · iPad</strong>
            <span>Requires</span><strong>iOS 17.0+</strong>
            <span>Languages</span><strong>한국어 · English · 日本語</strong>
          </div>
        </div>
      </section>

      <section className="wallet-story page-shell">
        <div className="wallet-section-heading">
          <p className="section-kicker">One calm place for the important things</p>
          <h2>Less searching.<br /><em>More knowing.</em></h2>
          <p>카드, 계좌, 구독, 신분증. 각각의 정보를 따로 찾아 헤매지 않도록 필요한 맥락을 한 화면에 담았습니다.</p>
        </div>
        <div className="wallet-screenshot-list">
          {appShots.map((shot) => (
            <article className="wallet-showcase-row" key={shot.src}>
              <div className="wallet-showcase-media">
                <div className="wallet-shot">
                  <Image src={shot.src} alt={shot.title} width={1206} height={2622} sizes="(max-width: 800px) 82vw, 36vw" />
                </div>
              </div>
              <div className="wallet-showcase-copy">
                <span className="wallet-showcase-number">{shot.number}</span>
                <p className="wallet-showcase-label">{shot.label}</p>
                <h3>{shot.title}</h3>
                <p className="wallet-showcase-description">{shot.description}</p>
                <span className="wallet-showcase-rule" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wallet-features page-shell">
        <div className="wallet-feature-intro">
          <p className="section-kicker">A wallet for real life</p>
          <h2>정리는 가볍게.<br /><em>보호는 단단하게.</em></h2>
        </div>
        <div className="wallet-feature-list">
          <article><span>01</span><div><h3>구독과 지출 관리</h3><p>다음 결제일, 결제 금액, 월 예상 지출을 한눈에 보고 결제일 알림으로 미리 준비하세요.</p></div></article>
          <article><span>02</span><div><h3>카드와 계좌 보관</h3><p>여러 장의 카드와 은행 계좌 정보를 한곳에 모으고 필요한 내용을 빠르게 확인하고 복사할 수 있습니다.</p></div></article>
          <article><span>03</span><div><h3>개인정보 정리</h3><p>주민등록증, 운전면허증, 여권, 통관고유부호처럼 자주 필요하지만 쉽게 찾기 어려운 정보를 정리합니다.</p></div></article>
          <article><span>04</span><div><h3>암호화 백업</h3><p>중요한 데이터를 암호화된 파일로 직접 내보내 원하는 곳에 보관하고, 필요할 때 다시 복원하세요.</p></div></article>
          <article><span>05</span><div><h3>나에게 맞는 보호</h3><p>Face ID·Touch ID, 앱 잠금, 다크 모드, 위젯으로 안전함과 편리함의 균형을 직접 설정합니다.</p></div></article>
        </div>
      </section>

      <section className="wallet-privacy-note page-shell">
        <div>
          <p className="section-kicker">Private by design</p>
          <h2>내 정보는<br /><em>내가 보관합니다.</em></h2>
        </div>
        <div className="wallet-privacy-points">
          <p>민트월렛은 개인정보를 수집하거나 별도의 서버에 저장하지 않습니다. 저장한 정보는 기기에서 관리되며, 백업 파일은 사용자가 설정한 비밀번호로 암호화됩니다.</p>
          <div><span>01</span><strong>서버에 저장하지 않음</strong></div>
          <div><span>02</span><strong>암호화된 백업 파일</strong></div>
          <div><span>03</span><strong>Face ID · Touch ID</strong></div>
        </div>
      </section>

      <footer className="case-footer page-shell">
        <div className="case-policy-links"><Link href="/mintwallet/privacy-policy">Privacy Policy</Link><Link href="/mintwallet/terms">Terms of Use</Link></div>
        <Link href="/overtake">Next project <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
