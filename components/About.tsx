"use client";

import { useEffect, useState } from "react";

export default function About() {
  const images = [
    "/images/about-1.webp",
    "/images/about-2.webp",
    "/images/about-3.webp",
    "/images/about-4.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // auto slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* STATS */}
      <section
        id="stats"
        className="border-y border-[#E8E4DF] bg-[#F2EFE9] py-14 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            <div className="border-b border-[#E8E4DF] px-4 py-7 text-center sm:border-b-0 sm:border-r sm:py-2">
              <div className="mb-2 font-serif text-3xl text-[#C17A3A] lg:text-4xl">
                25+
              </div>
              <div className="text-[0.8rem] font-medium uppercase tracking-wide text-[#6B7280]">
                Years in Real Estate
              </div>
            </div>

            <div className="border-b border-[#E8E4DF] px-4 py-7 text-center sm:border-b-0 sm:border-r sm:py-2">
              <div className="mb-2 font-serif text-3xl text-[#C17A3A] lg:text-4xl">
                1500+
              </div>
              <div className="text-[0.8rem] font-medium uppercase tracking-wide text-[#6B7280]">
                Units Delivered
              </div>
            </div>

            <div className="px-4 py-7 text-center sm:py-2">
              <div className="mb-2 font-serif text-3xl text-[#C17A3A] lg:text-4xl">
                4
              </div>
              <div className="text-[0.8rem] font-medium uppercase tracking-wide text-[#6B7280]">
                Total Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#FAF8F5] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.15em] text-[#C17A3A]">
              Who We Are
            </span>

            <h2 className="mb-6 font-serif text-3xl leading-tight text-[#1B2A4A] sm:text-4xl lg:text-[2.9rem]">
              A Track Record Worth Trusting.
            </h2>

            <div className="space-y-4">
              <p className="text-[0.98rem] leading-relaxed text-[#4A4A4A] lg:text-[1.04rem]">
                Condev was founded on the belief that buyers deserve more than
                what they pay for — in the quality of their home, the character
                of their community, and the long-term return on their
                investment. That conviction shapes every decision we make, from
                the cities we develop in to the homes we deliver.
              </p>

              <p className="text-[0.98rem] leading-relaxed text-[#4A4A4A] lg:text-[1.04rem]">
                Over 25 years and 1,500+ homes later, we&apos;ve built a track
                record of developments that hold up — and appreciate. The
                confidence of our returning buyers is, for us, the most
                meaningful measure of whether we&apos;ve done that well.
              </p>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#1B2A4A] shadow-xl">
              {/* Images */}
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`About Condev ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-full"
                  }`}
                />
              ))}

              {/* Previous button */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white transition-all duration-150 hover:scale-110"
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white transition-all duration-150 hover:scale-110"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 right-5 z-10 flex items-center gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "h-[6px] w-5 rounded-[3px] bg-[#C17A3A]"
                        : "h-[6px] w-[6px] rounded-[3px] bg-white/35"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
