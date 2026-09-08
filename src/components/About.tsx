import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {t.about.title}
      </h2>
      <div className="mt-4 space-y-4 rounded-xl border border-border bg-elevated p-6 text-sm leading-relaxed text-muted-foreground">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
        <p>{t.about.p4}</p>
        <p>{t.about.p5}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "Laravel / PHP",
            "React · Next.js · Astro",
            "Node.js",
            "PostgreSQL · MySQL · Elasticsearch",
            "Docker · Kubernetes",
            "AWS · Azure · GCP · Digital Ocean",
            "CI/CD · GitHub Actions",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-spotify/40 px-3 py-1 text-xs font-medium text-spotify"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
