"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

export default function RolesSection() {
  const [isOpen, setIsOpen] = useState(false);

  const points = [
    "Hands-on experience across every stage of development, from acquisition to handover",
    "A collaborative team where your work has visible, tangible impact",
    "Projects you can point to — and be proud of — for years to come",
  ];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <section id="careers" className="bg-[#1F2D5A] py-24 lg:py-22">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-4">
          {/* LEFT */}
          <div className="max-w-2xl">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.22em] text-[#C17A3A]">
              Join the Team
            </span>

            <h2 className="font-serif text-[2.75rem] leading-[0.98] text-white sm:text-[3.35rem] lg:text-[3rem]">
              Build Your Career Where
              <br />
              Ambition <span className="italic text-white/90">Meets Craft</span>
            </h2>

            <p className="mt-8 max-w-xl text-[1.05rem] leading-[1.75] text-white/75 sm:text-[1.12rem]">
              We&apos;re a growing team that takes genuine pride in what we build.
              At Condev, you&apos;ll work across the full lifecycle of a
              development — gaining real exposure to the industry at a company
              that&apos;s been doing this for over two decades and isn&apos;t
              slowing down.
            </p>

            <div className="mt-10 space-y-5">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[#C17A3A]"
                    strokeWidth={1.9}
                  />
                  <p className="max-w-xl text-[1.02rem] leading-[1.7] text-white/92 sm:text-[1.08rem]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-12 inline-flex items-center gap-2 rounded-md bg-[#D28A3D] px-8 py-4 text-[1.05rem] font-semibold text-white transition hover:bg-[#bf7f36]"
            >
              View Open Roles
              <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end lg:pt-12 lg:pl-5">
            <div className="h-[790px] w-full max-w-[620px] overflow-hidden rounded-[20px] lg:h-[450px]">
              <img
                src="/images/careers-team.webp"
                alt="Condev Team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/55 px-4 py-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[24px] bg-[#F8F7F5] p-7 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#1F2D5A] transition hover:bg-black/5"
              aria-label="Close popup"
            >
              <X className="h-6 w-6" />
            </button>

            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-[#C17A3A]">
              Open Roles
            </span>

            <h3 className="font-serif text-[2.2rem] leading-tight text-[#1B2A4A] sm:text-[2.6rem]">
              Join the Condev Team
            </h3>

            <p className="mt-4 max-w-2xl text-[1rem] leading-[1.75] text-[#6B7280]">
              We&apos;re currently welcoming applications from passionate people
              who want to help build communities that last.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                >
                  I&apos;m interested in <span className="text-[#C17A3A]">*</span>
                </label>
                <select
                  id="interest"
                  defaultValue=""
                  className="w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  <option value="Project Coordinator">Project Coordinator</option>
                  <option value="Marketing Associate">Marketing Associate</option>
                  <option value="Site Engineer">Site Engineer</option>
                  <option value="Legal">Legal</option>
                  <option value="Accounting">Accounting</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us more about your interest or application"
                  className="w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                ></textarea>
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-[#D28A3D] px-7 py-3 font-semibold text-white transition hover:bg-[#bf7f36]"
                >
                  Apply / Inquire
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center rounded-md border border-[#D7D2CB] px-7 py-3 font-semibold text-[#1B2A4A] transition hover:bg-black/[0.03]"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}