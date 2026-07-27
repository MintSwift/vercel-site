import type { Metadata } from "next";
import { PolicyDocument, termsSections } from "../policy-content";

export const metadata: Metadata = {
  title: "이용약관 - Overtake",
  description: "Overtake 이용약관",
};

export default function OvertakeTermsPage() {
  return <PolicyDocument title="Terms of Service / 이용약관" english={termsSections.english} korean={termsSections.korean} />;
}
