"use client";

import { type FormEvent, useState } from "react";
import { lightCtaClass } from "@/components/cta";
import { Reveal } from "@/components/reveal";

const fieldClass =
  "rounded-inputs border border-ash bg-cloud-white px-16 py-16 text-body text-deep-iris transition-[border-color] duration-150 hover:border-iris-pulse focus-visible:border-iris-pulse focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mint-vital";

const gradeOptions = [
  "9th grade",
  "10th grade",
  "11th grade",
  "12th grade",
] as const;

export function SchoolCta() {
  const [opened, setOpened] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const school = String(data.get("school") ?? "").trim();
    const grade = String(data.get("grade") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [
      `School: ${school}`,
      `Rising grade: ${grade}`,
      `From: ${email}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:?subject=${encodeURIComponent(`SavingSooner sign-up — ${school}`)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
    window.location.href = href;
  };

  return (
    <section
      id="signup"
      aria-labelledby="signup-heading"
      className="bg-pearl px-24 py-section text-deep-iris"
    >
      <Reveal>
        <div className="mx-auto max-w-[40rem] text-center">
          <h2
            id="signup-heading"
            className="text-heading text-deep-iris md:text-heading-xl"
          >
            Join the summer bootcamp
          </h2>
          <p className="mt-24 text-body text-deep-iris">
            For students and parents looking to sign up — or anyone with
            questions about what we teach.
          </p>

          <form
            className="mt-48 text-left"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-24">
              <label className="flex flex-col gap-8">
                <span className="text-body-sm text-deep-iris">Your school</span>
                <input
                  name="school"
                  type="text"
                  required
                  autoComplete="organization"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-8">
                <span className="text-body-sm text-deep-iris">Rising grade</span>
                <span className="text-caption text-fog">
                  The grade you&apos;ll start this fall
                </span>
                <select
                  name="grade"
                  required
                  defaultValue=""
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select grade
                  </option>
                  {gradeOptions.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-8">
                <span className="text-body-sm text-deep-iris">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-8">
                <span className="text-body-sm text-deep-iris">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  className={`${fieldClass} resize-y`}
                />
              </label>
            </div>

            <div className="mt-32 flex flex-col items-center gap-16">
              <button type="submit" className={lightCtaClass}>
                Get in touch
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
