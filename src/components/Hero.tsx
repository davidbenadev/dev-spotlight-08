export function Hero() {
  return (
    <section id="home" className="px-8 py-20 text-center">
      <h2 className="mx-auto max-w-2xl text-3xl font-extrabold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
        Soluciones web eficientes, del backend a la nube
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
        Desarrollador Fullstack con más de 6 años de experiencia, especializado
        en Back-End, servidores en la nube y despliegue de aplicaciones en
        contenedores.
      </p>
      <a
        href="#projects"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-spotify bg-spotify/10 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-spotify transition-colors hover:bg-spotify hover:text-ink"
      >
        Ver Portafolio
      </a>
    </section>
  );
}
