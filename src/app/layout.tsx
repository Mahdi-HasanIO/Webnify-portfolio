import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webnify | Next-Gen Digital Agency & Motion Engineering",
  description:
    "Webnify is a cutting-edge creative digital agency specializing in high-performance web applications, AI platforms, spatial e-commerce, and immersive 60 FPS motion experiences.",
  keywords: [
    "Digital Agency",
    "Creative Development",
    "Next.js 15",
    "React 19",
    "Motion Design",
    "GSAP",
    "Aceternity UI",
    "AI Solutions",
  ],
  authors: [{ name: "Webnify Agency" }],
  openGraph: {
    title: "Webnify | Next-Gen Digital Agency & Motion Engineering",
    description: "Engineering breathtaking interactive digital experiences and high-velocity web platforms.",
    url: "https://webnify.io",
    siteName: "Webnify",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webnify | Next-Gen Digital Agency",
    description: "Breathtaking interactive digital experiences and high-velocity web platforms.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        {/* Tailwind CSS v4 Browser CDN */}
        <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      </head>
      <body className="min-h-full flex flex-col bg-[#030712] text-zinc-100 selection:bg-cyan-500 selection:text-black">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
