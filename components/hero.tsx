import { ghostCtaClass, primaryCtaClass } from "@/components/cta";
import { HeroArt } from "@/components/hero-art";
import { HeroVerb } from "@/components/hero-verb";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="px-24 pb-48 pt-32 md:pt-48 lg:pb-116"
    >
      <div className="mx-auto grid max-w-page items-center gap-48 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-32">
        <div className="order-2 mx-auto aspect-[36/46] w-full max-w-[360px] animate-enter enter-d2 lg:order-1 lg:mx-0 lg:max-w-none">
          <HeroArt />
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <p className="animate-enter text-caption text-pearl">
            Applied Economics · Entrepreneurship Bootcamp
          </p>
          <h1
            id="hero-heading"
            className="mt-16 animate-enter-shift enter-d1 text-heading text-cloud-white md:text-heading-xl xl:text-display"
          >
            <span className="block">Students don&apos;t</span>
            <span className="block">just study markets.</span>
            <span className="mt-40 flex flex-wrap items-baseline gap-x-[0.22em] gap-y-8">
              <span>They</span>
              <span className="sr-only">
                build, create, make, and shape
              </span>
              <HeroVerb />
              <span>them.</span>
            </span>
          </h1>
          <p className="mt-32 max-w-[42rem] animate-enter enter-d3 text-body text-pearl">
            SavingSooner is a co-founded applied economics and entrepreneurship
            program. We teach microeconomics and business models in a summer
            bootcamp students sign up for.
          </p>
          <div className="mt-32 flex animate-enter enter-d4 flex-col gap-16 sm:flex-row sm:flex-wrap">
            <a href="#signup" className={primaryCtaClass}>
              Join the summer bootcamp
            </a>
            <a href="#curriculum" className={ghostCtaClass}>
              See the curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
