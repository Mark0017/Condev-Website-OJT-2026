"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quoteTitle: "“Bakit ako invest ng invest sa Bel-Air?”",
    message:
      "Ang value ng property na talagang tumataas. 10 years ago, kung ibabalik ko lang, I think nasa 3.2M lang ang model ng house na nabili ko. Pero ngayon, nag 2.5–3x na siya!",
    name: "Ralph D.",
    role: "Repeat Buyer, Bel-Air Residences",
  },
  {
    quoteTitle: "“Sulit talaga ang investment namin.”",
    message:
      "Hindi lang maganda ang location, ramdam din namin na maayos ang community at tumataas ang value ng property habang tumatagal. Isa ito sa best decisions namin bilang family.",
    name: "Maria L.",
    role: "Homeowner, Bel-Air Villas",
  },
  {
    quoteTitle: "“Guided kami from start to finish.”",
    message:
      "From inquiry hanggang turnover, hindi kami pinabayaan. Madaling kausap ang team at ramdam namin na inaalagaan nila ang buyers sa bawat step ng process.",
    name: "Joshua P.",
    role: "First-Time Buyer, Condev Community",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F7F5F1] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* HEADING */}
        <div className="mb-10 text-center">
          <h2 className="text-[0.92rem] font-bold uppercase tracking-[0.18em] text-[#C7A530] sm:text-[1.05rem]">
            “ TESTIMONIALS ”
          </h2>
        </div>

        {/* SLIDER CARD */}
        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-[1.75rem] bg-white px-6 py-10 text-center shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="mb-4 flex justify-center">
              <Quote className="h-8 w-8 text-[#C7A530]" strokeWidth={2} />
            </div>

            <h3 className="mb-4 font-serif text-[1.7rem] font-semibold text-[#1F2D5A] sm:text-[1.95rem]">
              Voices From Our Community
            </h3>

            <div className="mb-5 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-[#E0B91F] text-[#E0B91F]"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-[0.98rem] font-bold text-[#1F2D5A] sm:text-[1.12rem]">
                {testimonials[current].quoteTitle}
              </p>

              <p className="mx-auto mb-7 max-w-3xl text-[0.96rem] font-semibold leading-[1.8] text-[#23355F] sm:text-[1.06rem]">
                {testimonials[current].message}
              </p>

              <p className="mb-2 text-[0.96rem] font-bold text-[#23355F]">
                {testimonials[current].name}
              </p>

              <p className="text-[0.95rem] font-semibold text-[#C7A530]">
                {testimonials[current].role}
              </p>
            </div>

            {/* DOTS */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    current === index ? "bg-black" : "bg-[#D8D8D8]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* PREV BUTTON */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1F2D5A] shadow-lg transition hover:scale-105 hover:bg-[#F8F8F8] sm:flex lg:left-0 lg:h-12 lg:w-12 lg:-translate-x-1/2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1F2D5A] shadow-lg transition hover:scale-105 hover:bg-[#F8F8F8] sm:flex lg:right-0 lg:h-12 lg:w-12 lg:translate-x-1/2"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
