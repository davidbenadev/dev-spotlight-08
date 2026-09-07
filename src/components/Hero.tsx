import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="px-8 py-20 text-center">
      <h2 className="mx-auto max-w-2xl text-3xl font-extrabold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
        {t.hero.title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
        {t.hero.subtitle}
      </p>
      <a
        href="#projects"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-spotify bg-spotify/10 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-spotify transition-colors hover:bg-spotify hover:text-ink"
      >
        {t.hero.cta}
      </a>
    </section>
  );
}
