import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SavingSooner — Applied economics bootcamps for schools",
  description:
    "Co-founded applied economics and entrepreneurship bootcamps. Microeconomics and business models — 160+ students across 9 schools.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-deep-iris font-gilroy text-cloud-white">
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
