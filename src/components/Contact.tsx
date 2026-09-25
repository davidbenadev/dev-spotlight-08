import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {t.contact.title}
      </h2>
      <div className="relative mt-5 overflow-hidden rounded-xl border border-spotify/50 bg-gradient-to-br from-elevated to-ink-light p-6 shadow-[0_0_28px_rgba(193,255,114,0.08)] sm:p-8">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-spotify/20" />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex max-w-xl items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-spotify/10 text-spotify">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="pt-1 text-sm leading-relaxed text-muted-foreground">{t.contact.text}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:davirin96@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-spotify px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              davirin96@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-rincon-benavides"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-elevated text-spotify transition-colors hover:bg-spotify hover:text-ink"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
