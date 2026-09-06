const experiences = [
  {
    period: "2021 — Present",
    title: "Development Lead (AI)",
    company: "Company Inc.",
    points: [
      "Led cross-functional engineering teams and defined technical roadmaps",
      "Shipped AI-powered features from prototype to production",
    ],
  },
  {
    period: "2019 — 2021",
    title: "Fullstack Engineer",
    company: "Company Inc.",
    points: [
      "Built scalable web applications end-to-end",
      "Designed robust APIs and data models",
    ],
  },
  {
    period: "2018 — 2019",
    title: "AI Educator",
    company: "Company",
    points: [
      "Taught applied machine learning and modern web development",
      "Created hands-on curriculum for engineering teams",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        Experience Timeline
      </h2>

      <div className="mt-6 space-y-6">
        {experiences.map((item) => (
          <div key={item.title} className="flex gap-5">
            <div className="hidden w-28 shrink-0 pt-4 text-right text-sm font-semibold text-foreground sm:block">
              {item.period}
            </div>
            <div className="relative flex flex-col items-center">
              <span className="mt-5 h-3 w-3 shrink-0 rounded-full bg-spotify" />
              <span className="w-px flex-1 bg-spotify/30" />
            </div>
            <div className="flex-1 rounded-xl border border-border bg-elevated p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-0.5 text-xs text-subdued">{item.company}</p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs leading-relaxed text-muted-foreground">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-medium text-spotify sm:hidden">
                {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
