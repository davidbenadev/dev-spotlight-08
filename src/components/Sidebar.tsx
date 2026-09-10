import { Home, User, LayoutGrid, ListOrdered, Mail, Github, Linkedin, FileText, Languages } from "lucide-react";
import profileUrl from "@/assets/profile.png";
import cvEsUrl from "@/assets/CV_2026.docx.pdf";
import cvEnUrl from "@/assets/Resume_2026.docx.pdf";
import { useLanguage } from "@/lib/i18n";

const navIcons = {
  home: Home,
  about: User,
  projects: LayoutGrid,
  experience: ListOrdered,
  contact: Mail,
} as const;

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/david-rincon-benavides", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/davidbenadev", icon: Github },
  { label: "Email", href: "mailto:davirin96@gmail.com", icon: Mail },
];

export function Sidebar({ active }: { active: string }) {
  const { lang, setLang, t } = useLanguage();

  const navLinks = (
    [
      { id: "home", label: t.nav.home },
      { id: "about", label: t.nav.about },
      { id: "projects", label: t.nav.projects },
      { id: "experience", label: t.nav.experience },
      { id: "contact", label: t.nav.contact },
    ] as const
  ).map((link) => ({ ...link, href: `#${link.id}`, icon: navIcons[link.id] }));

  return (
    <aside className="lg:fixed lg:inset-y-4 lg:left-4 lg:w-72">
      <div className="relative flex h-full flex-col items-center overflow-y-auto rounded-2xl border border-spotify/60 bg-ink p-6 text-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          aria-label="Switch language / Cambiar idioma"
          className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-spotify/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-spotify transition-colors hover:bg-spotify hover:text-ink"
        >
          <Languages className="h-3 w-3" />
          {lang === "es" ? "EN" : "ES"}
        </button>

        <img
          src={profileUrl}
          alt="David Rincon Benavides"
          className="mt-2 h-28 w-28 shrink-0 rounded-full border-2 border-spotify bg-elevated object-cover"
        />

        <h1 className="mt-5 shrink-0 text-xl font-bold tracking-tight text-foreground">
          DAVID  BENAVIDES
        </h1>
        <p className="mt-1 shrink-0 text-xs font-medium tracking-wide text-spotify uppercase">
          {t.sidebar.role}
        </p>
        <p className="mt-1 shrink-0 text-[11px] text-subdued">{t.sidebar.location}</p>

        <nav className="mt-6 w-full shrink-0 space-y-1.5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                    ? "bg-spotify text-ink"
                    : "text-muted-foreground hover:bg-elevated hover:text-spotify"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto w-full shrink-0 pt-6">
          <p className="text-xs font-semibold text-subdued">{t.sidebar.links}</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-elevated text-spotify transition-colors hover:bg-spotify hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <a
            href={lang === "es" ? cvEsUrl : cvEnUrl}
            download={lang === "es" ? "CV_David_Rincon_Benavides.pdf" : "Resume_David_Rincon_Benavides.pdf"}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-spotify px-4 py-2.5 text-sm font-semibold text-spotify transition-colors hover:bg-spotify hover:text-ink"
          >
            <FileText className="h-4 w-4" />
            {t.sidebar.downloadCv}
          </a>
        </div>
      </div>
    </aside>
  );
}
