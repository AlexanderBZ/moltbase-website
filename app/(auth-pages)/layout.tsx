import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.atlasview.xyz"),
  title: "Atlas View | Auth",
  description: "Test Your Ads Risk-Free with AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    url: "https://www.atlasview.xyz",
    images: [{ url: "https://www.atlasview.xyz/cover.png" }],
  },
  icons: {
    icon: "/favicon/favicon.ico", // Path to your favicon file
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl flex flex-col gap-12 items-start">{children}</div>
  );
}
