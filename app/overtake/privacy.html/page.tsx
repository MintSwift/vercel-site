import type { Metadata } from "next";
import { PolicyDocument, privacySections } from "../policy-content";

export const metadata: Metadata = {
  title: "개인정보 처리방침 - Overtake",
  description: "Overtake 개인정보 처리방침",
};

export default function OvertakePrivacyPage() {
  return <PolicyDocument title="Privacy Policy / 개인정보 처리방침" english={privacySections.english} korean={privacySections.korean} />;
}
