const experiences = [
  {
    period: "2023 — Actual",
    title: "Fullstack Senior Developer",
    company: "Qanta Media — Remoto, Costa Rica",
    points: [
      "Desarrollo y mantenimiento de APIs con Laravel y migración de endpoints a Java Spring Boot, mejorando el rendimiento del backend",
      "Aplicaciones web de alto rendimiento con React, Node.js, Next.js, AstroJS y Strapi",
      "Despliegues en AWS, Azure, Google Cloud y Digital Ocean con Docker y Kubernetes, reduciendo costos operativos en un 10%",
      "CI/CD con GitHub Actions para despliegues más rápidos y consistentes",
    ],
  },
  {
    period: "2021 — 2023",
    title: "Lead BackEnd Developer",
    company: "INFOTEC — CDMX, México",
    points: [
      "Lideré el desarrollo de aplicaciones seguras con Laravel, VueJS y PHP, reduciendo vulnerabilidades",
      "Arquitecturas de bases de datos con PostgreSQL y Elasticsearch: +30% en eficiencia de consultas",
      "Despliegues en RHEL/CentOS con Docker y OpenShift: +25% estabilidad, -30% tiempo de inactividad",
      "Automatización con BashScript y Python (-50% gestión manual) y mentoría a un equipo de 3 desarrolladores",
    ],
  },
  {
    period: "2019 — 2021",
    title: "Fullstack Junior Developer",
    company: "Presidencia de México — CDMX, México",
    points: [
      "Desarrollo completo de proyectos web de software libre con Laravel, JQuery y VueJS, desde requerimientos hasta publicación",
      "Optimización de bases de datos PostgreSQL y MySQL; reducción del 30% en tiempo operativo de usuarios",
      "Administración de servidores Nginx en CentOS, Ubuntu y Fedora con control de versiones Git",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-8 pb-16">
      <h2 className="text-lg font-bold uppercase tracking-wide text-foreground">
        Experiencia
      </h2>

      <div className="mt-6 space-y-6">
        {experiences.map((item) => (
          <div key={item.title} className="flex gap-5">
            <div className="hidden w-28 shrink-0 pt-4 text-right text-sm font-semibold text-foreground sm:block">
              {item.period}
            </div>
            <div className="relative flex flex-col items-center">
              <span className="mt-5 h-3 w-3 shrink-0 rounded-full bg-spotify" />
              <span className="w-px flex-1 bg-spotify/30" />
            </div>
            <div className="flex-1 rounded-xl border border-border bg-elevated p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-0.5 text-xs text-subdued">{item.company}</p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-xs leading-relaxed text-muted-foreground">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-medium text-spotify sm:hidden">
                {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-elevated p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
            Educación
          </h3>
          <p className="mt-2 text-xs text-muted-foreground">
            Ingeniería en Computación
          </p>
          <p className="text-xs text-subdued">
            Universidad Autónoma Metropolitana · 2014 — 2018
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Cursos: Astro, API con Node.js, IA Generativa, ReactJS, PHP con
            Laravel
          </p>
        </div>
        <div className="rounded-xl border border-border bg-elevated p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
            Idiomas
          </h3>
          <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
            <li>Español — Nativo</li>
            <li>Inglés — Intermedio B2</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
