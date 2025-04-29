import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sass Landing",
  description: "Aesthetically Pleasing SASS Langing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
