import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppStoreButton from "../components/AppStoreButton";

export const metadata: Metadata = {
  title: "민트주간 — Swift News | CoolMint",
  description: "빠르게 변하는 iOS와 Swift 생태계에서 꼭 필요한 뉴스와 기술 아티클을 한국어로 만나는 앱.",
};

const appStoreUrl = "https://apps.apple.com/us/app/%EB%AF%BC%ED%8A%B8%EC%A3%BC%EA%B0%84-swift-news/id1661868347";

const featureStories = [
  {
    number: "01",
    label: "A FASTER READ",
    title: "새로운 소식을\n빠르게, 깊게.",
    description: "iOS와 Swift 생태계에서 지금 알아야 할 이야기만 골라 전합니다. 기술 뉴스와 블로그, 튜토리얼을 한 흐름으로 읽어보세요.",
    image: "/weeklyswift/01.png",
    alt: "민트주간 최신 뉴스 목록 화면",
    tone: "mint",
  },
  {
    number: "02",
    label: "KEEP YOUR SIGNAL",
    title: "중요한 글은\n내 서재에.",
    description: "나중에 다시 보고 싶은 아티클을 북마크하고, 내 페이스에 맞춰 지식 아카이브를 만들어보세요.",
    image: "/weeklyswift/04.png",
    alt: "민트주간 북마크 화면",
    tone: "cream",
  },
  {
    number: "03",
    label: "ON EVERY SCREEN",
    title: "iPhone과 iPad,\n어디서든 이어서.",
    description: "작은 화면에서는 빠르게 훑고, 큰 화면에서는 아티클을 여유 있게 읽습니다. 개발자의 하루에 맞춰 자연스럽게 이어집니다.",
    image: "/weeklyswift/pad_01.png",
    alt: "민트주간 iPad 아티클 화면",
    tone: "blue",
  },
];

const galleryImages = [
  ["/weeklyswift/02.png", "민트주간 아티클 상세 화면"],
  ["/weeklyswift/03.png", "민트주간 검색 화면"],
  ["/weeklyswift/05.png", "민트주간 설정 화면"],
  ["/weeklyswift/06.png", "민트주간 위젯 화면"],
  ["/weeklyswift/07.png", "민트주간 인기 아티클 화면"],
  ["/weeklyswift/08.png", "민트주간 알림 설정 화면"],
  ["/weeklyswift/09.png", "민트주간 아카이브 화면"],
];

