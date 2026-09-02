"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["build", "create", "make", "shape"] as const;
const TRACK = [...WORDS, WORDS[0]];
const HOLD_MS = 2800;
const SLIDE_MS = 700;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function HeroVerb() {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [widths, setWidths] = useState<number[] | null>(null);
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const root = measureRef.current;
    if (!root) return;

    const read = () => {
      setWidths(
        Array.from(root.children, (node) =>
          Math.ceil((node as HTMLElement).getBoundingClientRect().width + 2),
        ),
      );
    };

    const frame = requestAnimationFrame(read);
    const observer = new ResizeObserver(read);
    observer.observe(root);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const tick = window.setInterval(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setIndex((current) => (current + 1) % WORDS.length);
        setSliding(false);
        return;
      }
      setSliding(true);
      setIndex((current) => current + 1);
    }, HOLD_MS);

    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    if (!sliding) return;
    const done = window.setTimeout(() => {
      setSliding(false);
      if (index >= WORDS.length) {
        setInstant(true);
        setIndex(0);
      }
    }, SLIDE_MS);
    return () => window.clearTimeout(done);
  }, [sliding, index]);

  useEffect(() => {
    if (!instant) return;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setInstant(false));
    });
    return () => cancelAnimationFrame(frame);
  }, [instant]);

  const shown = index % WORDS.length;
  const width = widths?.[shown];

  return (
    <span
      className="inline-flex max-w-full align-baseline items-center rounded-icons border border-dashed border-clinical-cyan px-12 py-12 text-clinical-cyan"
      aria-hidden="true"
    >
      <span
        className="relative block overflow-hidden leading-none"
        style={{
          width,
          height: "1.2em",
          transition: `width ${SLIDE_MS}ms ${EASE}`,
        }}
      >
        <span
          className="block will-change-transform"
          style={{
            transform: `translate3d(0, ${-index * 1.2}em, 0)`,
            transition: instant ? "none" : `transform ${SLIDE_MS}ms ${EASE}`,
          }}
        >
          {TRACK.map((word, slot) => (
            <span
              key={`${word}-${slot}`}
              className="flex h-[1.2em] items-center whitespace-nowrap px-[0.08em]"
            >
              {word}
            </span>
          ))}
        </span>
      </span>
      <span
        ref={measureRef}
        className="invisible pointer-events-none absolute top-0 left-0 flex leading-none"
        aria-hidden="true"
      >
        {WORDS.map((word) => (
          <span key={word} className="whitespace-nowrap px-[0.08em]">
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
