"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

import { submitRoleApplication } from "@/app/actions";
import { initialFormState } from "@/lib/formState";

const roleOptions = [
  "Project Coordinator",
  "Marketing Associate",
  "Site Engineer",
  "Legal",
  "Accounting",
];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-2 text-sm text-[#B45309]">
      {message}
    </p>
  );
}

function RoleApplicationModal({ onClose }: { onClose: () => void }) {
  const [selectedRole, setSelectedRole] = useState("");
  const [state, formAction, pending] = useActionState(
    submitRoleApplication,
    initialFormState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const fieldErrors = state?.fieldErrors ?? {};
  const status = state?.status ?? "idle";
  const message = state?.message ?? "";

  useEffect(() => {
    if (status !== "success") {
      return;
    }

    formRef.current?.reset();

    const timeoutId = window.setTimeout(() => {
      onClose();
    }, 1400);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [onClose, status]);

  return (
    <div
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/55 px-3 py-3 sm:px-4 sm:py-6"
      onClick={onClose}
    >
      <div
        className="relative mx-auto flex min-h-full w-full items-start justify-center sm:items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative w-full max-w-2xl overflow-hidden rounded-[24px] bg-[#F8F7F5] shadow-2xl">
          <div className="max-h-[calc(100dvh-1.5rem)] overflow-y-auto px-5 py-5 sm:max-h-[calc(100dvh-3rem)] sm:px-8 sm:py-8">
            <div className="mb-4 flex items-start justify-between border-b border-[#E7DED3] pb-4 sm:mb-6 sm:pb-5">
              <div className="pr-4">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-[#C17A3A]">
                  Open Roles
                </span>

                <h3 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-[#1B2A4A]">
                  Join the Condev Team
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-[#1F2D5A] transition hover:bg-black/5"
                aria-label="Close popup"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="max-w-2xl text-[0.98rem] leading-[1.75] text-[#6B7280] sm:text-[1rem]">
              Choose the role you&apos;re interested in, send your details, and
              your application will be added directly to your Google Sheets tracker.
            </p>

            <form ref={formRef} action={formAction} className="mt-5 space-y-4 sm:mt-6">
              <div>
                <label
                  htmlFor="role-fullName"
                  className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                >
                  Full Name
                </label>
                <input
                  id="role-fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(fieldErrors.fullName)}
                  aria-describedby={
                    fieldErrors.fullName ? "role-fullName-error" : undefined
                  }
                  className="min-h-12 w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                />
                <FieldError
                  id="role-fullName-error"
                  message={fieldErrors.fullName}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="role-email"
                    className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                  >
                    Email
                  </label>
                  <input
                    id="role-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={
                      fieldErrors.email ? "role-email-error" : undefined
                    }
                    className="min-h-12 w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                  />
                  <FieldError
                    id="role-email-error"
                    message={fieldErrors.email}
                  />
                </div>

                <div>
                  <label
                    htmlFor="role-phone"
                    className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="role-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={
                      fieldErrors.phone ? "role-phone-error" : undefined
                    }
                    className="min-h-12 w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                  />
                  <FieldError
                    id="role-phone-error"
                    message={fieldErrors.phone}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="role-interest"
                  className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                >
                  I&apos;m interested in
                </label>
                <select
                  id="role-interest"
                  name="role"
                  value={selectedRole}
                  onChange={(event) => setSelectedRole(event.target.value)}
                  required
                  aria-invalid={Boolean(fieldErrors.role)}
                  aria-describedby={
                    fieldErrors.role ? "role-interest-error" : undefined
                  }
                  className="min-h-12 w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                >
                  <option value="">Select a role</option>
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <FieldError
                  id="role-interest-error"
                  message={fieldErrors.role}
                />
              </div>

              <div>
                <label
                  htmlFor="role-portfolioUrl"
                  className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                >
                  Resume or Portfolio Link
                </label>
                <input
                  id="role-portfolioUrl"
                  name="portfolioUrl"
                  type="url"
                  placeholder="Optional Google Drive, LinkedIn, or portfolio URL"
                  className="min-h-12 w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                />
              </div>

              <div>
                <label
                  htmlFor="role-message"
                  className="mb-2 block text-sm font-semibold text-[#1B2A4A]"
                >
                  Message
                </label>
                <textarea
                  id="role-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us more about your interest or application"
                  required
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={
                    fieldErrors.message ? "role-message-error" : undefined
                  }
                  className="w-full rounded-xl border border-[#DDD6CD] bg-white px-4 py-3 text-[#1B2A4A] outline-none transition focus:border-[#C17A3A]"
                ></textarea>
                <FieldError
                  id="role-message-error"
                  message={fieldErrors.message}
                />
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#D28A3D] px-7 py-3 font-semibold text-white transition hover:bg-[#bf7f36] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {pending ? "Sending Application..." : "Apply / Inquire"}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#D7D2CB] px-7 py-3 font-semibold text-[#1B2A4A] transition hover:bg-black/[0.03]"
                >
                  Close
                </button>
              </div>

              <p
                aria-live="polite"
                className={`pb-1 text-sm ${status === "success" ? "text-[#15803D]" : "text-[#6B7280]"}`}
              >
                {message}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RolesSection() {
  const [isOpen, setIsOpen] = useState(false);

  const points = [
    "Hands-on experience across every stage of development, from acquisition to handover",
    "A collaborative team where your work has visible, tangible impact",
    "Projects you can point to and be proud of for years to come",
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
      <section id="careers" className="bg-[#1F2D5A] py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-4">
          <div className="max-w-2xl">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.22em] text-[#C17A3A]">
              Join the Team
            </span>

            <h2 className="font-serif text-[2.2rem] leading-[1.02] text-white sm:text-[2.7rem] lg:text-[2.85rem]">
              Build Your Career Where
              <br />
              Ambition <span className="italic text-white/90">Meets Craft</span>
            </h2>

            <p className="mt-6 max-w-xl text-[0.98rem] leading-[1.75] text-white/75 sm:text-[1.02rem]">
              We&apos;re a growing team that takes genuine pride in what we build.
              At Condev, you&apos;ll work across the full lifecycle of a
              development, gaining real exposure to the industry at a company
              that&apos;s been doing this for over two decades and isn&apos;t
              slowing down.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[#C17A3A]"
                    strokeWidth={1.9}
                  />
                  <p className="max-w-xl text-[0.96rem] leading-[1.7] text-white/92 sm:text-[1rem]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#D28A3D] px-7 py-3.5 text-[0.98rem] font-semibold text-white transition hover:bg-[#bf7f36]"
            >
              View Open Roles
              <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </div>

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

      {isOpen ? <RoleApplicationModal onClose={() => setIsOpen(false)} /> : null}
    </>
  );
}
