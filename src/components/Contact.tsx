import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {t.contact.title}
      </h2>
      <div className="mt-4 flex flex-col items-start gap-4 rounded-xl border border-spotify/40 bg-ink-light p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{t.contact.text}</p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:davirin96@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-spotify px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            davirin96@gmail.com
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
    </section>
  );
}
