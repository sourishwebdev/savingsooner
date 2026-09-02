export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mint-vital";

export const navLinkClass = `text-body text-cloud-white transition-[color,transform] duration-150 hover:text-clinical-cyan hover:-translate-y-px active:text-iris-pulse active:translate-y-0 ${focusRing}`;

export const primaryCtaClass = `inline-flex items-center justify-center rounded-buttons bg-iris-pulse px-24 py-16 text-body text-cloud-white shadow-cta transition-[background-color,transform] duration-150 hover:bg-iris-veil hover:-translate-y-px active:bg-iris-glow active:translate-y-0 ${focusRing} disabled:cursor-not-allowed disabled:bg-iris-shadow disabled:text-fog disabled:shadow-none disabled:hover:translate-y-0`;

export const navCtaClass = `inline-flex items-center justify-center rounded-buttons bg-iris-pulse px-24 py-16 text-body text-cloud-white transition-[background-color,transform] duration-150 hover:bg-iris-veil hover:-translate-y-px active:bg-iris-glow active:translate-y-0 ${focusRing} disabled:cursor-not-allowed disabled:bg-iris-shadow disabled:text-fog disabled:hover:translate-y-0`;

export const ghostCtaClass = `inline-flex items-center justify-center rounded-buttons border border-pearl bg-transparent px-24 py-16 text-body text-cloud-white transition-[border-color,color,transform,background-color] duration-150 hover:-translate-y-px hover:border-clinical-cyan hover:text-clinical-cyan active:translate-y-0 active:border-iris-pulse active:text-iris-pulse ${focusRing}`;

export const lightCtaClass = `inline-flex w-full items-center justify-center rounded-buttons bg-cloud-white px-24 py-16 text-body text-deep-iris transition-[background-color,color,transform] duration-150 hover:-translate-y-px hover:bg-deep-iris hover:text-cloud-white active:translate-y-0 active:bg-iris-shadow sm:w-auto ${focusRing}`;

export const navLinks = [
  { href: "#curriculum", label: "Curriculum" },
  { href: "#impact", label: "Impact" },
  { href: "#for-schools", label: "For schools" },
] as const;
