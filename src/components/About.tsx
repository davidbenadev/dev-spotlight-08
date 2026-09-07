export function About() {
  return (
    <section id="about" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        Sobre Mí
      </h2>
      <div className="mt-4 space-y-4 rounded-xl border border-border bg-elevated p-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          Desarrollador Web Fullstack con más de 6 años de trayectoria,
          especializado en Back-End. Tengo habilidades sólidas en el manejo de
          servidores en la nube, procesos de deployment y administración de
          sistemas en contenedores.
        </p>
        <p>
          Estoy comprometido con ofrecer soluciones eficientes e innovadoras,
          adaptadas a las necesidades tecnológicas actuales, para crear
          productos digitales de alta calidad, aprovechando al máximo mi
          experiencia.
        </p>
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
