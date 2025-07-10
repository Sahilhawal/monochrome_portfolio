import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Sahil Hawal",
  description: "Portfolio",
};

const nerdFont = localFont({
  src: [
    {
      path: "../public/fonts/0xProtoNerdFont-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-nerd-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nerdFont.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
