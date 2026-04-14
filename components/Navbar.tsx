"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          {/* LOGO */}
          <a href="#" className="flex items-center" onClick={closeMenu}>
            <div className="flex w-[190px] flex-col items-center justify-center text-center leading-[0.95] sm:w-[240px]">
              <span
                className={`w-full text-center text-[17px] font-black uppercase tracking-[0.015em] transition-all duration-300 sm:text-[18.5px] ${
                  scrolled
                    ? "text-[#223468]"
                    : "text-white/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
                }`}
              >
                CONVERGENCE
              </span>

              <span
                className={`mt-0.5 w-full text-center text-[6.8px] font-semibold uppercase tracking-[0.11em] transition-all duration-300 sm:text-[7.7px] ${
                  scrolled
                    ? "text-[#223468]/95"
                    : "text-white/50 drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)]"
                }`}
              >
                REALTY AND DEVELOPMENT CORP.
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-7 md:flex lg:gap-8">
            <a
              href="#about"
              className={`group relative text-[15px] font-medium transition-colors duration-300 lg:text-[16px] ${
                scrolled
                  ? "text-black/80 hover:text-[#1F2D5A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              About
              <span
                className={`absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-[#1F2D5A]" : "bg-white"
                }`}
              ></span>
            </a>

            <a
              href="#projects"
              className={`group relative text-[15px] font-medium transition-colors duration-300 lg:text-[16px] ${
                scrolled
                  ? "text-black/80 hover:text-[#1F2D5A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Projects
              <span
                className={`absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-[#1F2D5A]" : "bg-white"
                }`}
              ></span>
            </a>

            <a
              href="#careers"
              className={`group relative text-[15px] font-medium transition-colors duration-300 lg:text-[16px] ${
                scrolled
                  ? "text-black/80 hover:text-[#1F2D5A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Careers
              <span
                className={`absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-[#1F2D5A]" : "bg-white"
                }`}
              ></span>
            </a>

            <a
              href="#contact"
              className={`group relative text-[15px] font-medium transition-colors duration-300 lg:text-[16px] ${
                scrolled
                  ? "text-black/80 hover:text-[#1F2D5A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact
              <span
                className={`absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-[#1F2D5A]" : "bg-white"
                }`}
              ></span>
            </a>

            <a
              href="#contact-form"
              className={`rounded-xl px-5 py-2 text-[14px] font-semibold transition-all duration-300 lg:px-6 lg:text-[15px] ${
                scrolled
                  ? "bg-[#1F2D5A] text-white hover:bg-[#162046]"
                  : "border border-white/40 bg-transparent text-white hover:bg-white hover:text-[#1F2D5A]"
              }`}
            >
              Inquire Now
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-md p-2 transition-colors duration-300 md:hidden ${
              scrolled
                ? "text-[#1F2D5A] hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className={`mb-3 rounded-2xl p-4 shadow-lg backdrop-blur-md md:hidden ${
              scrolled
                ? "border border-black/10 bg-white"
                : "border border-white/10 bg-[#1F2D5A]/95"
            }`}
          >
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                onClick={closeMenu}
                className={`rounded-md px-4 py-3 text-sm font-medium transition ${
                  scrolled
                    ? "text-black/80 hover:bg-black/5 hover:text-[#1F2D5A]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                About
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className={`rounded-md px-4 py-3 text-sm font-medium transition ${
                  scrolled
                    ? "text-black/80 hover:bg-black/5 hover:text-[#1F2D5A]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                Projects
              </a>

              <a
                href="#careers"
                onClick={closeMenu}
                className={`rounded-md px-4 py-3 text-sm font-medium transition ${
                  scrolled
                    ? "text-black/80 hover:bg-black/5 hover:text-[#1F2D5A]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                Careers
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className={`rounded-md px-4 py-3 text-sm font-medium transition ${
                  scrolled
                    ? "text-black/80 hover:bg-black/5 hover:text-[#1F2D5A]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                Contact
              </a>

              <a
                href="#contact-form"
                onClick={closeMenu}
                className={`mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                  scrolled
                    ? "bg-[#1F2D5A] text-white hover:bg-[#162046]"
                    : "bg-white text-[#1F2D5A] hover:bg-white/90"
                }`}
              >
                Inquire Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
