import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground hover:text-spotify transition-colors"
        >
          David Benavides
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-spotify transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-spotify px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105 hover:bg-spotify-bright"
        >
          <FileText className="h-4 w-4" />
          CV
        </a>
      </div>
    </header>
  );
}
