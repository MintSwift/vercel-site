import type { Metadata } from "next";
import Link from "next/link";
import AppStoreButton from "../components/AppStoreButton";
import ContactButton from "../components/ContactButton";
import IPhoneFrame from "../components/IPhoneFrame";
import ProjectBanner from "../components/ProjectBanner";

export const metadata: Metadata = {
  title: "Overtake — Race Results | CoolMint",
  description: "2026 시즌의 레이스 일정, 결과, 드라이버와 팀 순위를 한곳에서 확인하는 레이스 트래커.",
};

type ScreenshotMode = "light" | "dark";

type RaceStory = {
  number: string;
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  primary: string;
  primaryAlt: string;
  primaryMode: ScreenshotMode;
  secondary: string;
  secondaryAlt: string;
  secondaryMode: ScreenshotMode;
};

const raceStories: RaceStory[] = [
  {
    number: "01",
    code: "SESSION CONTROL",
    eyebrow: "Race weekend",
    title: "세션의 시작부터 체커드 플래그까지.",
    description:
      "연습주행, 예선, 스프린트, 결승을 하나의 흐름으로 정리합니다. 내 시간대에 맞춘 일정과 세션 결과를 레이스 주말의 리듬 그대로 확인하세요.",
    tags: ["Local time", "Session results", "Highlights"],
    primary: "/overtake/01.png",
    primaryAlt: "Overtake의 레이스 주말 일정 화면",
    primaryMode: "dark",
    secondary: "/overtake/02.png",
    secondaryAlt: "Overtake의 세션 결과 화면",
    secondaryMode: "dark",
  },
  {
    number: "02",
    code: "CHAMPIONSHIP PULSE",
    eyebrow: "Standings",
    title: "챔피언십의 흐름을 더 빠르게.",
    description:
      "드라이버와 컨스트럭터 포인트를 한눈에 비교하고, 선두와의 격차부터 팀 내부 경쟁까지 시즌의 방향을 선명하게 읽어보세요.",
    tags: ["Driver points", "Team points", "Gap to P1"],
    primary: "/overtake/03.png",
    primaryAlt: "Overtake의 드라이버 순위 화면",
    primaryMode: "dark",
    secondary: "/overtake/04.png",
    secondaryAlt: "Overtake의 팀 순위 화면",
    secondaryMode: "dark",
  },
  {
    number: "03",
    code: "ALWAYS ON",
    eyebrow: "Widgets & alerts",
    title: "레이스가 시작되기 전에 먼저.",
    description:
      "홈 화면 위젯으로 다음 세션을 확인하고 설정에서 필요한 알림만 선택하세요. 앱을 열지 않아도 중요한 순간을 놓치지 않도록 준비합니다.",
    tags: ["Live widgets", "Push alerts", "Personal setup"],
    primary: "/overtake/06.png",
    primaryAlt: "Overtake의 홈 화면 레이스 위젯",
    primaryMode: "light",
    secondary: "/overtake/05.png",
    secondaryAlt: "Overtake의 알림과 표시 설정 화면",
    secondaryMode: "dark",
  },
];

const overtakeBanners = [
  {
    name: "Overtake / Campaign 01",
    href: "/overtake",
    light: "/overtake/Banner/exec-4eda375b-2fb1-42be-a09d-5397c026f972.png",
    dark: "/overtake/Banner/exec-328f3296-c447-422c-aef5-f42b49347a86.png",
    label: "Overtake 캠페인 배너 1 보기",
  },
  {
    name: "Overtake / Campaign 02",
    href: "/overtake",
    light: "/overtake/Banner/exec-e25223dd-2da3-4d7c-ad98-a08ae33f6672.png",
    dark: "/overtake/Banner/exec-b0c0fb43-4e57-4218-bbfa-bdc350798727.png",
    label: "Overtake 캠페인 배너 2 보기",
  },
  {
    name: "Overtake / Campaign 03",
    href: "/overtake",
    light: "/overtake/Banner/exec-becffca6-4e64-41e7-a07f-e9e68f78c7c4.png",
    dark: "/overtake/Banner/exec-cdc7223b-d7ad-4f10-9b12-08af1a4df2c0.png",
    label: "Overtake 캠페인 배너 3 보기",
  },
];

