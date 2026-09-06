import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-medium tracking-widest text-spotify uppercase">
          Senior AI Fullstack Engineer
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl">
          David Benavides
        </h1>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build intelligent, end-to-end software products that combine clean
          engineering with the power of artificial intelligence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-spotify px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105 hover:bg-spotify-bright"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-elevated-hover hover:text-spotify"
          >
            About Me
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-subdued">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}
