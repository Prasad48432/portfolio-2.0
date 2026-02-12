import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import RootProviders from "@/providers";

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://prasadreddy03.vercel.app"),
    title: "Prasad Reddy's Portfolio",
    description: "Prasad Reddy, I am a fun guy",
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: "Prasad Reddy's Portfolio",
      description: "Prasad Reddy, I am a fun guy",
      url: "https://prasadreddy03.vercel.app",
      images: [
        {
          url: "https://prasadreddy03.vercel.app/og_image.png", // ✅ FULL URL
          width: 1200,
          height: 630,
          alt: "Prasad Reddy's Portfolio OpenGraph Image",
        },
      ],
      siteName: "Prasad Reddy's Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: "Prasad Reddy's Portfolio",
      description:
        "Radify Lighting provides premium architectural, decorative and smart lighting solutions for modern homes and commercial spaces.",
      images: ["https://prasadreddy03.vercel.app/og_image.png"], // ✅ FULL URL
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
    <html lang="en">
      <body className={`${isa.variable} ${ise.variable} antialiased ise`}>
        <RootProviders> {children}</RootProviders>
      </body>
    </html>
  );
}
