"use client";

import { useEffect, useId, useRef, useState } from "react";
import { focusRing, navCtaClass, navLinkClass, navLinks } from "@/components/cta";
import { Wordmark } from "@/components/wordmark";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (
        target &&
        !buttonRef.current?.contains(target) &&
        !(document.getElementById(menuId)?.contains(target) ?? false)
      ) {
        setOpen(false);
      }
    };

    firstLinkRef.current?.focus();
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open, menuId]);

  return (
    <header className="animate-enter bg-transparent">
      <div className="mx-auto grid h-section max-w-page grid-cols-[minmax(0,1fr)_auto] items-center px-24 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-32 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-12">
          <a href="#for-schools" className={`${navCtaClass} hidden md:inline-flex`}>
            Bring SavingSooner to your school
          </a>

          <button
            ref={buttonRef}
            type="button"
            className={`flex size-32 items-center justify-center rounded-icons text-cloud-white transition-[color,transform] duration-150 hover:text-clinical-cyan hover:-translate-y-px active:text-iris-pulse active:translate-y-0 md:hidden ${focusRing}`}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg viewBox="0 0 32 32" className="size-24" fill="none" aria-hidden="true">
                <path
                  d="M10 10l12 12M22 10L10 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 32 32" className="size-24" fill="none" aria-hidden="true">
                <path
                  d="M7 11h18M7 16h18M7 21h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-iris-border bg-iris-shadow px-24 py-24 md:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-page flex-col gap-16">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={link.href}
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#for-schools"
            className={`${navCtaClass} mt-8`}
            onClick={() => setOpen(false)}
          >
            Bring SavingSooner to your school
          </a>
        </nav>
      </div>
    </header>
  );
}
