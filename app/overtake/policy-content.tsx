import type { ReactNode } from "react";
import Link from "next/link";

type PolicySection = {
  title: string;
  body: ReactNode;
};

type PolicyDocumentProps = {
  title: string;
  english: PolicySection[];
  korean: PolicySection[];
};

const emailLink = <a href="mailto:support@overtake.app">support@overtake.app</a>;

export const privacySections = {
  english: [
    { title: "1. Information We Collect", body: <>Overtake may collect certain information to provide and improve our services. This includes racing statistics preference and app usage data. We do not collect names or contact information unless voluntarily provided for support.</> },
    { title: "2. Subscriptions and Payments (RevenueCat)", body: <>Overtake uses <strong>RevenueCat</strong> to manage in-app subscriptions and analyze purchase history. While all actual payment transactions are securely handled by Apple, RevenueCat helps us understand subscription status and performance to provide a better user experience.</> },
    { title: "3. Analytics and Advertising (Firebase & Google Ads)", body: <>We use <strong>Firebase Analytics</strong> to understand how users interact with the app and to improve performance. Additionally, we use <strong>Google Ads</strong> to display advertisements within the app. these services may use identifiers (such as IDFA) to provide customized experiences and measure ad effectiveness.</> },
    { title: "4. Device Permissions", body: <>Overtake does not request access to sensitive device permissions such as your location, contacts, photos, camera, or microphone.</> },
    { title: "5. Children's Privacy", body: <>Overtake is not directed toward children under the age of 13. We do not knowingly collect personal information from children.</> },
    { title: "6. External Links", body: <>The app may contain links to external sites including our website and social media profiles. We are not responsible for the privacy practices of these external sites.</> },
    { title: "7. Contact Us", body: <>If you have any questions about this Privacy Policy, please contact us at:<br />Email: {emailLink}</> },
    { title: "8. Updates", body: <>We reserve the right to update this Privacy Policy. Any changes will be reflected with a new effective date.</> },
  ],
  korean: [
    { title: "1. 수집하는 정보", body: <>Overtake는 서비스 제공 및 개선을 위해 특정 정보를 수집할 수 있습니다. 여기에는 레이싱 통계 선호도 및 앱 사용 데이터가 포함됩니다. 사용자가 지원을 위해 자발적으로 제공하지 않는 한, 성함이나 연락처 등의 개인정보는 수집하지 않습니다.</> },
    { title: "2. 구독 및 결제 처리 (RevenueCat)", body: <>Overtake는 인앱 구독 관리 및 구매 내역 분석을 위해 <strong>RevenueCat</strong>을 사용합니다. 모든 실제 결제 트랜잭션은 Apple을 통해 안전하게 처리되지만, RevenueCat은 구독 상태 및 서비스 성능을 파악하여 더 나은 사용자 경험을 제공하는 데 도움을 줍니다.</> },
    { title: "3. 서비스 분석 및 광고 (Firebase & Google Ads)", body: <>당사는 사용자가 앱과 상호작용하는 방식을 이해하고 성능을 개선하기 위해 <strong>Firebase Analytics</strong>를 사용합니다. 또한, 앱 내 광고 표시를 위해 <strong>Google Ads</strong>를 사용합니다. 이러한 서비스는 맞춤형 경험 제공 및 광고 효과 측정을 위해 식별자(예: IDFA)를 사용할 수 있습니다.</> },
    { title: "4. 기기 권한", body: <>Overtake는 위치, 연락처, 사진, 카메라 또는 마이크와 같은 민감한 기기 권한에 대한 접근을 요청하지 않습니다.</> },
    { title: "5. 아동의 개인정보 보호", body: <>Overtake는 13세 미만의 아동을 대상으로 하지 않습니다. 당사는 아동으로부터 어떠한 개인 정보도 고의로 수집하지 않습니다.</> },
    { title: "6. 외부 링크", body: <>본 앱은 공식 웹사이트 및 소셜 미디어 프로필을 포함한 외부 사이트로의 링크를 포함할 수 있습니다. 당사는 이러한 외부 사이트의 개인정보 보호 정책에 대해 책임을 지지 않습니다.</> },
    { title: "7. 문의처", body: <>본 개인정보 처리방침에 대한 문의 사항은 아래 이메일로 연락해 주시기 바랍니다.<br />이메일: {emailLink}</> },
    { title: "8. 개정 및 업데이트", body: <>당사는 본 개인정보 처리방침을 업데이트할 권리를 보유합니다. 변경 사항이 있을 경우 시행일을 수정하여 공지합니다.</> },
  ],
};

