import type { Metadata } from "next";
import ProjectBanner from "./components/ProjectBanner";
import ScreenshotRail from "./components/ScreenshotRail";

export const metadata: Metadata = {
  title: "CoolMint — Portfolio",
  description: "CoolMint의 제품과 실험을 모아둔 포트폴리오입니다.",
};

const screenshotSets = {
  overtake: Array.from({ length: 6 }, (_, index) => `/overtake/${String(index + 1).padStart(2, "0")}.png`),
  mintwallet: Array.from({ length: 11 }, (_, index) => `/mintwallet/${String(index + 1).padStart(2, "0")}.png`),
  weeklyswift: ["/weeklyswift/01.png", "/weeklyswift/02.png", "/weeklyswift/03.png", "/weeklyswift/04.png", "/weeklyswift/05.png", "/weeklyswift/06.png", "/weeklyswift/07.png", "/weeklyswift/08.png", "/weeklyswift/09.png", "/weeklyswift/pad_01.png", "/weeklyswift/pad_02.png", "/weeklyswift/pad_04.png", "/weeklyswift/pad_05.png", "/weeklyswift/pad_06.png"],
  mintshelf: ["/mintshelf/assets/screenshots/01-bookshelf.png", "/mintshelf/assets/screenshots/02-book-detail.png", "/mintshelf/assets/screenshots/03-quotes.png", "/mintshelf/assets/screenshots/04-book-contents.png", "/mintshelf/assets/screenshots/05-reading-note.png", "/mintshelf/assets/screenshots/06-book-search.png", "/mintshelf/assets/screenshots/07-book-import.png", "/mintshelf/assets/screenshots/08-cover-grid.png"],
  ottChart: ["/ott-chart/media/hero-ko.jpg", "/ott-chart/media/widget-ko.jpg"],
};

const projects = [
  {
    href: "/overtake",
    index: "01",
    name: "Overtake",
    type: "Sports data · iOS app",
    description: "경기의 흐름을 더 빠르고 선명하게 읽는 스포츠 경험.",
    screenshots: screenshotSets.overtake,
    className: "project-overtake",
  },
  {
    href: "/mintwallet",
    index: "02",
    name: "MintWallet",
    type: "Personal finance · iOS app",
    description: "돈의 움직임을 가볍게 정리하고, 내일을 차분하게 준비하는 방법.",
    screenshots: screenshotSets.mintwallet,
    className: "project-wallet",
  },
  {
    href: "/weeklyswift",
    index: "03",
    name: "민트주간",
    type: "Developer news · iOS & iPadOS app",
    description: "빠르게 변하는 Swift 생태계에서 지금 읽어야 할 이야기만.",
    screenshots: screenshotSets.weeklyswift,
    className: "project-weeklyswift",
  },
  {
    href: "/mintshelf",
    index: "04",
    name: "한장씩",
    type: "Reading · iOS app",
    description: "읽은 책과 문장, 독서 기록을 한 곳에 모아 나만의 서재를 만듭니다.",
    screenshots: screenshotSets.mintshelf,
    className: "project-mintshelf",
  },
  {
    href: "/ott-chart",
    index: "05",
    name: "공개예정",
    type: "Release calendar · iOS app",
    description: "OTT·영화·애니메이션과 게임의 공개 일정을 한눈에.",
    screenshots: screenshotSets.ottChart,
    className: "project-ott-chart",
  },
];

