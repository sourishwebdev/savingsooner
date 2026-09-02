import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SkipLink } from "@/components/skip-link";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SavingSooner — Economics Bootcamp for Students",
  description:
    "Co-founded applied economics and entrepreneurship summer bootcamp. Microeconomics and business models — 165+ students from 9 schools.",
};

const pinScrollScript = `(function(){history.scrollRestoration="manual";if(location.hash==="#main")history.replaceState(null,"",location.pathname+location.search);scrollTo(0,0);})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: pinScrollScript }} />
      </head>
      <body className="min-h-full bg-deep-iris font-gilroy text-cloud-white">
        <SmoothScroll />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
