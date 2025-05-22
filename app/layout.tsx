import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const outfit = Outfit({
  variable: "--font-Outfit",
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
        className={`${outfit.variable} antialiased`}
      >
        	<Theme accentColor="lime" grayColor="olive" appearance="dark">
        {children}
          </Theme>
      </body>
    </html>
  );
}
