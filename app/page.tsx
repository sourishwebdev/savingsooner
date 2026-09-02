import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { Curriculum } from "@/components/curriculum";
import { SchoolCta } from "@/components/school-cta";
import { SiteNav } from "@/components/site-nav";
import { Wordmark } from "@/components/wordmark";

export default function Home() {
  return (
    <div className="min-h-full bg-deep-iris">
      <SiteNav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Impact />
        <Curriculum />
        <SchoolCta />
      </main>
      <footer className="border-t border-iris-border bg-deep-iris px-24 py-32">
        <div className="mx-auto flex max-w-page flex-col gap-16 sm:flex-row sm:items-center sm:justify-between sm:gap-24">
          <Wordmark compact />
          <p className="text-caption text-pearl sm:text-right">
            Applied economics summer bootcamp
            <span className="mt-8 block">Made 2024 · By AP Works</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
