import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {t.projects.title}
      </h2>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {t.projects.items.map((project) => (
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
              <a href="#" aria-label={t.projects.repoLabel(project.title)} className="transition-colors hover:text-spotify">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" aria-label={t.projects.demoLabel(project.title)} className="transition-colors hover:text-spotify">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
