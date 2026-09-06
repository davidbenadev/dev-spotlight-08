import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chat Orchestrator",
    description:
      "Context-aware chat orchestration layer that routes conversations to the right model and escalates complex cases.",
    tags: ["Next.js", "Supabase", "LLMs"],
  },
  {
    title: "Laravel CMS",
    description:
      "Modular content management system with granular permissions and an editorial approval workflow.",
    tags: ["Laravel", "MySQL", "Livewire"],
  },
  {
    title: "Dekiris",
    description:
      "Workflow automation product for document review, notifications and competitive analytics.",
    tags: ["TypeScript", "BullMQ"],
  },
  {
    title: "Orchestrator",
    description:
      "Secure, rate-limited API gateway routing traffic across internal microservices with full observability.",
    tags: ["Go", "Docker", "Prometheus"],
  },
  {
    title: "Engineering Dashboard",
    description:
      "Real-time analytics dashboard tracking team velocity, system health and product metrics.",
    tags: ["React", "Recharts"],
  },
  {
    title: "AI Educator",
    description:
      "Adaptive learning assistant that generates lessons and tracks student progress automatically.",
    tags: ["Python", "OpenAI"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        Selected Projects
      </h2>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-xl border border-spotify/40 bg-ink-light p-5 transition-colors hover:border-spotify"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground group-hover:text-spotify">
              {project.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-spotify/40 px-2 py-0.5 text-[10px] font-medium text-spotify"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4 text-subdued">
              <a href="#" aria-label={`${project.title} repository`} className="transition-colors hover:text-spotify">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" aria-label={`${project.title} live demo`} className="transition-colors hover:text-spotify">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
