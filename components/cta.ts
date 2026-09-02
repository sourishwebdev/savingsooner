export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mint-vital";

export const navLinkClass = `text-body text-cloud-white transition-[color,transform] duration-150 hover:text-clinical-cyan hover:-translate-y-px active:text-iris-pulse active:translate-y-0 ${focusRing}`;

export const primaryCtaClass = `inline-flex items-center justify-center rounded-buttons bg-cloud-white px-24 py-16 text-body text-deep-iris shadow-cta transition-[background-color,transform] duration-150 hover:bg-pearl hover:-translate-y-px active:bg-ash active:translate-y-0 ${focusRing} disabled:cursor-not-allowed disabled:bg-ash disabled:text-fog disabled:shadow-none disabled:hover:translate-y-0`;

export const navCtaClass = `inline-flex items-center justify-center rounded-buttons bg-cloud-white px-24 py-16 text-body text-deep-iris transition-[background-color,transform] duration-150 hover:bg-pearl hover:-translate-y-px active:bg-ash active:translate-y-0 ${focusRing} disabled:cursor-not-allowed disabled:bg-ash disabled:text-fog disabled:hover:translate-y-0`;

export const ghostCtaClass = `inline-flex items-center justify-center rounded-buttons border border-pearl bg-transparent px-24 py-16 text-body text-cloud-white transition-[border-color,color,transform,background-color] duration-150 hover:-translate-y-px hover:border-clinical-cyan hover:text-clinical-cyan active:translate-y-0 active:border-iris-pulse active:text-iris-pulse ${focusRing}`;

export const lightCtaClass = `inline-flex w-full items-center justify-center rounded-buttons bg-cloud-white px-24 py-16 text-body text-deep-iris shadow-cta transition-[background-color,transform] duration-150 hover:bg-ash hover:-translate-y-px active:bg-fog active:translate-y-0 sm:w-auto ${focusRing} disabled:cursor-not-allowed disabled:bg-ash disabled:text-fog disabled:shadow-none disabled:hover:translate-y-0`;

export const navLinks = [
  { href: "#curriculum", label: "Curriculum" },
  { href: "#impact", label: "Impact" },
  { href: "#signup", label: "Sign up" },
] as const;
