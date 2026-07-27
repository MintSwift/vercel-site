import type { Metadata } from "next";
import Link from "next/link";
import ProjectBanner from "../components/ProjectBanner";

export const metadata: Metadata = {
  title: "Overtake — CoolMint",
  description: "경기의 흐름을 더 빠르고 선명하게 읽는 스포츠 경험.",
};

export default function OvertakePage() {
  return (
    <main className="case-page case-overtake">
      <header className="site-header page-shell">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">✦</span>CoolMint
        </Link>
        <Link className="back-link" href="/">Back to portfolio <span aria-hidden="true">↗</span></Link>
      </header>
      <ProjectBanner />
      <section className="case-hero page-shell">
        <p className="eyebrow"><span className="eyebrow-dot" /> Case study · 2024</p>
        <h1>Overtake<em> / Read the game as it moves.</em></h1>
        <p className="case-intro">스포츠를 좋아하는 사람에게 필요한 건 더 많은 숫자가 아니라, 지금 무슨 일이 일어나고 있는지 바로 아는 감각입니다.</p>
        <a className="button app-store-button" href="https://apps.apple.com/app/id6760613857" target="_blank" rel="noreferrer">App Store에서 다운로드 <span aria-hidden="true">↗</span></a>
        <div className="case-art overtake-art">
          <div className="court court-one" /><div className="court court-two" /><div className="score-pill">Q4&nbsp;&nbsp; 02:14</div><div className="overtake-word">OVERTAKE</div>
        </div>
      </section>
      <section className="case-body page-shell">
        <div className="case-facts"><span>Role</span><strong>Product design<br />Development</strong><span>Platform</span><strong>iPhone · iPad</strong><span>Year</span><strong>2024</strong></div>
        <div className="case-copy"><p className="section-kicker">The idea</p><h2>Signal over noise.</h2><p>오버테이크는 경기의 모든 데이터를 보여주는 대신, 지금의 흐름을 이해하는 데 필요한 순간만 골라 보여줍니다. 빠른 스코어, 짧은 맥락, 다음 장면을 위한 정보.</p><div className="case-columns"><div><b>01</b><h3>Live, not loud</h3><p>시선을 빼앗지 않고도 경기의 변화가 손끝에 느껴지는 인터페이스.</p></div><div><b>02</b><h3>Made for rhythm</h3><p>경기 전, 경기 중, 경기 후. 각각의 리듬에 맞춘 정보 구조.</p></div></div></div>
      </section>
      <footer className="case-footer page-shell">
        <div className="case-policy-links"><Link href="/overtake/privacy.html">Privacy Policy</Link><Link href="/overtake/terms.html">Terms of Service</Link></div>
        <Link href="/mintwallet">Next project <span aria-hidden="true">→</span></Link>
      </footer>
    </main>
  );
}