export default function OvertakePage() {
  return (
    <main className="case-page case-overtake f1-overtake-page">
      <header className="site-header page-shell">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">C</span>CoolMint
        </Link>
        <div className="f1-header-actions">
          <span className="f1-header-status"><i aria-hidden="true" /> 2026 season</span>
          <Link className="back-link" href="/">Portfolio <span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <ProjectBanner projectName="Overtake" slides={overtakeBanners} />

      <section className="f1-hero">
        <div className="f1-hero-grid page-shell">
          <div className="f1-hero-copy">
            <p className="f1-kicker"><span>01</span> Unofficial race companion</p>
            <h1><span>RACE.</span><strong>AHEAD.</strong></h1>
            <p className="f1-hero-lead">
              레이스 주말의 모든 세션과 챔피언십의 흐름을
              <br />가장 빠르고 선명하게 따라가세요.
            </p>
            <div className="f1-hero-cta">
              <AppStoreButton href="https://apps.apple.com/us/app/overtake-race-results/id6760613857" />
              <span>Designed for<br />iPhone &amp; iPad</span>
            </div>
            <dl className="f1-hero-specs">
              <div><dt>Season</dt><dd>2026</dd></div>
              <div><dt>Sessions</dt><dd>All weekend</dd></div>
              <div><dt>Updates</dt><dd>Live-ready</dd></div>
            </dl>
          </div>

          <div className="f1-hero-visual" aria-label="Overtake 앱 미리보기">
            <div className="f1-track-ring f1-track-ring-one" aria-hidden="true" />
            <div className="f1-track-ring f1-track-ring-two" aria-hidden="true" />
            <div className="f1-start-lights" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <IPhoneFrame
              alt="Overtake 레이스 주말 일정 화면"
              className="f1-hero-phone f1-hero-phone-main"
              mode="dark"
              priority
              sizes="(max-width: 800px) 58vw, 330px"
              src="/overtake/01.png"
            />
            <IPhoneFrame
              alt="Overtake 드라이버 챔피언십 순위 화면"
              className="f1-hero-phone f1-hero-phone-back"
              mode="dark"
              priority
              sizes="(max-width: 800px) 42vw, 245px"
              src="/overtake/03.png"
            />
            <div className="f1-telemetry-card f1-telemetry-card-top">
              <span>Next session</span><strong>FP1</strong><small>01D 02H 50M</small>
            </div>
            <div className="f1-telemetry-card f1-telemetry-card-bottom">
              <span>Race mode</span><strong>ON</strong>
            </div>
          </div>
        </div>
        <div className="f1-hero-footer page-shell">
          <span>Overtake / Race results</span>
          <div><i aria-hidden="true" /> Track status <strong>Ready</strong></div>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      <div className="f1-ticker" aria-hidden="true">
        <div>
          <span>RACE WEEKEND</span><b>◆</b>
          <span>SESSION RESULTS</span><b>◆</b>
          <span>DRIVER STANDINGS</span><b>◆</b>
          <span>LIVE WIDGETS</span><b>◆</b>
          <span>RACE WEEKEND</span><b>◆</b>
          <span>SESSION RESULTS</span>
        </div>
      </div>

      <section className="f1-overview page-shell">
        <div className="f1-section-label">
          <span>02</span>
          <p>Built for<br />race weekends</p>
        </div>
        <div className="f1-overview-title">
          <p className="f1-kicker">Your race control</p>
          <h2>EVERY SESSION.<br /><strong>EVERY SHIFT.</strong></h2>
        </div>
        <p className="f1-overview-copy">
          복잡한 레이스 정보를 짧고 정확하게. Overtake는 필요한 순간에 일정, 결과, 순위와 알림을 하나의 경험으로 연결합니다.
        </p>
      </section>

      <section className="f1-story page-shell">
        {raceStories.map((story) => (
          <article className="f1-story-row" key={story.number}>
            <div className="f1-story-copy">
              <div className="f1-story-code">
                <span>{story.number}</span>
                <small>{story.code}</small>
              </div>
              <p className="f1-kicker">{story.eyebrow}</p>
              <h3>{story.title}</h3>
              <p className="f1-story-description">{story.description}</p>
              <ul className="f1-story-tags">
                {story.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <div className="f1-story-media">
              <div className="f1-story-grid" aria-hidden="true" />
              <span className="f1-apex-label" aria-hidden="true">APEX</span>
              <IPhoneFrame
                alt={story.primaryAlt}
                className="f1-story-phone f1-story-phone-primary"
                mode={story.primaryMode}
                sizes="(max-width: 800px) 52vw, 300px"
                src={story.primary}
              />
              <IPhoneFrame
                alt={story.secondaryAlt}
                className="f1-story-phone f1-story-phone-secondary"
                mode={story.secondaryMode}
                sizes="(max-width: 800px) 39vw, 230px"
                src={story.secondary}
              />
            </div>
          </article>
        ))}
      </section>

      <section className="f1-feature-section">
        <div className="f1-feature-heading page-shell">
          <div>
            <p className="f1-kicker"><span>03</span> Race intelligence</p>
            <h2>LESS NOISE.<br /><strong>MORE RACE.</strong></h2>
          </div>
          <p>경기의 긴장감은 그대로, 정보는 더 빠르게 읽히도록 설계했습니다.</p>
        </div>
        <div className="f1-feature-grid page-shell">
          <article><span>01</span><i aria-hidden="true">⌁</i><h3>주말 일정</h3><p>세션별 현지 시간과 내 시간대를 함께 확인합니다.</p></article>
          <article><span>02</span><i aria-hidden="true">↗</i><h3>결과와 포인트</h3><p>세션 결과와 선두까지의 격차를 빠르게 읽습니다.</p></article>
          <article><span>03</span><i aria-hidden="true">◎</i><h3>순위 경쟁</h3><p>드라이버와 팀 챔피언십의 변화를 추적합니다.</p></article>
          <article><span>04</span><i aria-hidden="true">◉</i><h3>위젯과 알림</h3><p>홈 화면과 알림으로 다음 순간을 준비합니다.</p></article>
        </div>
      </section>

      <section className="f1-note page-shell">
        <div className="f1-section-label">
          <span>04</span>
          <p>Independent<br />by design</p>
        </div>
        <div>
          <p className="f1-kicker">Unofficial race companion</p>
          <h2>팬을 위한<br /><strong>독립 레이스 트래커.</strong></h2>
        </div>
        <p>
          Overtake는 특정 리그, 대회 운영사, 팀 또는 관련 단체와 공식적으로 연관되지 않은 비공식 서비스입니다.
          일정, 결과, 순위는 팬을 위한 참고 정보이며 공식 기록이나 발표를 대체하지 않습니다.
        </p>
      </section>

      <section className="case-contact page-shell">
        <div className="case-contact-card f1-contact-card">
          <div>
            <p className="f1-kicker">Radio check</p>
            <h2>피드백을<br />들려주세요.</h2>
          </div>
          <div>
            <p>서비스 제안이나 오류 제보를 보내주시면 다음 업데이트에 반영하겠습니다.</p>
            <ContactButton />
          </div>
        </div>
      </section>

      <footer className="case-footer page-shell">
        <div className="case-policy-links"><Link href="/overtake/privacy.html">Privacy Policy</Link><Link href="/overtake/terms.html">Terms of Service</Link></div>
        <Link href="/mintwallet">Next project <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
