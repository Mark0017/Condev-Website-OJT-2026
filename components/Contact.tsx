"use client";

import { useActionState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { submitContactLead } from "@/app/actions";
import { initialFormState } from "@/lib/formState";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-2 text-sm text-[#F7C5A3]">
      {message}
    </p>
  );
}

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    submitContactLead,
    initialFormState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const fieldErrors = state?.fieldErrors ?? {};
  const status = state?.status ?? "idle";
  const message = state?.message ?? "";

  useEffect(() => {
    if (status === "success") {
      formRef.current?.reset();
    }
  }, [status]);

  return (
    <section id="contact" className="bg-[#1B2A4A] py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.15em] text-[#C17A3A]">
            Contact
          </span>

          <h2 className="mb-6 font-serif text-4xl lg:text-5xl">
            Let&apos;s Start a Conversation
          </h2>

          <p className="mb-10 max-w-xl text-white/80">
            Interested in our developments or looking for your next home?
            Reach out and our team will gladly assist you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#C17A3A]/40 bg-white/5 text-[#C17A3A]">
                <Mail className="h-5 w-5" strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C17A3A]">
                  Email
                </p>
                <p className="mt-1 text-base text-white/85">info@condev.ph</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#C17A3A]/40 bg-white/5 text-[#C17A3A]">
                <MapPin className="h-5 w-5" strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C17A3A]">
                  Address
                </p>
                <p className="mt-1 max-w-md text-base leading-relaxed text-white/85">
                  6th Floor, Commercial Center, Global Enterprise Building,
                  Salcedo Village, 138 H.V. Dela Costa, Makati City, 1200 Metro
                  Manila
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#C17A3A]/40 bg-white/5 text-[#C17A3A]">
                <Phone className="h-5 w-5" strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C17A3A]">
                  Phone
                </p>
                <p className="mt-1 text-base text-white/85">+63 92 8817 4565</p>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          action={formAction}
          id="contact-form"
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div>
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              required
              aria-invalid={Boolean(fieldErrors.fullName)}
              aria-describedby={
                fieldErrors.fullName ? "contact-fullName-error" : undefined
              }
              className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-[#C17A3A]"
            />
            <FieldError
              id="contact-fullName-error"
              message={fieldErrors.fullName}
            />
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              required
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={
                fieldErrors.email ? "contact-email-error" : undefined
              }
              className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-[#C17A3A]"
            />
            <FieldError
              id="contact-email-error"
              message={fieldErrors.email}
            />
          </div>

          <div>
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
              required
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={
                fieldErrors.phone ? "contact-phone-error" : undefined
              }
              className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-[#C17A3A]"
            />
            <FieldError
              id="contact-phone-error"
              message={fieldErrors.phone}
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={
                fieldErrors.message ? "contact-message-error" : undefined
              }
              className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-[#C17A3A]"
            ></textarea>
            <FieldError
              id="contact-message-error"
              message={fieldErrors.message}
            />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={pending}
              className="rounded-md bg-[#C17A3A] px-8 py-3 font-semibold text-white transition hover:bg-[#D4845A] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {pending ? "Sending..." : "Send Inquiry"}
            </button>

            <p
              aria-live="polite"
              className={`text-sm ${status === "success" ? "text-[#9AE6B4]" : "text-white/75"}`}
            >
              {message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
