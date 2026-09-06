import { Briefcase, Bot, Users } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Fullstack Application Development",
    period: "2018 — Present",
    description:
      "Designed and built scalable web applications end-to-end, from responsive frontends to robust APIs and data models. Focused on performance, maintainability, and clean architecture.",
  },
  {
    icon: Bot,
    title: "AI Process Automation",
    period: "2021 — Present",
    description:
      "Integrated AI models and automation pipelines into production workflows. Built intelligent assistants, automated data extraction, and streamlined repetitive tasks using modern LLM tooling.",
  },
  {
    icon: Users,
    title: "Technical Team Leadership",
    period: "2022 — Present",
    description:
      "Led cross-functional engineering teams, mentored developers, defined technical roadmaps, and shipped products on time while maintaining high engineering standards.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-widest text-spotify uppercase">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My journey so far
        </h2>

        <div className="relative mt-12 space-y-8">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex gap-6 rounded-xl bg-elevated p-6 transition-colors hover:bg-elevated-hover"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-spotify text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-spotify transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-subdued">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
