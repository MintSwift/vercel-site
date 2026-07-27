import type { Metadata } from "next";
import Link from "next/link";
import ProjectBanner from "../components/ProjectBanner";

export const metadata: Metadata = {
  title: "MintWallet — CoolMint",
  description: "돈의 움직임을 가볍게 정리하는 개인 금융 경험.",
};

export default function MintWalletPage() {
  return <main className="case-page case-wallet"><header className="site-header page-shell"><Link className="brand" href="/"><span className="brand-mark" aria-hidden="true">✦</span>CoolMint</Link><Link className="back-link" href="/">Back to portfolio <span aria-hidden="true">↗</span></Link></header><ProjectBanner /><section className="case-hero page-shell"><p className="eyebrow"><span className="eyebrow-dot" /> Case study · 2023</p><h1>MintWallet<em> / A calmer way to keep score.</em></h1><p className="case-intro">돈을 잘 관리한다는 건 더 자주 확인하는 일이 아니라, 내 상태를 편안하게 아는 일에서 시작합니다.</p><a className="button app-store-button" href="https://apps.apple.com/kr/app/%EB%AF%BC%ED%8A%B8%EC%A7%80%EA%B0%91/id1532835617" target="_blank" rel="noreferrer">App Store에서 다운로드 <span aria-hidden="true">↗</span></a><div className="case-art wallet-art"><div className="wallet-shape"><span className="wallet-chip">M</span><span className="wallet-balance">₩ 2,480,000</span><span className="wallet-label">AVAILABLE BALANCE</span></div><div className="wallet-orbit" /></div></section><section className="case-body page-shell"><div className="case-facts"><span>Role</span><strong>Product design<br />Development</strong><span>Platform</span><strong>iPhone</strong><span>Year</span><strong>2023</strong></div><div className="case-copy"><p className="section-kicker">The idea</p><h2>Money, made human.</h2><p>민트월렛은 숫자와 그래프 사이에 숨어 있던 사용자의 마음을 먼저 생각합니다. 부담 없이 열어보고, 한눈에 이해하고, 작게 행동할 수 있도록 설계했습니다.</p><div className="case-columns"><div><b>01</b><h3>One clear picture</h3><p>흩어진 자산과 지출을 하나의 차분한 화면으로 정리합니다.</p></div><div><b>02</b><h3>Small next steps</h3><p>오늘 할 수 있는 작은 행동으로 건강한 습관을 시작합니다.</p></div></div></div></section><footer className="case-footer page-shell"><Link href="/overtake">Previous project <span aria-hidden="true">←</span></Link><Link href="/">Back home <span aria-hidden="true">↗</span></Link></footer></main>;
}
