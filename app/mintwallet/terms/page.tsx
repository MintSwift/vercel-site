import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 — MintWallet",
  description: "MintWallet 이용약관",
};

const koreanSections = [
  ["제1조 (목적)", "이 약관은 MintWallet(이하 ‘서비스’)의 이용과 관련하여 서비스 제공자와 이용자 사이의 권리, 의무 및 책임사항을 정하는 것을 목적으로 합니다."],
  ["제2조 (서비스의 성격)", "MintWallet은 이용자가 카드, 계좌, 구독, 개인정보 및 관련 메모를 기기에서 정리하고 확인할 수 있도록 돕는 개인용 정보 관리 도구입니다. 서비스는 금융기관, 카드사 또는 정부기관을 대신하지 않으며 금융거래를 실행하지 않습니다."],
  ["제3조 (이용자의 책임)", "이용자는 본인의 기기와 계정, 앱 잠금 비밀번호 및 백업 비밀번호를 안전하게 관리해야 합니다. 이용자가 입력한 정보의 정확성, 백업 파일의 보관 및 비밀번호 분실에 대한 책임은 이용자에게 있습니다."],
  ["제4조 (백업 및 데이터 보관)", "서비스는 별도의 서버에 이용자 정보를 저장하지 않습니다. 백업·복원 기능은 이용자의 기기 또는 이용자가 선택한 저장 위치를 통해 제공됩니다. 백업 비밀번호를 분실한 경우 서비스 제공자가 데이터를 복구할 수 없습니다."],
  ["제5조 (프리미엄 기능 및 결제)", "일부 기능은 유료 구독으로 제공될 수 있습니다. 결제, 구독 갱신, 해지 및 환불은 Apple App Store의 결제 정책과 이용약관을 따릅니다. 구독 해지는 App Store 계정 설정에서 직접 관리해야 합니다."],
  ["제6조 (지적재산권)", "서비스의 이름, 디자인, 소프트웨어 및 콘텐츠에 관한 권리는 서비스 제공자 또는 정당한 권리자에게 있습니다. 이용자는 개인적이고 비상업적인 목적의 범위에서만 서비스를 이용할 수 있습니다."],
  ["제7조 (서비스 변경 및 중단)", "서비스 제공자는 기능 개선, 운영상 필요 또는 관련 법령에 따라 서비스의 일부를 변경하거나 중단할 수 있습니다. 중대한 변경이 있는 경우 가능한 범위에서 서비스 내 또는 관련 안내를 통해 알립니다."],
  ["제8조 (면책)", "서비스는 이용자의 편의를 위한 정보 관리 도구이며 입력 정보의 정확성, 금융 결과, 일정 알림의 도착 또는 데이터 손실이 전혀 발생하지 않을 것을 보증하지 않습니다. 법률이 허용하는 범위에서 서비스 제공자의 책임은 제한됩니다."],
  ["제9조 (약관의 변경)", "서비스 제공자는 법령을 위반하지 않는 범위에서 약관을 변경할 수 있습니다. 변경된 약관은 게시된 시점부터 적용되며, 이용자가 계속 서비스를 이용하면 변경된 약관에 동의한 것으로 봅니다."],
  ["제10조 (문의)", "약관 및 서비스에 관한 문의는 coolmint.developer@gmail.com으로 보내 주세요. Apple 서비스 이용약관(EULA)은 https://www.apple.com/legal/internet-services/itunes/dev/stdeula/ 에서 확인할 수 있습니다."],
];

const englishSections = [
  ["Article 1 (Purpose)", "These Terms define the rights, duties, and responsibilities between the service provider and users in connection with MintWallet (the ‘Service’)."],
  ["Article 2 (Nature of the Service)", "MintWallet is a personal information management tool that helps users organise cards, accounts, subscriptions, personal information, and notes on their device. It is not a bank, card issuer, government agency, or financial transaction service."],
  ["Article 3 (User responsibilities)", "Users are responsible for protecting their device, app passcode, backup password, and the accuracy of information they enter. Users are also responsible for keeping backup files safe."],
  ["Article 4 (Backups and storage)", "The Service does not store user information on a separate server. Backup and restore use the user’s device or a storage location selected by the user. Lost backup passwords cannot be recovered by the service provider."],
  ["Article 5 (Premium features and payments)", "Some features may be offered through a paid subscription. Billing, renewals, cancellations, and refunds are governed by Apple App Store policies and terms. Subscriptions must be managed from the Apple account settings."],
  ["Article 6 (Intellectual property)", "Rights to the Service name, design, software, and content belong to the service provider or the relevant rights holders. Users may use the Service only for personal, non-commercial purposes."],
  ["Article 7 (Changes and interruption)", "The service provider may change or discontinue part of the Service for improvements, operational needs, or legal compliance. Material changes will be announced where reasonably possible."],
  ["Article 8 (Disclaimer)", "The Service is provided as a convenience tool and does not guarantee the accuracy of user-entered information, financial outcomes, delivery of notifications, or complete prevention of data loss. Liability is limited to the extent permitted by law."],
  ["Article 9 (Changes to these Terms)", "The service provider may change these Terms within the limits of applicable law. Updated Terms apply from the time of publication, and continued use of the Service constitutes acceptance of the updated Terms."],
  ["Article 10 (Contact)", "For questions about these Terms or the Service, contact coolmint.developer@gmail.com. Apple’s EULA is available at https://www.apple.com/legal/internet-services/itunes/dev/stdeula/."],
];

function TermsColumn({ title, sections }: { title: string; sections: string[][] }) {
  return <section className="mintwallet-policy-column"><h2>{title}</h2>{sections.map(([heading, body]) => <div className="mintwallet-policy-section" key={heading}><h3>{heading}</h3><p>{body}</p></div>)}</section>;
}

export default function MintWalletTermsPage() {
  return <main className="policy-page mintwallet-policy-page"><div className="policy-container"><Link className="policy-back-link" href="/mintwallet">← MintWallet로 돌아가기</Link><h1>이용약관</h1><p className="policy-effective-date">시행일 2026.07.27</p><div className="mintwallet-policy-grid"><TermsColumn title="한국어" sections={koreanSections} /><TermsColumn title="English" sections={englishSections} /></div></div></main>;
}
