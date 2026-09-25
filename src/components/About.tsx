import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="home" className="px-8 pb-16 pt-12 sm:pt-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {t.about.title}
      </h2>
      <div className="mt-4 space-y-4 rounded-xl border border-border bg-elevated p-6 text-sm leading-relaxed text-muted-foreground sm:p-8">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
        <p>{t.about.p4}</p>
        <p>{t.about.p5}</p>
      </div>
    </section>
  );
}
