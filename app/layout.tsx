import type { Metadata } from "next";
import { Geist as Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veggie Fruits - Home",
  description: 'A place to buy fresh vegetables and fruits online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
