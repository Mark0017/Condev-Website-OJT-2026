export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(27,42,74,0.82) 0%, rgba(27,42,74,0.55) 60%, rgba(27,42,74,0.30) 100%), linear-gradient(to bottom, rgba(27,42,74,0.60) 0%, rgba(27,42,74,0.25) 40%, rgba(27,42,74,0.55) 100%)",
        }}
      />

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(193,122,58,0.15)_0%,transparent_70%)] opacity-30" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-24 text-center lg:px-8 sm:pb-0 sm:pt-0">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <span className="hidden h-px w-8 bg-white opacity-40 sm:block"></span>
            <span className="rounded-full bg-[#C17A3A] px-4 py-1.5 text-[0.95rem] text-white sm:text-27 uppercase font-semibold">
              Convergence Realty &amp; Development Corp.
            </span>
            <span className="hidden h-px w-8 bg-white opacity-40 sm:block"></span>
          </div>

          <h1 className="font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
            Homes Built to Last.
            <br />
            <span className="italic text-white/90">
              Communities Built to Thrive.
            </span>
          </h1>

          <p className="max-w-2xl text-base font-medium leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Where life, family, and ambition converge. We are Condev — a
            Philippine real estate developer building communities that grow
            with the families who call them home.
          </p>

          <div className="mt-1 flex w-full flex-col items-center gap-3 sm:mt-2 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="group w-full rounded-md bg-[#C17A3A] px-8 py-3.5 text-center font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#D4845A] hover:shadow-lg hover:shadow-amber-900/20 active:scale-[0.98] sm:w-auto"
            >
              View Our Projects
              <span className="ml-2 inline-block transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="w-full rounded-md border border-white/30 bg-transparent px-8 py-3.5 text-center font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-white hover:text-[#1B2A4A] active:scale-[0.98] sm:w-auto"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <button className="group absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-widest text-white/40 transition-colors duration-200 group-hover:text-white/60">
          Scroll
        </span>
        <div className="animate-bounce text-white/40 transition-colors duration-200 group-hover:text-white/60">
          ↓
        </div>
      </button>
    </section>
  );
}