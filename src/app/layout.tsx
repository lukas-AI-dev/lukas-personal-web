import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lukáš Kachtík | Automatizace & Vibe Coding",
  description:
    "Osobní stránka Lukáše Kachtíka — automatizace procesů a intuitivní vibe coding pro moderní digitální svět.",
  keywords: ["automatizace", "vibe coding", "Lukáš Kachtík", "developer"],
  authors: [{ name: "Lukáš Kachtík" }],
  openGraph: {
    title: "Lukáš Kachtík | Automatizace & Vibe Coding",
    description:
      "Osobní stránka Lukáše Kachtíka — automatizace procesů a intuitivní vibe coding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
