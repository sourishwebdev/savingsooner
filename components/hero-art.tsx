"use client";

import { useEffect, useRef } from "react";

function WorkshopDrawing() {
  return (
    <svg
      viewBox="0 0 360 460"
      className="h-full w-full"
      fill="none"
      role="img"
      aria-labelledby="hero-art-title"
    >
      <title id="hero-art-title">
        Line drawing of a summer bootcamp workshop: a market curve on the board, a work
        table, and a notebook
      </title>
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="38" y="28" width="284" height="214" rx="7" />
        <path d="M70 214V62h20" />
        <path d="M70 214h196" />
        <path d="M90 198c38-8 72-86 108-86 34 0 62 48 118 62" />
        <path d="M198 112l18-28 16 12" />
        <circle cx="316" cy="56" r="14" />
        <path d="M316 48v8l6 4" />

        <path d="M64 316h232l-16 72H80z" />
        <path d="M112 316v-28h136v28" />
        <rect x="132" y="268" width="96" height="20" rx="7" />

        <rect x="92" y="332" width="72" height="48" rx="7" />
        <path d="M104 346h48M104 358h36" />
        <path d="M228 340h56M228 352h40M228 364h48" />
        <circle cx="168" cy="404" r="5" />
        <circle cx="196" cy="404" r="5" />
        <circle cx="224" cy="404" r="5" />
      </g>
    </svg>
  );
}

export function HeroArt() {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (reduce.matches) return;

    inner.classList.add("animate-float");
    if (!finePointer.matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = frame.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
      frame.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onLeave = () => {
      frame.style.transform = "translate3d(0, 0, 0)";
    };

    const parent = frame.parentElement;
    parent?.addEventListener("mousemove", onMove);
    parent?.addEventListener("mouseleave", onLeave);
    return () => {
      parent?.removeEventListener("mousemove", onMove);
      parent?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="will-change-transform transition-transform duration-300 ease-out"
    >
      <div ref={innerRef} className="text-lilac-mist">
        <WorkshopDrawing />
      </div>
    </div>
  );
}
