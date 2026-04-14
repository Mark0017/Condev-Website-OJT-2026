import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#07122b] text-white">
      {/* TOP */}
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 gap-12 px-5 pb-4 pt-16 lg:grid-cols-[1fr_1fr] lg:px-16 xl:px-20">
        {/* LEFT */}
        <div className="lg:pl-2">
          {/* LOGO */}
          <div className="w-[165px]">
            <Image
              src="/images/logo.webp"
              alt="Convergence Realty and Development Corp."
              width={220}
              height={52}
              className="h-auto w-full object-contain brightness-0 invert"
            />
          </div>

          {/* TAGLINE */}
          <p className="mt-6 max-w-[430px] text-[0.95rem] leading-[1.75] text-white/52">
            25 years of building communities people are proud to call home.
          </p>

          {/* SOCIALS */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://www.facebook.com/BelAirVillasLipa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-white/8 text-white/65 transition hover:bg-white/12 hover:text-white"
            >
              <FaFacebookF className="h-[16px] w-[16px]" />
            </a>

            <a
              href="https://www.linkedin.com/company/condev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-white/8 text-white/65 transition hover:bg-white/12 hover:text-white"
            >
              <FaLinkedinIn className="h-[16px] w-[16px]" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="max-w-[650px] lg:ml-auto lg:w-full lg:pr-2">
          <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/28">
            Get in Touch
          </span>

          <div className="space-y-5">
            <div className="flex items-start gap-4 text-white/72">
              <MapPin
                className="mt-1 h-[17px] w-[17px] flex-shrink-0 text-[#C17A3A]"
                strokeWidth={1.9}
              />
              <p className="max-w-[350px] text-[0.95rem] leading-[1.65]">
                3/F Global Enterprise Bldg,
                <br />
                138 HV Dela Costa St.
                <br />
                Makati City, Philippines
              </p>
            </div>

            <div className="flex items-center gap-4 text-white/72">
              <Mail
                className="h-[17px] w-[17px] flex-shrink-0 text-[#C17A3A]"
                strokeWidth={1.9}
              />
              <p className="text-[0.95rem]">info@condev.ph</p>
            </div>

            <div className="flex items-center gap-4 text-white/72">
              <Phone
                className="h-[17px] w-[17px] flex-shrink-0 text-[#C17A3A]"
                strokeWidth={1.9}
              />
              <p className="text-[0.95rem]">+63 2 8817 4565</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact-form"
            className="mt-7 inline-flex h-[44px] w-full items-center justify-center rounded-[12px] bg-[#C57F39] px-8 text-[0.94rem] font-semibold text-white transition hover:bg-[#b87434]"
          >
            Send an Inquiry
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 px-5 py-4 text-[13px] text-white/28 lg:flex-row lg:items-center lg:justify-between lg:px-16 xl:px-20">
          <p className="lg:pl-2">
            © 2026 Convergence Realty &amp; Development Corp. All rights reserved.
          </p>

          <div className="flex items-center gap-4 lg:pr-2">
            <a href="#" className="transition hover:text-white/50">
              Privacy Policy
            </a>
            <span className="text-white/15">·</span>
            <a href="#" className="transition hover:text-white/50">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
