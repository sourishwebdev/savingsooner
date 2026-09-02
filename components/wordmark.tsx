import Link from "next/link";
import { focusRing } from "@/components/cta";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-8 text-cloud-white transition-[color,transform] duration-150 hover:text-clinical-cyan hover:-translate-y-px active:text-iris-pulse active:translate-y-0 ${focusRing}`}
    >
      <span className="flex size-32 shrink-0 items-center justify-center rounded-icons text-lilac-mist">
        <svg
          viewBox="0 0 32 32"
          className="size-32"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="16"
            cy="16"
            r="11"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 19.5c2.4-1.2 4.2-4.8 7-4.8s4.2 3.2 7 4.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 7.5v3.5M16 21v3.5M7.5 16h3.5M21 16h3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className={compact ? "text-body font-semibold" : "text-heading-sm"}>
        SavingSooner
      </span>
    </Link>
  );
}
