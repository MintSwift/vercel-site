import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — MintWallet",
  description: "MintWallet 개인정보 처리방침",
};

const koreanSections = [
  ["1. 개인정보의 처리 목적", "MintWallet은 개인정보를 수집하지 않는 독립 실행형 애플리케이션입니다. 별도의 서버를 운영하거나 이용자의 개인정보를 수집·저장·이용하지 않습니다."],
  ["2. 개인정보 파일 현황", "별도의 개인정보 파일을 사용하거나 저장하지 않습니다. 쿠키를 저장하거나 이용하지 않습니다. App Store 및 광고 미디어와 관련한 문의는 해당 서비스로 직접 연락해 주세요."],
  ["3. 개인정보의 처리 및 보유기간", "개인정보를 직접 저장하거나 보유하지 않으므로 개인정보를 처리하는 내용과 보유기간이 없습니다."],
  ["4. 개인정보의 제3자 제공", "이용자의 개인정보를 제3자에게 제공하지 않습니다."],
  ["5. 개인정보 처리의 위탁", "개인정보 처리를 외부에 위탁하지 않습니다."],
  ["6. 정보주체의 권리와 행사방법", "이용자는 개인정보주체로서 개인정보 열람, 오류 정정, 삭제 및 처리 정지를 요구할 수 있습니다. 다만 MintWallet은 개인정보를 저장하거나 위탁하지 않습니다."],
  ["7. 개인정보의 파기", "MintWallet은 별도의 서버를 사용하지 않고 개인정보를 저장하지 않으므로 파기할 개인정보가 없습니다. 사용자가 앱을 삭제하면 기기에 저장된 앱 데이터가 함께 삭제됩니다."],
  ["8. 개인정보 보호책임자", "문의: coolmint.developer@gmail.com"],
];

const englishSections = [
  ["1. Purpose of processing", "MintWallet is a standalone application that does not collect personal information. It does not operate a separate server or collect, store, or use personal information."],
  ["2. Personal information files", "MintWallet does not use or store personal information files, cookies, or similar tracking data. For questions about the App Store or advertising media, please contact the relevant service directly."],
  ["3. Retention period", "MintWallet does not directly store or retain personal information. Therefore, there is no personal information processing or retention period."],
  ["4. Sharing with third parties", "MintWallet does not provide users’ personal information to third parties."],
  ["5. Processing by third parties", "MintWallet does not outsource the processing of personal information."],
  ["6. Rights of data subjects", "Users may request access, correction, deletion, or suspension of processing of personal information. MintWallet does not store or outsource personal information."],
  ["7. Destruction of information", "MintWallet does not use a separate server or store personal information. When the app is deleted, app data stored on the device can also be deleted."],
  ["8. Contact", "Email: coolmint.developer@gmail.com"],
];

function PolicyColumn({ title, sections }: { title: string; sections: string[][] }) {
  return <section className="mintwallet-policy-column"><h2>{title}</h2>{sections.map(([heading, body]) => <div className="mintwallet-policy-section" key={heading}><h3>{heading}</h3><p>{body}</p></div>)}</section>;
}

export default function MintWalletPrivacyPolicyPage() {
  return <main className="policy-page mintwallet-policy-page"><div className="policy-container"><Link className="policy-back-link" href="/mintwallet">← MintWallet로 돌아가기</Link><h1>개인정보 처리방침</h1><p className="policy-effective-date">작성일 2020.10.19 · 최종 확인 2026.07.27</p><div className="mintwallet-policy-grid"><PolicyColumn title="한국어" sections={koreanSections} /><PolicyColumn title="English" sections={englishSections} /></div></div></main>;
}
