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
          <p className="mt-2 text-xs text-muted-foreground">
            {t.experience.degree}
          </p>
          <p className="text-xs text-subdued">{t.experience.school}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {t.experience.courses}
          </p>
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
    </section>
  );
}