export const termsSections = {
  english: [
    { title: "1. Acceptance of Terms", body: <>Welcome to Overtake. By accessing or using our application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.</> },
    { title: "2. Description of Service", body: <>Overtake is an application providing motorsport racing data, session schedules, and statistics for informational purposes only.</> },
    { title: "3. Subscriptions", body: <>Overtake may offer weekly and annual subscription options. All payments, billing, and subscription management are handled exclusively by Apple and are subject to Apple’s App Store Terms and Conditions.</> },
    { title: "4. User Conduct", body: <>You agree not to misuse the app in any way that could disrupt its functions or compromise security. You may not reverse engineer, decompile, or attempt to extract source code from the app.</> },
    { title: "5. Limitation of Liability", body: <>Overtake is provided “as is” and “as available.” We are not responsible for any errors, omissions, or inaccuracies in the displayed racing information. You assume all risks associated with the use of the app.</> },
    { title: "6. External Links", body: <>The app may contain links to external sites including our website and social media profiles. We do not control or endorse external content.</> },
    { title: "7. Governing Law", body: <>These terms are governed by and construed in accordance with the laws of the Republic of Korea.</> },
    { title: "8. Changes to Terms", body: <>We reserve the right to modify these Terms of Service at any time. Continued use of Overtake after updates signifies your acceptance of the new terms.</> },
    { title: "9. Contact", body: <>For questions regarding these Terms, please contact us at:<br />Email: {emailLink}</> },
  ],
  korean: [
    { title: "1. 약관의 동의", body: <>Overtake를 이용해 주셔서 감사합니다. 본 앱을 설치하거나 이용함으로써 귀하는 본 이용약관에 동의하게 됩니다. 약관에 동의하지 않으실 경우 서비스 이용이 제한될 수 있습니다.</> },
    { title: "2. 서비스의 목적", body: <>Overtake는 모터스포츠 레이싱 데이터, 세션 일정 및 통계 정보를 제공하는 애플리케이션으로, 모든 정보는 오직 정보 제공의 목적으로만 사용되어야 합니다.</> },
    { title: "3. 구독 및 결제", body: <>Overtake는 주간 및 연간 구독 옵션을 제공할 수 있습니다. 모든 결제 및 구독 관리는 Apple을 통해 처리되며, Apple App Store의 이용 약관 및 정책을 따릅니다.</> },
    { title: "4. 사용자의 의무", body: <>귀하는 앱의 기능을 방해하거나 보안을 침해하는 어떠한 행위도 하지 않기로 동의합니다. 또한 앱을 역설계, 디컴파일하거나 소스 코드를 추출하려는 시도를 해서는 안 됩니다.</> },
    { title: "5. 책임의 한계", body: <>Overtake는 “있는 그대로” 제공됩니다. 당사는 앱에 표시되는 레이싱 정보의 오류, 누락 또는 부정확성에 대해 책임을 지지 않습니다. 서비스 이용과 관련된 모든 위험은 사용자가 부담합니다.</> },
    { title: "6. 외부 링크", body: <>본 앱은 공식 웹사이트 및 소셜 미디어 프로필을 포함한 외부 사이트로의 링크를 포함할 수 있습니다. 당사는 외부 콘텐츠를 통제하거나 보증하지 않습니다.</> },
    { title: "7. 준거법", body: <>본 약관은 대한민국 법률에 따라 규제되고 해석됩니다.</> },
    { title: "8. 약관의 변경", body: <>당사는 언제든지 본 약관을 수정할 권리를 보유합니다. 약관이 업데이트된 후에도 서비스를 계속 이용하는 경우 수정한 약관에 동의한 것으로 간주됩니다.</> },
    { title: "9. 문의처", body: <>본 약관에 대한 문의 사항은 아래 이메일로 연락해 주시기 바랍니다.<br />이메일: {emailLink}</> },
  ],
};

export function PolicyDocument({ title, english, korean }: PolicyDocumentProps) {
  return (
    <main className="policy-page">
      <div className="policy-container">
        <Link className="policy-back-link" href="/overtake">← 홈으로 돌아가기 (Back to Home)</Link>
        <h1>{title}</h1>
        <p className="policy-effective-date">Effective Date / 시행일: 2026. 03. 17.</p>
        <div className="policy-lang-grid">
          <div lang="en">{english.map((section) => <PolicySection key={section.title} {...section} />)}</div>
          <div lang="ko">{korean.map((section) => <PolicySection key={section.title} {...section} />)}</div>
        </div>
      </div>
    </main>
  );
}

function PolicySection({ title, body }: PolicySection) {
  return <section className="policy-section"><h2>{title}</h2><p>{body}</p></section>;
}
