import type { Metadata } from "next";
import {Fira_Code,Open_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

const Fira_CodeFont = Fira_Code({
  subsets: ["latin"],weight:["400", "500", "600", "700"]
});

const Open_SansontFont = Open_Sans({
  subsets: ["latin"],weight:["400"]
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Fira_CodeFont.className} ${Open_SansontFont.className} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
