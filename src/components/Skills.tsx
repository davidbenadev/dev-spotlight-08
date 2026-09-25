import { BrainCircuit, CloudCog, Code2, Database, LayoutTemplate, ServerCog, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const groupIcons = [BrainCircuit, Code2, LayoutTemplate, ServerCog, Database, CloudCog, Wrench];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {t.skills.title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t.skills.intro}</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {t.skills.groups.map((group, index) => {
          const Icon = groupIcons[index]!;
          return (
            <article key={group.title} className="rounded-xl border border-border bg-elevated p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-spotify/10 text-spotify">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-spotify/30 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
