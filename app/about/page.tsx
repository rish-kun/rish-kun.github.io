const skills = [
  "Python",
  "Django",
  "Go",
  "Docker",
  "Kubernetes",
  "Linux",
  "PostgreSQL",
  "PyTorch",
  "LangChain",
  "CI/CD",
  "Terraform",
];

export default function About() {
  return (
    <div className="min-h-dvh flex flex-col allow-scroll overflow-y-auto">
      <main className="flex-1 px-8 lg:px-12 py-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center">

          {/* Profile header — centered */}
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <div className="w-28 h-28 rounded-full bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center gap-2 text-neutral-300 flex-shrink-0">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Rishit Verma
              </h2>
              <p className="text-sm text-neutral-400 mt-1">
                CS Student · BITS Pilani · Backend · DevOps · ML
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-200 mb-14" />

          {/* Two-column: bio left, skills right */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Bio */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
                About
              </h3>
              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                <p>
                  I&apos;m a second-year CS student at BITS Pilani, currently
                  based on campus in Rajasthan. I grew up in Tokyo, Japan, where
                  my family still lives.
                </p>
                <p>
                  At BITS, I work with DVM (Department of Visual Media) on
                  backend development for the Oasis and Apogee festival platforms
                  using Django, with a focus on security and infrastructure. I
                  also contribute to the Wall Street Club&apos;s News Analyser — a
                  Django-based financial news sentiment analysis platform.
                </p>
                <p>
                  My interests span backend systems, DevOps, and applied ML.
                  I&apos;m particularly drawn to distributed systems and making ML
                  pipelines production-worthy.
                </p>
                <p className="text-neutral-500">
                  Outside of tech: fitness (running, gym), cooking, travel
                  planning, music discovery, and hunting down deals on tech
                  gadgets and clothes.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded bg-neutral-100 text-neutral-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 w-full h-px bg-neutral-200" />
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
              Get in touch
            </p>
            <a
              href="mailto:hello@rishit.dev"
              className="inline-flex items-center gap-2 text-sm text-accent border border-accent px-5 py-2.5 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
            >
              hello@rishit.dev
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
