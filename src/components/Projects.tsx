import { ExternalLink, Github, Images, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/lib/i18n";

function ProjectVisual({
  title,
  src,
  className = "",
}: {
  title: string;
  src: string | null;
  className?: string;
}) {
  if (src)
    return (
      <img
        src={src}
        alt={`Vista previa de ${title}`}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-elevated via-ink-light to-spotify/20 ${className}`}
      aria-label={`Vista previa pendiente de ${title}`}
      role="img"
    >
      <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full border border-spotify/30" />
      <div className="absolute bottom-5 left-5 right-5 rounded-md border border-spotify/30 bg-ink/70 p-3">
        <span className="block h-2 w-2/3 rounded bg-spotify/80" />
        <span className="mt-2 block h-1.5 w-full rounded bg-foreground/20" />
        <span className="mt-1.5 block h-1.5 w-4/5 rounded bg-foreground/10" />
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items;
  return (
    <section id="projects" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {t.projects.title}
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex overflow-hidden rounded-xl border border-border bg-elevated transition-colors hover:border-spotify/70"
          >
            <div className="flex w-full flex-col">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative aspect-[16/9] w-full overflow-hidden text-left"
                    aria-label={`${t.projects.viewProject}: ${project.title}`}
                  >
                    <ProjectVisual title={project.title} src={project.preview} />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-transparent transition-colors group-hover:bg-ink/55 group-hover:text-spotify">
                      <ZoomIn className="h-7 w-7" aria-hidden="true" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[85vh] max-w-4xl overflow-y-auto border-border bg-ink-light p-0 text-foreground">
                  <DialogHeader className="p-6 pb-0 text-left">
                    <DialogTitle className="pr-8 text-xl font-bold">{project.title}</DialogTitle>
                    <DialogDescription className="pt-2 leading-relaxed text-muted-foreground">
                      {project.details}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="px-6 pb-6">
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-spotify/40 px-2 py-0.5 text-[10px] font-medium text-spotify"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Images className="h-4 w-4 text-spotify" aria-hidden="true" />
                      {t.projects.gallery}
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {project.images.length > 0 ? (
                        project.images.map((image) => (
                          <ProjectVisual
                            key={image}
                            title={project.title}
                            src={image}
                            className="aspect-video rounded-lg border border-border"
                          />
                        ))
                      ) : (
                        <ProjectVisual
                          title={project.title}
                          src={project.preview}
                          className="aspect-video rounded-lg border border-border sm:col-span-2"
                        />
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <div className="flex flex-1 flex-col p-5">
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
                {(project.siteUrl || project.githubUrl) && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-spotify px-3 py-1.5 text-xs font-semibold text-spotify transition-colors hover:bg-spotify hover:text-ink"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {t.projects.site}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-spotify hover:text-spotify"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
