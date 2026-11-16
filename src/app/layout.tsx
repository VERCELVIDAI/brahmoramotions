import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/data/company";
import { generateStructuredData } from "@/lib/schema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FFD400",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: "BRAHMORA MOTIONS | Creative Media & Technology Studio",
    template: "%s | BRAHMORA MOTIONS",
  },
  description:
    "BRAHMORA MOTIONS is a Creative Media & Technology Studio based in Noida, Uttar Pradesh, India. Specializing in cinematic AI video production, bespoke website development, scalable SaaS applications, branding, and digital growth.",
  applicationName: "BRAHMORA MOTIONS",
  authors: [{ name: "BRAHMORA MOTIONS", url: COMPANY.website }],
  generator: "Next.js",
  keywords: [
    "Brahmora Motions",
    "Creative Media Studio Noida",
    "AI Advertisement Videos",
    "Website Development Studio",
    "SaaS Application Development",
    "Branding and Creative Design",
    "Digital Advertising Campaigns",
    "Social Media Management Noida",
    "AI Automation Noida",
    "Creative Technology Agency India",
  ],
  creator: "BRAHMORA MOTIONS",
  publisher: "BRAHMORA MOTIONS",
  alternates: {
    canonical: COMPANY.website,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: COMPANY.website,
    siteName: "BRAHMORA MOTIONS",
    title: "BRAHMORA MOTIONS | Creative Media & Technology Studio",
    description:
      "Born To Create Beyond Limits. Creative Media & Technology Studio based in Noida, Uttar Pradesh, India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "BRAHMORA MOTIONS — Creative Media & Technology Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAHMORA MOTIONS | Creative Media & Technology Studio",
    description:
      "Born To Create Beyond Limits. Creative Media & Technology Studio based in Noida, Uttar Pradesh, India.",
    images: ["/og-image.png"],
    creator: "@brahmoramotion",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { organizationSchema, websiteSchema } = generateStructuredData();

  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans bg-white text-brand-charcoal antialiased selection:bg-brand-yellow selection:text-brand-charcoal min-h-screen flex flex-col">
        {/* Top Scroll Progress Line */}
        <ScrollProgress />

        {/* Global Sticky Navbar */}
        <Navbar />

        {/* Main Routed Page Content */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* Global Multi-column Footer */}
        <Footer />

        {/* Floating WhatsApp Action Pill */}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
