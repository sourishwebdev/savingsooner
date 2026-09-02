"use client";

import { useEffect } from "react";

const EASE = 0.12;
const ANCHOR_OFFSET = 24;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isNestedScrollable(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  let node: HTMLElement | null = target instanceof HTMLElement ? target : target.parentElement;
  while (node && node !== document.body && node !== document.documentElement) {
    const { overflowY } = getComputedStyle(node);
    if (
      (overflowY === "auto" || overflowY === "scroll") &&
      node.scrollHeight > node.clientHeight + 1
    ) {
      return true;
    }
    node = node.parentElement;
  }
  return false;
}

export function SmoothScroll() {
  useEffect(() => {
    const sectionHash = () => {
      const id = window.location.hash.slice(1);
      return id === "curriculum" || id === "impact" || id === "signup"
        ? id
        : "";
    };

    if (prefersReducedMotion()) {
      const pinTop = () => {
        if (sectionHash()) return;
        if (window.location.hash === "#main") {
          const url = `${window.location.pathname}${window.location.search}`;
          window.history.replaceState(null, "", url);
        }
        window.scrollTo(0, 0);
      };
      pinTop();
      window.addEventListener("pageshow", pinTop);
      window.addEventListener("load", pinTop);
      return () => {
        window.removeEventListener("pageshow", pinTop);
        window.removeEventListener("load", pinTop);
      };
    }

    document.documentElement.classList.add("has-smooth-scroll");

    let target = 0;
    let current = 0;
    let running = false;
    let pinning = true;

    const pinTop = () => {
      if (sectionHash()) return;
      pinning = true;
      running = false;
      target = 0;
      current = 0;
      if (window.location.hash === "#main") {
        const url = `${window.location.pathname}${window.location.search}`;
        window.history.replaceState(null, "", url);
      }
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          pinning = false;
        });
      });
    };

    pinTop();

    const maxY = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const clamp = (value: number) => Math.max(0, Math.min(maxY(), value));

    const tick = () => {
      current += (target - current) * EASE;
      if (Math.abs(target - current) < 0.4) current = target;
      window.scrollTo(0, current);
      if (current !== target) {
        requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const go = () => {
      if (running) return;
      running = true;
      requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || isNestedScrollable(event.target)) return;
      event.preventDefault();
      target = clamp(target + event.deltaY);
      go();
    };

    const onScroll = () => {
      if (running || pinning) return;
      target = window.scrollY;
      current = window.scrollY;
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a[href^='#']");
      if (!(link instanceof HTMLAnchorElement)) return;
      const id = link.hash.slice(1);
      if (!id) return;
      const dest = document.getElementById(id);
      if (!dest) return;
      event.preventDefault();
      if (id === "main") {
        dest.focus({ preventScroll: true });
      }
      target = clamp(
        dest.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET,
      );
      go();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pageshow", pinTop);
    window.addEventListener("load", pinTop);
    document.addEventListener("click", onClick);

    return () => {
      document.documentElement.classList.remove("has-smooth-scroll");
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pageshow", pinTop);
      window.removeEventListener("load", pinTop);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
