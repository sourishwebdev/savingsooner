"use client";

import { useEffect, useId, useState, type KeyboardEvent, type ReactNode } from "react";
import { focusRing } from "@/components/cta";
import {
  appliedProjects,
  appliedProjectsLead,
  businessClosing,
  businessIntro,
  businessTopics,
  microeconomicsIntro,
  microeconomicsTopics,
  type TopicGroup,
} from "@/components/curriculum-content";
import { useInViewOnce } from "@/components/use-in-view-once";

function MarketDiagram() {
  return (
    <svg
      viewBox="0 0 280 160"
      className="mt-32 h-auto w-full max-w-[280px] text-lilac-mist"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="draw-path" pathLength={1} d="M24 140V24" />
        <path className="draw-path" pathLength={1} d="M24 140h232" />
        <path
          className="draw-path"
          pathLength={1}
          d="M40 128c36-10 70-84 104-84 32 0 60 46 112 60"
        />
        <path className="draw-path" pathLength={1} d="M144 44l16-22 14 10" />
      </g>
    </svg>
  );
}

function ModelStack() {
  return (
    <svg
      viewBox="0 0 280 160"
      className="mt-32 h-auto w-full max-w-[280px] text-lilac-mist"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          className="draw-path"
          pathLength={1}
          x="36"
          y="20"
          width="208"
          height="32"
          rx="7"
        />
        <path className="draw-path" pathLength={1} d="M140 52v16" />
        <rect
          className="draw-path"
          pathLength={1}
          x="36"
          y="68"
          width="208"
          height="32"
          rx="7"
        />
        <path className="draw-path" pathLength={1} d="M140 100v16" />
        <rect
          className="draw-path"
          pathLength={1}
          x="36"
          y="116"
          width="208"
          height="32"
          rx="7"
        />
      </g>
    </svg>
  );
}

function TopicList({ topics }: { topics: TopicGroup[] }) {
  return (
    <>
      <ul className="mt-24 flex flex-col gap-12 md:hidden">
        {topics.map((topic) => (
          <li key={topic.title} className="flex gap-12 text-body text-cloud-white">
            <span
              className="mt-12 h-8 w-12 shrink-0 border-t border-clinical-cyan"
              aria-hidden="true"
            />
            <span>{topic.title}</span>
          </li>
        ))}
      </ul>
      <div className="mt-32 hidden columns-1 gap-32 md:block md:columns-2">
        {topics.map((topic) => (
          <div key={topic.title} className="mb-32 break-inside-avoid">
            <h4 className="text-body font-semibold text-cloud-white">
              {topic.title}
            </h4>
            {topic.lead ? (
              <p className="mt-8 text-body-sm text-pearl">{topic.lead}</p>
            ) : null}
            <ul className="mt-12 flex flex-col gap-8">
              {topic.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-12 text-body-sm text-pearl"
                >
                  <span
                    className="mt-12 h-8 w-12 shrink-0 border-t border-lilac-mist"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

function CurriculumCard({
  index,
  title,
  summary,
  diagram,
  align,
  children,
}: {
  index: string;
  title: string;
  summary: string;
  diagram: ReactNode;
  align: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const titleId = `${reactId}-title`;
  const panelId = `${reactId}-panel`;

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape" && open) {
      setOpen(false);
    }
  };

  return (
    <article
      aria-labelledby={titleId}
      onKeyDown={onKeyDown}
      className={`rounded-cards border bg-iris-shadow transition-[border-color,transform,max-width] duration-300 ${
        open
          ? "border-iris-veil lg:max-w-none"
          : `border-iris-border hover:-translate-y-px hover:border-iris-veil ${align}`
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`flex w-full cursor-pointer flex-col p-24 text-left ${focusRing} rounded-cards active:translate-y-0`}
      >
        <div className="flex items-start justify-between gap-16">
          <p className="text-caption text-clinical-cyan">{index}</p>
          <span
            className={`flex size-32 shrink-0 items-center justify-center rounded-icons text-lilac-mist transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 32 32" className="size-24" fill="none">
              <path
                d="M8 16h16M16 8v16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <span id={titleId} className="mt-12 text-heading-sm text-cloud-white">
          {title}
        </span>
        <p className="mt-16 max-w-[40rem] text-body text-pearl">{summary}</p>
        <p className="mt-16 text-caption text-mint-vital">
          <span className="md:hidden">{open ? "Close" : "See topics"}</span>
          <span className="hidden md:inline">
            {open ? "Close" : "Open the full curriculum"}
          </span>
        </p>
        <div
          className={`hidden md:grid transition-[grid-template-rows,opacity] duration-300 ${
            open ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
          }`}
        >
          <div className="min-h-0 overflow-hidden">{diagram}</div>
        </div>
      </button>

      <div
        id={panelId}
        className="fold"
        data-open={open ? "true" : "false"}
        {...(!open ? { inert: true, "aria-hidden": true } : {})}
      >
        <div className="fold-inner">
          <div className="fold-body border-t border-iris-border px-24 pb-24 pt-24">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Curriculum() {
  const { ref, inView } = useInViewOnce<HTMLElement>(0.2);

  useEffect(() => {
    if (inView) ref.current?.classList.add("is-in");
  }, [inView, ref]);

  return (
    <section
      ref={ref}
      id="curriculum"
      aria-labelledby="curriculum-heading"
      className="reveal px-24 py-section"
    >
      <div className="mx-auto max-w-page">
        <p className="text-caption text-pearl">Two cores</p>
        <h2
          id="curriculum-heading"
          className="mt-16 max-w-[20ch] text-heading text-cloud-white md:text-heading-lg"
        >
          What the bootcamp covers
        </h2>

        <div className="mt-48 flex flex-col gap-24">
          <CurriculumCard
            index="01"
            title="Microeconomics"
            summary="Students learned how individuals, businesses, and markets make decisions when resources are limited."
            diagram={<MarketDiagram />}
            align="lg:max-w-[70%]"
          >
            <p className="hidden max-w-[46rem] text-body text-pearl md:block">
              {microeconomicsIntro}
            </p>
            <p className="mt-32 text-caption text-clinical-cyan">
              Topics covered
            </p>
            <TopicList topics={microeconomicsTopics} />
          </CurriculumCard>

          <CurriculumCard
            index="02"
            title="Business models & entrepreneurship"
            summary="Students learned how to take an idea and develop it into a structured, financially viable business."
            diagram={<ModelStack />}
            align="lg:ml-auto lg:max-w-[62%]"
          >
            <p className="hidden max-w-[46rem] text-body text-pearl md:block">
              {businessIntro}
            </p>
            <p className="mt-32 text-caption text-clinical-cyan">
              Topics covered
            </p>
            <TopicList topics={businessTopics} />
            <div className="mt-16 border-l border-mint-vital pl-24">
              <h4 className="text-body font-semibold text-cloud-white">
                Applied projects
              </h4>
              <p className="mt-8 hidden max-w-[46rem] text-body-sm text-pearl md:block">
                {appliedProjectsLead}
              </p>
              <ul className="mt-16 hidden columns-1 gap-24 md:block md:columns-2">
                {appliedProjects.map((item) => (
                  <li
                    key={item}
                    className="mb-8 flex break-inside-avoid gap-12 text-body-sm text-pearl"
                  >
                    <span
                      className="mt-12 h-8 w-12 shrink-0 border-t border-lilac-mist"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-32 hidden max-w-[46rem] text-body text-cloud-white md:block">
              {businessClosing}
            </p>
          </CurriculumCard>
        </div>
      </div>
    </section>
  );
}
