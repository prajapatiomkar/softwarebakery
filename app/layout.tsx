import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://softwarebakery.in'),
  title: {
    default: "Software Bakery | Freshly Baked Software Solutions",
    template: "%s | Software Bakery",
  },
  description: "Software Bakery delivers high-quality, custom software solutions, web development, and digital services tailored to your business needs.",
  keywords: ["Software Development", "Web Development", "Custom Software", "Digital Agency", "Software Bakery", "App Development", "Tech Solutions"],
  authors: [{ name: "Software Bakery Team" }],
  creator: "Software Bakery",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Software Bakery | Freshly Baked Software Solutions",
    description: "Software Bakery delivers high-quality, custom software solutions, web development, and digital services tailored to your business needs.",
    siteName: "Software Bakery",
    images: [
      {
        url: "/favicon.ico", // Update with a real high-res OG image later
        width: 1200,
        height: 630,
        alt: "Software Bakery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Bakery | Freshly Baked Software Solutions",
    description: "Software Bakery delivers high-quality, custom software solutions, web development, and digital services tailored to your business needs.",
    images: ["/favicon.ico"], // Update with a real high-res image later
  },
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
