import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/providers/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({

  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Selvaganesh | Full Stack Developer",
    template: "%s | Selvaganesh",
  },
  keywords: ["Selvaganesh", "Full Stack Developer", "Portfolio", "Resume", "Web Developer", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  description: "Selvaganesh is a Full Stack Developer specializing in building scalable web applications using Next.js, React, TypeScript, and Tailwind CSS. Explore his portfolio and resume to learn more about his skills and experience.",
  authors: [{ name: "Selvaganesh", url: "https://selvaganesh.com" }],
  creator: "Selvaganesh",
  metadataBase: new URL("https://selvaganesh.com"),
  openGraph: {
    title: "Selvaganesh | Full Stack Developer",
    description: "Selvaganesh is a Full Stack Developer specializing in building scalable web applications using Next.js, React, TypeScript, and Tailwind CSS. Explore his portfolio and resume to learn more about his skills and experience.",
    url: "https://selvaganesh.com",
    siteName: "Selvaganesh Portfolio",
    images: [
      {
        url: "https://selvaganesh.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selvaganesh | Full Stack Developer",
    description: "Selvaganesh is a Full Stack Developer specializing in building scalable web applications using Next.js, React, TypeScript, and Tailwind CSS. Explore his portfolio and resume to learn more about his skills and experience.",
    images: ["https://selvaganesh.com/og-image.png"],
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
