export function About() {
  return (
    <section id="about" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        About Me
      </h2>
      <div className="mt-4 space-y-4 rounded-xl border border-border bg-elevated p-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          I am a software engineer with deep experience designing and shipping
          fullstack applications across the entire product lifecycle, from
          scalable backends to polished user interfaces.
        </p>
        <p>
          In recent years I have focused on integrating artificial intelligence
          into real-world products: automating workflows, building intelligent
          assistants, and helping teams move faster.
        </p>
        <p>
          I value clean code, thoughtful architecture, and products that feel
          effortless to use — whether leading a technical team or writing code
          hands-on.
        </p>
      </div>
    </section>
  );
}
