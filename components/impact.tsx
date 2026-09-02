"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "@/components/use-in-view-once";

function useCountUp(target: number, start: boolean, duration = 900) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const begun = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - begun) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, start, target]);

  return value;
}

export function Impact() {
  const { ref, inView } = useInViewOnce<HTMLElement>(0.28);
  const students = useCountUp(165, inView);
  const schools = useCountUp(9, inView);

  useEffect(() => {
    if (!inView) return;
    const id = requestAnimationFrame(() => {
      ref.current?.classList.add("is-in");
    });
    return () => cancelAnimationFrame(id);
  }, [inView, ref]);

  return (
    <section
      ref={ref}
      id="impact"
      aria-labelledby="impact-heading"
      className="reveal px-24 py-section"
    >
      <div className="mx-auto grid max-w-page gap-48 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div>
          <h2
            id="impact-heading"
            className="text-heading text-cloud-white md:text-heading-lg"
          >
            165+ students from 9 schools.
          </h2>
          <p className="mt-24 max-w-[32rem] text-body text-pearl">
            A summer bootcamp students choose to take — advertised across nine
            schools, with participants from each one.
          </p>
        </div>

        <div className="grid gap-16 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
          <article className="rounded-cards border border-iris-border bg-iris-glow p-24">
            <p className="text-heading-xl text-clinical-cyan md:text-display">
              <span className="sr-only">165+ students</span>
              <span aria-hidden="true">{students}+</span>
            </p>
            <p className="mt-12 text-body-sm text-cloud-white">students</p>
          </article>
          <article className="rounded-cards border border-iris-border bg-iris-shadow p-24 sm:mt-32">
            <p className="text-heading-xl text-clinical-cyan">
              <span className="sr-only">9 schools</span>
              <span aria-hidden="true">{schools}</span>
            </p>
            <p className="mt-12 text-body-sm text-cloud-white">schools reached</p>
          </article>
        </div>
      </div>
    </section>
  );
}
