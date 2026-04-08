import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1B2A4A] py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT SIDE */}
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

          {/* CONTACT DETAILS */}
          <div className="space-y-6">
            {/* EMAIL */}
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

            {/* ADDRESS */}
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

            {/* PHONE */}
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

        {/* RIGHT SIDE FORM */}
        <form 
          id="contact-form"
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
          ></textarea>

          <button
            type="submit"
            className="rounded-md bg-[#C17A3A] px-8 py-3 font-semibold text-white transition hover:bg-[#D4845A]"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}