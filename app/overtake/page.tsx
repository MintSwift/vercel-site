import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "../components/ContactButton";
import ProjectBanner from "../components/ProjectBanner";

export const metadata: Metadata = {
  title: "Overtake — Race Results | CoolMint",
  description: "2026 시즌의 레이스 일정, 결과, 드라이버와 팀 순위를 한곳에서 확인하는 레이스 트래커.",
};

const appShots = [
  { src: "/overtake/01.png", number: "01", label: "Race weekend", title: "한 주말의 흐름을 한눈에" },
  { src: "/overtake/02.png", number: "02", label: "Session results", title: "세션별 결과까지 빠르게" },
  { src: "/overtake/03.png", number: "03", label: "Driver standings", title: "드라이버 챔피언십 순위" },
  { src: "/overtake/04.png", number: "04", label: "Team standings", title: "팀 경쟁의 방향을 읽기" },
  { src: "/overtake/05.png", number: "05", label: "Widgets", title: "다음 세션을 놓치지 않도록" },
  { src: "/overtake/06.png", number: "06", label: "Settings", title: "알림과 표시 방식을 내게 맞게" },
];

export default function OvertakePage() {
  return (
    <main className="case-page case-overtake">
      <header className="site-header page-shell">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">✦</span>CoolMint
        </Link>
        <Link className="back-link" href="/">Back to portfolio <span aria-hidden="true">↗</span></Link>
      </header>
      <ProjectBanner projectName="Overtake" />

      <section className="overtake-intro page-shell">
        <div className="overtake-intro-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Race results · 2026 season</p>
          <h1>Stay ahead<br /><em>of the race.</em></h1>
          <p className="overtake-lead">속도, 전략, 그리고 한순간의 선택이 흐름을 바꾸는 레이스 시즌을 더 선명하게 따라가세요.</p>
          <a className="button app-store-button" href="https://apps.apple.com/us/app/overtake-race-results/id6760613857" target="_blank" rel="noreferrer">
            App Store에서 다운로드 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="overtake-intro-aside">
          <p>Overtake는 단순한 일정표가 아니라, 시즌 전체의 흐름을 따라가기 위한 레이스 동반자입니다.</p>
          <div className="overtake-metadata">
            <span>Season</span><strong>2026</strong>
            <span>Platform</span><strong>iPhone · iPad</strong>
            <span>Category</span><strong>Sports</strong>
          </div>
        </div>
      </section>

      <section className="overtake-story page-shell">
        <div className="overtake-section-heading">
          <p className="section-kicker">Built for race weekends</p>
          <h2>Every session.<br /><em>Every shift.</em></h2>
          <p>연습주행부터 예선, 스프린트, 결승까지. 필요한 정보를 빠르게 정리해 경기의 리듬을 놓치지 않게 합니다.</p>
        </div>
        <div className="overtake-screenshot-grid">
          {appShots.map((shot) => (
            <article className="overtake-shot-card" key={shot.src}>
              <div className="overtake-shot">
                <Image src={shot.src} alt={shot.title} width={1206} height={2622} sizes="(max-width: 800px) 86vw, 28vw" />
              </div>
              <div className="overtake-shot-caption">
                <span>{shot.number} / {shot.label}</span>
                <h3>{shot.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overtake-features page-shell">
        <div className="overtake-feature-intro">
          <p className="section-kicker">The race, organised</p>
          <h2>정보는 짧게.<br /><em>맥락은 선명하게.</em></h2>
        </div>
        <div className="overtake-feature-list">
          <article>
            <span>01</span>
            <div><h3>주말 일정과 세션</h3><p>시즌 전체 레이스 주말을 확인하고, 연습주행·예선·스프린트·결승의 시간을 한 번에 살펴보세요.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><h3>결과와 포인트</h3><p>각 세션의 결과와 포인트 변화를 필요한 만큼 빠르게 확인할 수 있습니다.</p></div>
          </article>
          <article>
            <span>03</span>
            <div><h3>드라이버와 팀 순위</h3><p>챔피언십 경쟁이 어디로 향하는지 드라이버와 컨스트럭터 순위로 한눈에 읽어보세요.</p></div>
          </article>
          <article>
            <span>04</span>
            <div><h3>위젯과 알림</h3><p>홈 화면 위젯, 세션 시작 알림, 결과 알림으로 다음 장면을 놓치지 않게 도와줍니다.</p></div>
          </article>
        </div>
      </section>

      <section className="overtake-note page-shell">
        <div>
          <p className="section-kicker">Unofficial race companion</p>
          <h2>팬을 위한<br /><em>독립 레이스 트래커.</em></h2>
        </div>
        <p>Overtake는 특정 리그, 대회 운영사, 팀 또는 관련 단체와 공식적으로 연관되지 않은 비공식 서비스입니다. 제공되는 일정, 결과, 순위 및 관련 정보는 팬을 위한 참고용으로 재구성되며 공식 기록 또는 공식 발표를 대체하지 않습니다.</p>
      </section>

      <section className="case-contact page-shell">
        <div className="case-contact-card">
          <p className="section-kicker">Have feedback?</p>
          <h2>문의하기</h2>
          <p>서비스 제안, 오류 제보를 남겨주세요.</p>
          <ContactButton />
        </div>
      </section>
      <footer className="case-footer page-shell">
        <div className="case-policy-links"><Link href="/overtake/privacy.html">Privacy Policy</Link><Link href="/overtake/terms.html">Terms of Service</Link></div>
        <Link href="/mintwallet">Next project <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
