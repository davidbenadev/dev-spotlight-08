import { Home, User, LayoutGrid, ListOrdered, Mail, Github, Linkedin, FileText } from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";
import profileAsset from "@/assets/profile.png.asset.json";

const navLinks = [
  { label: "Inicio", href: "#home", icon: Home },
  { label: "Sobre Mí", href: "#about", icon: User },
  { label: "Portafolio", href: "#projects", icon: LayoutGrid },
  { label: "Experiencia", href: "#experience", icon: ListOrdered },
  { label: "Contacto", href: "#contact", icon: Mail },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/david-rincon-benavides", icon: Linkedin },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Email", href: "mailto:davirin96@gmail.com", icon: Mail },
];

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="lg:fixed lg:inset-y-4 lg:left-4 lg:w-72">
      <div className="flex h-full flex-col items-center rounded-2xl border border-spotify/60 bg-ink p-6 text-center">
        <div className="mt-2 h-28 w-28 overflow-hidden rounded-full border-2 border-spotify bg-elevated" />

        <h1 className="mt-5 text-xl font-bold tracking-tight text-foreground">
          DAVID  BENAVIDES
        </h1>
        <p className="mt-1 text-xs font-medium tracking-wide text-spotify uppercase">
          SENIOR AI FULLSTACK ENGINEER
        </p>
        <p className="mt-1 text-[11px] text-subdued">CDMX, México</p>

        <nav className="mt-8 w-full space-y-1.5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
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

        <div className="mt-auto w-full pt-8">
          <p className="text-xs font-semibold text-subdued">Enlaces</p>
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
            href={cvAsset.url}
            download="CV_David_Rincon_Benavides.pdf"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-spotify px-4 py-2.5 text-sm font-semibold text-spotify transition-colors hover:bg-spotify hover:text-ink"
          >
            <FileText className="h-4 w-4" />
            Descargar CV
          </a>
        </div>
      </div>
    </aside>
  );
}
