import Image from "next/image";

type AppStoreButtonProps = {
  href: string;
  locale?: "en-us" | "ko-kr";
};

export default function AppStoreButton({ href, locale = "en-us" }: AppStoreButtonProps) {
  const badgeUrl = `https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/${locale}?size=250x83`;
  const badgeLabel = locale === "ko-kr" ? "App Store에서 다운로드" : "Download on the App Store";

  return (
    <a className="app-store-button app-store-badge" href={href} target="_blank" rel="noreferrer" aria-label={badgeLabel}>
      <Image src={badgeUrl} alt={badgeLabel} width={250} height={78} unoptimized />
    </a>
  );
}
