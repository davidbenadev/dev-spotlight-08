export function About() {
  return (
    <section id="about" className="bg-ink-light px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium tracking-widest text-spotify uppercase">
          About Me
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Passionate about software and AI
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a software engineer with deep experience designing and shipping
            fullstack applications across the entire product lifecycle. From
            scalable backends to polished user interfaces, I enjoy turning
            complex problems into simple, reliable solutions.
          </p>
          <p>
            In recent years I have focused on integrating artificial intelligence
            into real-world products: automating workflows, building intelligent
            assistants, and helping teams leverage AI to move faster and build
            smarter.
          </p>
          <p>
            I value clean code, thoughtful architecture, and products that feel
            effortless to use. Whether leading a technical team or writing code
            hands-on, my goal is always the same: deliver software that makes a
            measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
}