export default function WeeklySwiftPage() {
  return (
    <main className="weeklyswift-page">
      <header className="weeklyswift-header page-shell">
        <Link className="weeklyswift-brand" href="/" aria-label="CoolMint 포트폴리오로 이동">
          <Image src="/weeklyswift/app-icon.png" alt="" width={42} height={42} priority />
          <span><strong>민트주간</strong><small>WEEKLY SWIFT</small></span>
        </Link>
        <nav className="weeklyswift-nav" aria-label="민트주간 페이지 메뉴">
          <a href="#features">Features</a>
          <a href="#screens">Screens</a>
          <a href="#download">Download</a>
        </nav>
        <Link className="weeklyswift-header-link" href="/">CoolMint <span aria-hidden="true">↗</span></Link>
      </header>

      <section className="weeklyswift-hero page-shell">
        <div className="weeklyswift-hero-topline"><span>01 / DEVELOPER NEWS</span><span>iPhone · iPad</span></div>
        <div className="weeklyswift-hero-copy">
          <div>
            <p className="weeklyswift-eyebrow"><i aria-hidden="true" /> For the people who build the future</p>
            <h1>개발의 다음을<br /><em>읽는 습관.</em></h1>
          </div>
          <div className="weeklyswift-hero-note">
            <p>빠르게 변하는 iOS와 Swift 생태계에서 꼭 필요한 정보만 선별해 전합니다.</p>
            <a className="weeklyswift-text-link" href="#features">Explore the app <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="weeklyswift-hero-banner">
          <Image
            src="/weeklyswift/vercel-header-weeklyswift-white-layout-v2.png"
            alt="민트주간 앱 소개와 iPhone 화면 미리보기"
            width={1774}
            height={887}
            priority
            sizes="(max-width: 800px) calc(100vw - 40px), 1168px"
          />
          <span className="weeklyswift-hero-badge">READ THE SIGNAL <b>↗</b></span>
        </div>
      </section>

      <section className="weeklyswift-intro page-shell">
        <div className="weeklyswift-section-marker"><span>02</span><span>WHY WEEKLY SWIFT</span></div>
        <div className="weeklyswift-intro-copy">
          <h2>수많은 업데이트 사이,<br /><strong>정말 중요한 것만.</strong></h2>
          <p>새로운 API와 릴리즈 소식은 매일 쌓입니다. 민트주간은 그 사이에서 개발자의 시간을 아껴주는 이야기만 골라, 읽기 좋은 한글과 흐름으로 정리합니다.</p>
        </div>
        <div className="weeklyswift-intro-stats">
          <div><strong>1—3<span>일</span></strong><small>새로운 콘텐츠</small></div>
          <div><strong>iOS<span>+</span></strong><small>Swift ecosystem</small></div>
          <div><strong>KR<span>↗</span></strong><small>빠른 한국어 타이틀</small></div>
        </div>
      </section>

      <section id="features" className="weeklyswift-features page-shell">
        <div className="weeklyswift-section-heading">
          <div className="weeklyswift-section-marker"><span>03</span><span>THE EVERYDAY TOOL</span></div>
          <h2>읽고, 저장하고,<br /><em>다시 시작하세요.</em></h2>
          <p>뉴스를 소비하는 대신, 다음 작업으로 이어지는 정보 습관을 만듭니다.</p>
        </div>
        <div className="weeklyswift-feature-list">
          {featureStories.map((story) => (
            <article className={`weeklyswift-feature weeklyswift-feature-${story.tone}`} key={story.number}>
              <div className="weeklyswift-feature-copy">
                <div className="weeklyswift-feature-meta"><span>{story.number}</span><span>{story.label}</span></div>
                <h3>{story.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                <p>{story.description}</p>
                <span className="weeklyswift-feature-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="weeklyswift-feature-media">
                <Image src={story.image} alt={story.alt} fill sizes="(max-width: 800px) 86vw, 48vw" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="weeklyswift-principles">
        <div className="page-shell weeklyswift-principles-layout">
          <div className="weeklyswift-section-marker"><span>04</span><span>BUILT FOR BUILDERS</span></div>
          <div className="weeklyswift-principles-content">
            <h2>정보는 가볍게.<br /><strong>인사이트는 오래.</strong></h2>
            <div className="weeklyswift-principle-grid">
              <article><span>01</span><h3>한눈에 파악하기</h3><p>짧은 시간에도 지금의 흐름을 놓치지 않도록 핵심을 먼저 보여줍니다.</p></article>
              <article><span>02</span><h3>내 언어로 이해하기</h3><p>한국어 타이틀과 요약으로 낯선 기술 이야기도 더 빠르게 시작합니다.</p></article>
              <article><span>03</span><h3>필요할 때 다시 보기</h3><p>북마크와 푸시 이력으로 한 번 읽은 정보가 흘러가지 않게 보관합니다.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section id="screens" className="weeklyswift-screens page-shell">
        <div className="weeklyswift-section-heading weeklyswift-screens-heading">
          <div className="weeklyswift-section-marker"><span>05</span><span>INSIDE THE APP</span></div>
          <h2>작은 화면 안에,<br /><em>큰 흐름.</em></h2>
          <p>새 글을 발견하는 순간부터 저장해 다시 꺼내 보는 순간까지. 민트주간의 리듬을 화면으로 확인해보세요.</p>
        </div>
        <div className="weeklyswift-gallery">
          {galleryImages.map(([src, alt], index) => (
            <figure className={`weeklyswift-gallery-item weeklyswift-gallery-item-${index + 1}`} key={src}>
              <Image src={src} alt={alt} fill sizes="(max-width: 800px) 42vw, 23vw" />
            </figure>
          ))}
        </div>
      </section>

      <section id="download" className="weeklyswift-download page-shell">
        <div className="weeklyswift-download-card">
          <div className="weeklyswift-download-copy">
            <div className="weeklyswift-download-mark"><Image src="/weeklyswift/app-icon.png" alt="민트주간 앱 아이콘" width={88} height={88} /></div>
            <p className="weeklyswift-eyebrow"><i aria-hidden="true" /> Your next read is waiting</p>
            <h2>오늘의 개발을<br /><em>더 선명하게.</em></h2>
            <p>민트주간과 함께 iOS와 Swift의 다음 장면을 만나보세요.</p>
            <AppStoreButton href={appStoreUrl} locale="ko-kr" />
          </div>
          <div className="weeklyswift-download-art" aria-hidden="true">
            <div className="weeklyswift-orbit weeklyswift-orbit-one" />
            <div className="weeklyswift-orbit weeklyswift-orbit-two" />
            <Image src="/weeklyswift/06.png" alt="" fill sizes="(max-width: 800px) 70vw, 340px" />
          </div>
        </div>
      </section>

      <footer className="weeklyswift-footer page-shell">
        <Link className="weeklyswift-brand" href="/" aria-label="CoolMint 포트폴리오로 이동">
          <Image src="/weeklyswift/app-icon.png" alt="" width={32} height={32} />
          <span><strong>민트주간</strong><small>WEEKLY SWIFT</small></span>
        </Link>
        <p>For curious iOS developers, everywhere.</p>
        <div><a href={appStoreUrl} target="_blank" rel="noreferrer">App Store ↗</a><Link href="/">CoolMint ↗</Link></div>
      </footer>
    </main>
  );
}
