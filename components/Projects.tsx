import {
  House,
  HeartHandshake,
  Users,
  MapPin,
  TrendingUp,
} from "lucide-react";

export default function Projects() {
  const featuredProjects = [
    {
      title: "Bel-Air Villas",
      location: "Lipa City, Batangas",
      status: "Now Selling",
      statusColor: "bg-[#2D7D46]",
      description:
        "Building on the success of Bel-Air Residences, Bel-Air Villas is Condev's premium offering in Lipa — a naturally cool enclave of lush green spaces with mountain views, enhanced amenities, and a new lifestyle district taking shape within reach.",
      image: "/images/bel-air-villas.webp",
      link: "https://www.belairvillaslipa.com/",
    },
    {
      title: "Bel-Air Residences",
      location: "Lipa City, Batangas",
      status: "Few Units Left",
      statusColor: "bg-[#D4700A]",
      description:
        "Condev's flagship established community at the heart of Lipa City — over 750 homes delivered, with wide tree-lined streets, resort-style amenities, and impressive views of Mt. Malarayat. A proven address with a strong track record of appreciation.",
      image: "/images/bel-air-residences.webp",
      link: "#",
    },
  ];

  const completedProjects = [
    {
      title: "Acropolis Heights",
      location: "Lipa City, Batangas",
      status: "Sold Out",
      statusColor: "bg-[#1A5276]",
      description:
        "One of Condev's earlier residential communities in Lipa City — completed and fully delivered, and the development that first established our roots in the region.",
      image: "/images/acropolis-heights.webp",
    },
    {
      title: "Bougainvilla Homes",
      location: "Lipa City, Batangas",
      status: "Sold Out",
      statusColor: "bg-[#1A5276]",
      description:
        "Condev's residential community in Calamba, Laguna — completed in full and home to hundreds of families who invested early in a fast-growing city.",
      image: "/images/bougainvilla-homes.webp",
    },
  ];

  return (
    <>
      <section id="projects" className="bg-[#F2EFE9] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.15em] text-[#C17A3A]">
              Our Work
            </span>
            <h2 className="font-serif text-3xl leading-tight text-[#1B2A4A] sm:text-4xl lg:text-[2.9rem]">
              Featured Developments
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-[#E8E4DF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-5 lg:p-6">
                  <div className="mb-3 flex items-center gap-1.5 text-[#C17A3A]">
                    <MapPin className="h-4 w-4" strokeWidth={1.8} />
                    <span className="text-xs font-medium tracking-wide">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="mb-3 font-serif text-[1.6rem] text-[#1B2A4A] lg:text-[1.9rem]">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-[0.92rem] leading-relaxed text-[#6B7280]">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-md border-2 border-[#1B2A4A] px-5 py-2.5 text-sm font-semibold text-[#1B2A4A] transition-all duration-200 hover:bg-[#1B2A4A] hover:text-white"
                  >
                    View Project Website
                    <span className="transition-transform duration-150 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                Completed Developments
              </span>
              <div className="h-px flex-1 bg-[#E8E4DF]"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {completedProjects.map((project, index) => (
                <div
                  key={index}
                  className="group flex gap-5 rounded-xl border border-[#E8E4DF] bg-white p-5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex items-start justify-between gap-3">
                      <h3 className="font-serif text-lg leading-snug text-[#1B2A4A]">
                        {project.title}
                      </h3>
                      <span
                        className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${project.statusColor}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="mb-2 flex items-center gap-1 text-[#C17A3A]">
                      <MapPin className="h-4 w-4" strokeWidth={1.8} />
                      <span className="text-xs font-medium">
                        {project.location}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed text-[#9CA3AF]">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F1] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center lg:mb-16">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.22em] text-[#C17A3A]">
              Why Condev
            </span>

            <h2 className="font-serif text-3xl leading-tight text-[#1B2A4A] sm:text-4xl lg:text-[2.9rem]">
              More Than What You Paid For.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-[#6B7280] lg:text-[1.12rem]">
              Five things every buyer stands to gain from a Condev community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative min-h-[340px] rounded-[24px] border border-[#E6DED4] bg-white/70 p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] sm:p-8">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3ECE5] text-[#C17A3A]">
                <House className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <span className="absolute right-7 top-6 font-serif text-[4.1rem] leading-none text-[#F3F1ED] sm:right-8 sm:top-7 sm:text-[4.6rem]">
                1
              </span>

              <h3 className="mb-5 font-serif text-[1.65rem] leading-tight text-[#1B2A4A] sm:text-[1.8rem]">
                Built to Last
              </h3>

              <p className="max-w-[570px] text-[0.97rem] leading-[1.7] text-[#667085] sm:text-[1rem]">
                Every Condev home is built with care — from the structural work
                to the materials and finishing, we hold our work to a standard
                meant to last beyond turnover. The same attention carries into
                the amenities, open spaces, and shared areas that make the
                community worth living in.
              </p>
            </div>

            <div className="relative min-h-[340px] rounded-[24px] border border-[#E6DED4] bg-white/70 p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] sm:p-8">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3ECE5] text-[#C17A3A]">
                <HeartHandshake className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <span className="absolute right-7 top-6 font-serif text-[4.1rem] leading-none text-[#F3F1ED] sm:right-8 sm:top-7 sm:text-[4.6rem]">
                2
              </span>

              <h3 className="mb-5 font-serif text-[1.65rem] leading-tight text-[#1B2A4A] sm:text-[1.8rem]">
                With You Every Step
              </h3>

              <p className="max-w-[570px] text-[0.97rem] leading-[1.7] text-[#667085] sm:text-[1rem]">
                Buying a home involves a great deal of moving parts. At Condev,
                we make sure no one is left to figure it out alone — from first
                inquiry through financing, construction, and turnover.
              </p>
            </div>

            <div className="relative min-h-[340px] rounded-[24px] border border-[#E6DED4] bg-white/70 p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] sm:p-8">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3ECE5] text-[#C17A3A]">
                <Users className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <span className="absolute right-7 top-6 font-serif text-[4.1rem] leading-none text-[#F3F1ED] sm:right-8 sm:top-7 sm:text-[4.6rem]">
                3
              </span>

              <h3 className="mb-5 font-serif text-[1.65rem] leading-tight text-[#1B2A4A] sm:text-[1.8rem]">
                Community by Design
              </h3>

              <p className="max-w-[570px] text-[0.97rem] leading-[1.7] text-[#667085] sm:text-[1rem]">
                The community around a home matters. Condev is deliberate about
                who it sells to — with the goal of building neighborhoods where
                residents share not just a pride in where they live, but a
                common drive to grow and make the most of where they are.
              </p>
            </div>

            <div className="relative min-h-[340px] rounded-[24px] border border-[#E6DED4] bg-white/70 p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] sm:p-8">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3ECE5] text-[#C17A3A]">
                <MapPin className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <span className="absolute right-7 top-6 font-serif text-[4.1rem] leading-none text-[#F3F1ED] sm:right-8 sm:top-7 sm:text-[4.6rem]">
                4
              </span>

              <h3 className="mb-5 font-serif text-[1.65rem] leading-tight text-[#1B2A4A] sm:text-[1.8rem]">
                Ahead of the Curve
              </h3>

              <p className="max-w-[570px] text-[0.97rem] leading-[1.7] text-[#667085] sm:text-[1rem]">
                Not every great address announces itself. Condev looks for areas
                with the right fundamentals — infrastructure, accessibility,
                strong institutions, room to grow — before the market has fully
                taken notice. The goal is to bring buyers in at a meaningful
                point in an area&apos;s growth, and let the trajectory do the
                rest.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="relative min-h-[340px] w-full max-w-[660px] rounded-[24px] border border-[#E6DED4] bg-white/70 p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] sm:p-8">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3ECE5] text-[#C17A3A]">
                <TrendingUp className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <span className="absolute right-7 top-6 font-serif text-[4.1rem] leading-none text-[#F3F1ED] sm:right-8 sm:top-7 sm:text-[4.6rem]">
                5
              </span>

              <h3 className="mb-5 font-serif text-[1.65rem] leading-tight text-[#1B2A4A] sm:text-[1.8rem]">
                Value that Compounds
              </h3>

              <p className="max-w-[570px] text-[0.97rem] leading-[1.7] text-[#667085] sm:text-[1rem]">
                Some properties in Condev&apos;s established communities have
                appreciated as much as 2.5 to 3 times over the past decade.
                Buyers who enter early — often on financing — tend to find that
                the investment does considerably more than hold its value.
                It&apos;s a track record that has brought more than a few buyers
                back for a second property, and in some cases, a third.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
