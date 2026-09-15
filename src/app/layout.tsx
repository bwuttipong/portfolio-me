import { ReticleDev } from './reticle-dev';
import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { siteMetadata } from "@/data/portfolio";
import "./globals.css";

const heading = Space_Grotesk({ subsets: ["latin"], variable: "--heading", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--mono", display: "swap" });
export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: [{ name: 'Wuttipong “Best” Thongmon' }],
  openGraph: { title: siteMetadata.title, description: siteMetadata.description, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: siteMetadata.title, description: siteMetadata.description },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`}><body suppressHydrationWarning>{process.env.NODE_ENV === 'development' ? <ReticleDev /> : null}<a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
