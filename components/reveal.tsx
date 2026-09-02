"use client";

import { useEffect } from "react";
import { useInViewOnce } from "@/components/use-in-view-once";

export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  useEffect(() => {
    if (inView) ref.current?.classList.add("is-in");
  }, [inView, ref]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
