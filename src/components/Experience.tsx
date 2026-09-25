import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {t.experience.title}
      </h2>

      <div className="mt-6 space-y-6">
        {t.experience.items.map((item) => (
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

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-elevated p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
            {t.experience.education}
          </h3>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-lg bg-white p-2">
              <img
                src="https://www.comunicacionsocial.uam.mx/identidaduam/images/encabezado.png"
                alt="Logotipo de la Universidad Autónoma Metropolitana"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t.experience.degree}
              </p>
              <p className="mt-1 text-xs text-subdued">{t.experience.school}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-elevated p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
            {t.experience.languages}
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
            {t.experience.langs.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-border bg-elevated p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
          {t.experience.coursesLabel}
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {t.experience.courses.map((course) => (
            <article
              key={course.name}
              className="group flex min-h-36 flex-col rounded-lg border border-border bg-ink-light p-4 transition-colors hover:border-spotify/60"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-spotify/40 bg-spotify/10 text-spotify">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug text-foreground">{course.name}</p>
                  <p className="mt-1 text-xs text-subdued">{course.issuer}</p>
                </div>
              </div>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-spotify transition-colors group-hover:underline"
              >
                {t.experience.viewCredential}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