const appStories = [
  {
    href: "/overtake",
    index: "01",
    name: "Overtake",
    type: "RACE CONTROL · iOS APP",
    title: "레이스의 흐름을",
    accent: "더 빠르게.",
    description: "연습주행부터 결승까지, 레이스 주말의 일정과 결과·순위를 하나의 흐름으로 확인합니다.",
    screenshots: screenshotSets.overtake,
    className: "app-intro-overtake",
  },
  {
    href: "/mintwallet",
    index: "02",
    name: "MintWallet",
    type: "PERSONAL FINANCE · iOS APP",
    title: "중요한 정보는",
    accent: "한곳에, 안전하게.",
    description: "카드·계좌·구독·개인정보를 복잡하지 않게 정리하고 필요한 순간에 바로 찾습니다.",
    screenshots: screenshotSets.mintwallet,
    className: "app-intro-wallet",
  },
  {
    href: "/weeklyswift",
    index: "03",
    name: "민트주간",
    type: "DEVELOPER NEWS · iOS & iPad APP",
    title: "개발의 다음을",
    accent: "읽는 습관.",
    description: "빠르게 변하는 iOS와 Swift 생태계에서 지금 읽어야 할 뉴스와 아티클을 만납니다.",
    screenshots: screenshotSets.weeklyswift,
    className: "app-intro-weeklyswift",
  },
  {
    href: "/mintshelf",
    index: "04",
    name: "한장씩",
    type: "PERSONAL LIBRARY · iOS APP",
    title: "읽는 자리에서",
    accent: "책을 기억해요.",
    description: "책장과 읽기 진도, 마음에 남은 문장과 독서 기록을 모아요. iCloud를 허용하면 같은 Apple 계정의 기기에서 자동으로 이어집니다.",
    screenshots: screenshotSets.mintshelf,
    className: "app-intro-mintshelf",
  },
  {
    href: "/ott-chart",
    index: "05",
    name: "공개예정",
    type: "RELEASE CALENDAR · iOS APP",
    title: "기다리는 작품의",
    accent: "공개일을 한눈에.",
    description: "OTT·영화·애니메이션과 게임 일정을 모아보고, 관심작의 공개 알림과 홈 화면 위젯으로 챙깁니다.",
    screenshots: screenshotSets.ottChart,
    className: "app-intro-ott-chart",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header page-shell">
        <a className="brand" href="#top" aria-label="CoolMint home"><span className="brand-mark" aria-hidden="true">✦</span>CoolMint</a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#apps">Apps</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <span className="header-status"><span className="status-dot" /> Available for select projects</span>
      </header>

      <div id="top"><ProjectBanner /></div>

      <section id="work" className="work-section page-shell">
        <div className="section-heading-row"><div><p className="section-kicker">What I make</p><h2>앱을 만듭니다.<br /><em>다섯 가지 방식으로.</em></h2></div><span className="project-count">05 apps</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <a className={`project-card ${project.className}`} href={project.href} key={project.name}>
              <div className="project-visual">
                <ScreenshotRail name={project.name} slides={project.screenshots} />
              </div>
              <div className="project-info"><span>{project.index}</span><div><h3>{project.name}</h3><p>{project.type}</p><p className="project-description">{project.description}</p></div><b aria-hidden="true">↗</b></div>
            </a>
          ))}
        </div>
      </section>

      <section id="apps" className="app-intro-section">
        <div className="page-shell">
          <div className="app-intro-heading">
            <div><p className="section-kicker">Made for everyday focus</p><h2>다섯 가지 앱,<br /><em>다섯 가지 리듬.</em></h2></div>
            <p>경기를 따라가고, 중요한 정보를 정리하고, 개발의 다음을 읽고, 기다리는 작품의 공개일을 챙깁니다. 매일의 다른 순간에 맞는 도구를 만듭니다.</p>
          </div>
          <div className="app-intro-list">
            {appStories.map((app) => (
              <a className={`app-intro-card ${app.className}`} href={app.href} key={app.name}>
                <div className="app-intro-copy">
                  <div className="app-intro-meta"><span>{app.index}</span><span>{app.type}</span></div>
                  <p className="app-intro-name">{app.name}</p>
                  <h3>{app.title}<br /><em>{app.accent}</em></h3>
                  <p className="app-intro-description">{app.description}</p>
                  <span className="app-intro-link">View project <b aria-hidden="true">↗</b></span>
                </div>
                <div className="app-intro-media"><ScreenshotRail name={app.name} slides={app.screenshots} /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="page-shell about-layout"><div><p className="section-kicker">A little about me</p><h2>Make it clear.<br /><span>Make it kind.</span></h2></div><div className="about-copy"><p>저는 제품의 첫 아이디어부터 마지막 픽셀까지 함께하는 디자이너이자 개발자입니다. 화면을 만드는 일은 결국 사람의 시간을 다루는 일이라고 믿어요.</p><p>좋은 제품은 크게 말하지 않아도 이해되고, 자주 쓰지 않아도 다시 찾게 됩니다. 그런 조용한 힘을 가진 경험을 만들고 있습니다.</p><div className="about-meta"><span>Based in Seoul</span><span>Working worldwide ↗</span></div></div></div>
      </section>

      <section id="contact" className="contact-section page-shell"><div className="contact-card"><p className="section-kicker">Have a project in mind?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><a className="button button-dark" href="mailto:hello@coolmint.studio">hello@coolmint.studio <span aria-hidden="true">↗</span></a></div></section>

      <footer className="site-footer page-shell"><a className="brand" href="#top" aria-label="Back to top"><span className="brand-mark" aria-hidden="true">✦</span>CoolMint</a><p>© {new Date().getFullYear()} CoolMint</p><div className="footer-links"><a href="https://github.com/MintSwift" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Top ↑</a></div></footer>
    </main>
  );
}
