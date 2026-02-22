import type { Metadata } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
  Merriweather,
} from "next/font/google";
import "./globals.css";
import RootProviders from "@/providers";
import { renderSchemaTags } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import config from "@/lib/config";

const isa = Instrument_Sans({
  variable: "--font-isa",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial"],
  display: "swap",
});

const ise = Instrument_Serif({
  weight: "400",
  variable: "--font-ise",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(`https://${config.domainName}`),
    title: config.appName,
    description: config.appDescription,
    applicationName: config.appName,
    keywords: [
      "portfolio",
      "personal portfolio",
      "web developer",
      "software engineer",
      "front-end developer",
      "creative",
      "coder",
      "programmer",
      "developer",
      "portfolio website",
    ],
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: config.appName,
      description: config.appDescription,
      url: `https://${config.domainName}`,
      images: [
        {
          url: `https://${config.domainName}/og_image.png`,
          width: 1200,
          height: 630,
          alt: "Prasad Reddy's Portfolio OpenGraph Image",
        },
      ],
      siteName: config.appName,
    },
    twitter: {
      card: "summary_large_image",
      title: config.appName,
      description: config.appDescription,
      images: [`https://${config.domainName}/og_image.png`],
    },
  };
}

export const viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${isa.variable} ${ise.variable} ${jetbrains.variable} ${merriweather.variable} antialiased ise`}
      >
        {renderSchemaTags()}
        <RootProviders> {children}</RootProviders>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
