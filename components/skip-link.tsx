"use client";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="skip-link"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        const main = document.getElementById("main");
        if (!main) return;
        main.focus({ preventScroll: true });
        window.scrollTo({
          top: main.getBoundingClientRect().top + window.scrollY,
          behavior: "auto",
        });
      }}
    >
      Skip to content
    </a>
  );
}
