import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Customer Support Assistant",
    description:
      "A context-aware chat assistant that reduces ticket volume by answering common questions and escalating complex issues to the right team.",
    tags: ["React", "Node.js", "OpenAI"],
  },
  {
    title: "Internal Process Automation Platform",
    description:
      "A fullstack platform that automates document review, approval workflows, and notifications across departments.",
    tags: ["TypeScript", "PostgreSQL", "BullMQ"],
  },
  {
    title: "Engineering Dashboard",
    description:
      "A real-time analytics dashboard used by leadership to track team velocity, system health, and product metrics.",
    tags: ["Next.js", "Tailwind", "Recharts"],
  },
  {
    title: "API Gateway for Microservices",
    description:
      "Designed and implemented a secure, rate-limited gateway that routes traffic to multiple internal services with observability built in.",
    tags: ["Go", "Docker", "Prometheus"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-ink-light px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium tracking-widest text-spotify uppercase">
          Portfolio
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Selected projects
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-xl bg-elevated transition-colors hover:bg-elevated-hover"
            >
              {/* Clean grey placeholder */}
              <div className="aspect-video w-full bg-muted" />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-spotify transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-subdued transition-colors group-hover:text-spotify" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-ink px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
