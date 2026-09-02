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
    if (prefersReducedMotion()) return;

    document.documentElement.classList.add("has-smooth-scroll");

    let target = window.scrollY;
    let current = window.scrollY;
    let running = false;

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
      if (running) return;
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
      target = clamp(
        dest.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET,
      );
      go();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);

    return () => {
      document.documentElement.classList.remove("has-smooth-scroll");
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
