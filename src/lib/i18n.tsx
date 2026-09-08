import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "es" | "en";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Portafolio",
      experience: "Experiencia",
      contact: "Contacto",
    },
    sidebar: {
      role: "SENIOR AI FULLSTACK ENGINEER",
      location: "CDMX, México",
      links: "Enlaces",
      downloadCv: "Descargar CV",
    },
    hero: {
      title: "Soluciones web eficientes, del backend a la nube",
      subtitle:
        "Desarrollador Fullstack con más de 6 años de experiencia, especializado en Back-End, servidores en la nube y despliegue de aplicaciones en contenedores.",
      cta: "Ver Portafolio",
    },
    about: {
      title: "Sobre Mí",
      p1: "Ingeniero de software Full Stack con más de 7 años de experiencia desarrollando, diseñando y desplegando aplicaciones web, plataformas digitales y soluciones backend escalables.\n\nActualmente enfocado en el desarrollo de productos modernos impulsados por Inteligencia Artificial, integrando modelos y servicios de IA dentro de aplicaciones web y flujos de negocio. Cuento con experiencia trabajando de extremo a extremo en productos digitales utilizando tecnologías como TypeScript, React, React Native, Node.js, Next.js y Supabase, así como en el diseño de APIs, arquitecturas backend, bases de datos y servicios en la nube.\n\nMi experiencia combina desarrollo Front-End, Back-End, Mobile, Cloud y DevOps, permitiéndome participar en todo el ciclo de vida de un producto: arquitectura, desarrollo, integraciones, infraestructura, automatización, deployment, monitoreo y optimización.\n\nHe trabajado con infraestructuras en AWS, Google Cloud, Azure y DigitalOcean, implementando soluciones con Docker, Kubernetes, OpenShift y GitHub Actions. También cuento con amplia experiencia diseñando y administrando bases de datos relacionales y no relacionales utilizando PostgreSQL, MySQL, Supabase y Elasticsearch.\n\nA lo largo de mi carrera he participado y liderado equipos de desarrollo, definido arquitecturas técnicas, mejorado procesos de deployment y construido productos orientados a rendimiento, escalabilidad, mantenibilidad y experiencia de usuario.",
      p2: "",
    },
    projects: {
      title: "Portafolio",
      repoLabel: (title: string) => `${title} repositorio`,
      demoLabel: (title: string) => `${title} demo en vivo`,
      items: [
        {
          title: "AI Chat Orchestrator",
          description:
            "Capa de orquestación de chat con contexto que dirige las conversaciones al modelo adecuado y escala casos complejos.",
          tags: ["Next.js", "Supabase", "LLMs"],
        },
        {
          title: "Laravel CMS",
          description:
            "Sistema de gestión de contenido modular con permisos granulares y flujo de aprobación editorial.",
          tags: ["Laravel", "MySQL", "Livewire"],
        },
        {
          title: "Dekiris",
          description:
            "Producto de automatización de flujos de trabajo para revisión de documentos, notificaciones y analítica competitiva.",
          tags: ["TypeScript", "BullMQ"],
        },
        {
          title: "Orchestrator",
          description:
            "API gateway seguro con rate-limiting que enruta tráfico entre microservicios internos con observabilidad completa.",
          tags: ["Go", "Docker", "Prometheus"],
        },
        {
          title: "Engineering Dashboard",
          description:
            "Dashboard de analítica en tiempo real que mide velocidad del equipo, salud del sistema y métricas de producto.",
          tags: ["React", "Recharts"],
        },
        {
          title: "AI Educator",
          description:
            "Asistente de aprendizaje adaptativo que genera lecciones y registra el progreso de los estudiantes automáticamente.",
          tags: ["Python", "OpenAI"],
        },
      ],
    },
    experience: {
      title: "Experiencia",
      items: [
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
      ],
      education: "Educación",
      degree: "Ingeniería en Computación",
      school: "Universidad Autónoma Metropolitana · 2014 — 2018",
      courses: "Cursos: Astro, API con Node.js, IA Generativa, ReactJS, PHP con Laravel",
      languages: "Idiomas",
      langs: ["Español — Nativo", "Inglés — Intermedio B2"],
    },
    contact: {
      title: "Contacto",
      text: "Abierto a nuevos proyectos y colaboraciones. Hablemos.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Portfolio",
      experience: "Experience",
      contact: "Contact",
    },
    sidebar: {
      role: "SENIOR AI FULLSTACK ENGINEER",
      location: "Mexico City, Mexico",
      links: "Links",
      downloadCv: "Download CV",
    },
    hero: {
      title: "Efficient web solutions, from backend to the cloud",
      subtitle:
        "Fullstack Developer with 6+ years of experience, specialized in Back-End, cloud servers and containerized application deployment.",
      cta: "View Portfolio",
    },
    about: {
      title: "About Me",
      p1: "Fullstack Web Developer with 7+ years of experience, specialized in Back-End. I have solid skills in cloud servers, deployment processes and container-based system administration.",
      p2: "I am committed to delivering efficient, innovative solutions adapted to today's technological needs, building high-quality digital products that make the most of my experience.",
    },
    projects: {
      title: "Portfolio",
      repoLabel: (title: string) => `${title} repository`,
      demoLabel: (title: string) => `${title} live demo`,
      items: [
        {
          title: "AI Chat Orchestrator",
          description:
            "Context-aware chat orchestration layer that routes conversations to the right model and escalates complex cases.",
          tags: ["Next.js", "Supabase", "LLMs"],
        },
        {
          title: "Laravel CMS",
          description:
            "Modular content management system with granular permissions and an editorial approval workflow.",
          tags: ["Laravel", "MySQL", "Livewire"],
        },
        {
          title: "Dekiris",
          description:
            "Workflow automation product for document review, notifications and competitive analytics.",
          tags: ["TypeScript", "BullMQ"],
        },
        {
          title: "Orchestrator",
          description:
            "Secure, rate-limited API gateway routing traffic across internal microservices with full observability.",
          tags: ["Go", "Docker", "Prometheus"],
        },
        {
          title: "Engineering Dashboard",
          description:
            "Real-time analytics dashboard tracking team velocity, system health and product metrics.",
          tags: ["React", "Recharts"],
        },
        {
          title: "AI Educator",
          description:
            "Adaptive learning assistant that generates lessons and tracks student progress automatically.",
          tags: ["Python", "OpenAI"],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          period: "2023 — Present",
          title: "Fullstack Senior Developer",
          company: "Qanta Media — Remote, Costa Rica",
          points: [
            "API development and maintenance with Laravel and endpoint migration to Java Spring Boot, improving backend performance",
            "High-performance web applications with React, Node.js, Next.js, AstroJS and Strapi",
            "Deployments on AWS, Azure, Google Cloud and Digital Ocean with Docker and Kubernetes, cutting operational costs by 10%",
            "CI/CD with GitHub Actions for faster, more consistent deployments",
          ],
        },
        {
          period: "2021 — 2023",
          title: "Lead BackEnd Developer",
          company: "INFOTEC — Mexico City, Mexico",
          points: [
            "Led development of secure applications with Laravel, VueJS and PHP, reducing vulnerabilities",
            "Database architectures with PostgreSQL and Elasticsearch: +30% query efficiency",
            "Deployments on RHEL/CentOS with Docker and OpenShift: +25% stability, -30% downtime",
            "Automation with BashScript and Python (-50% manual work) and mentoring a team of 3 developers",
          ],
        },
        {
          period: "2019 — 2021",
          title: "Fullstack Junior Developer",
          company: "Presidencia de México — Mexico City, Mexico",
          points: [
            "End-to-end development of open-source web projects with Laravel, JQuery and VueJS, from requirements to launch",
            "PostgreSQL and MySQL database optimization; 30% reduction in user operation time",
            "Nginx server administration on CentOS, Ubuntu and Fedora with Git version control",
          ],
        },
      ],
      education: "Education",
      degree: "Computer Engineering",
      school: "Universidad Autónoma Metropolitana · 2014 — 2018",
      courses: "Courses: Astro, Node.js APIs, Generative AI, ReactJS, PHP with Laravel",
      languages: "Languages",
      langs: ["Spanish — Native", "English — Intermediate B2"],
    },
    contact: {
      title: "Contact",
      text: "Open to new projects and collaborations. Let's talk.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;

export type Translations = (typeof translations)["es"];

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("language");
  return stored === "en" ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    setLangState(getInitialLanguage());
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    window.localStorage.setItem("language", next);
    document.documentElement.lang = next;
  };

  const t = translations[lang] as Translations;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
