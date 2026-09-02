"use client";

import { type FormEvent, useState } from "react";
import { lightCtaClass } from "@/components/cta";
import { Reveal } from "@/components/reveal";

export function SchoolCta() {
  const [opened, setOpened] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const school = String(data.get("school") ?? "").trim();
    const role = String(data.get("role") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [
      `School: ${school}`,
      `Role: ${role}`,
      `From: ${email}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:?subject=${encodeURIComponent(`SavingSooner for ${school}`)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
    window.location.href = href;
  };

  return (
    <section
      id="for-schools"
      aria-labelledby="schools-heading"
      className="bg-pearl px-24 py-section text-deep-iris"
    >
      <Reveal>
        <div className="mx-auto max-w-[40rem] text-center">
          <h2
            id="schools-heading"
            className="text-heading text-deep-iris md:text-heading-xl"
          >
            Bring SavingSooner to your school
          </h2>
          <p className="mt-24 text-body text-deep-iris">
            For administrators deciding whether this bootcamp belongs in their
            building — and for the students and parents asking what it actually
            teaches.
          </p>

          <form
            className="mt-48 text-left"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-24">
              <label className="flex flex-col gap-8">
                <span className="text-body-sm text-deep-iris">School</span>
                <input
                  name="school"
                  type="text"
                  required
                  autoComplete="organization"
                  className="rounded-inputs border border-ash bg-cloud-white px-16 py-16 text-body text-deep-iris transition-[border-color] duration-150 hover:border-iris-pulse focus-visible:border-iris-pulse focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mint-vital"
                />
              </label>
              <label className="flex flex-col gap-8">
                <span className="text-body-sm text-deep-iris">Your role</span>
                <input
                  name="role"
                  type="text"
                  required
                  autoComplete="organization-title"
                  className="rounded-inputs border border-ash bg-cloud-white px-16 py-16 text-body text-deep-iris transition-[border-color] duration-150 hover:border-iris-pulse focus-visible:border-iris-pulse focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mint-vital"
                />
              </label>
              <label className="flex flex-col gap-8">
                <span className="text-body-sm text-deep-iris">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-inputs border border-ash bg-cloud-white px-16 py-16 text-body text-deep-iris transition-[border-color] duration-150 hover:border-iris-pulse focus-visible:border-iris-pulse focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mint-vital"
                />
              </label>
              <label className="flex flex-col gap-8">
                <span className="text-body-sm text-deep-iris">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  className="resize-y rounded-inputs border border-ash bg-cloud-white px-16 py-16 text-body text-deep-iris transition-[border-color] duration-150 hover:border-iris-pulse focus-visible:border-iris-pulse focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mint-vital"
                />
              </label>
            </div>

            <div className="mt-32 flex flex-col items-center gap-16">
              <button type="submit" className={lightCtaClass}>
                Bring SavingSooner to your school
              </button>
              <p className="text-caption text-deep-iris">
                {opened
                  ? "A draft should be open in your email app. Add your SavingSooner contact in To."
                  : "Opens a message draft in your email app."}
              </p>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
