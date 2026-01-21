import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import type { Viewport } from "next";
import PersonJsonLd from "./components/PersonJsonLd";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const charter = localFont({
  src: [
    {
      path: "../../public/fonts/charter.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-charter",
});

export const degular = localFont({
  src: [
    {
      path: "../../public/fonts/degular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-degular",
});

export const metadata: Metadata = {
  title: {
    default: "Anil Mathews | Entrepreneur and Author",
    template: "%s | Anil Mathews",
  },
  description:
    "Anil Mathews is an entrepreneur and author, founder of Alphabyte Ventures and author of The Start Switch.",
  icons: {
    icon: [
      "/favicon-new.ico",
      { url: "/favicon-new-32x32.png", sizes: "32x32" },
      { url: "/favicon-new-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon-new.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-new.svg",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${charter.variable} ${degular.variable} antialiased`}
      >
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
