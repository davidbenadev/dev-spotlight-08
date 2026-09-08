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
        "Senior AI Fullstack Engineer con más de 7 años de experiencia diseñando, desarrollando y desplegando aplicaciones web, mobile y soluciones backend escalables.",
      cta: "Ver Portafolio",
    },
    about: {
      title: "Sobre Mí",
      p1: "Ingeniero de software Full Stack con más de 7 años de experiencia desarrollando, diseñando y desplegando aplicaciones web, plataformas digitales y soluciones backend escalables.",
      p2: "Actualmente enfocado en el desarrollo de productos modernos impulsados por Inteligencia Artificial, integrando modelos y servicios de IA dentro de aplicaciones web y flujos de negocio. Cuento con experiencia trabajando de extremo a extremo en productos digitales utilizando tecnologías como TypeScript, React, React Native, Node.js, Next.js y Supabase, así como en el diseño de APIs, arquitecturas backend, bases de datos y servicios en la nube.",
      p3: "Mi experiencia combina desarrollo Front-End, Back-End, Mobile, Cloud y DevOps, permitiéndome participar en todo el ciclo de vida de un producto: arquitectura, desarrollo, integraciones, infraestructura, automatización, deployment, monitoreo y optimización.",
      p4: "He trabajado con infraestructuras en AWS, Google Cloud, Azure y DigitalOcean, implementando soluciones con Docker, Kubernetes, OpenShift y GitHub Actions. También cuento con amplia experiencia diseñando y administrando bases de datos relacionales y no relacionales utilizando PostgreSQL, MySQL, Supabase y Elasticsearch.",
      p5: "A lo largo de mi carrera he participado y liderado equipos de desarrollo, definido arquitecturas técnicas, mejorado procesos de deployment y construido productos orientados a rendimiento, escalabilidad, mantenibilidad y experiencia de usuario.",
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
          title: "Senior Fullstack Developer / AI Fullstack Engineer",
          company: "Qanta Media — Remoto, Costa Rica",
          points: [
            "Desarrollo aplicaciones y plataformas Full Stack utilizando TypeScript, React, Next.js, Node.js y tecnologías modernas de JavaScript, participando tanto en la arquitectura del producto como en su implementación.",
            "Diseño e implemento integraciones con Inteligencia Artificial para incorporar capacidades generativas, automatización y procesamiento inteligente dentro de aplicaciones web y flujos de negocio.",
            "Desarrollo y mantengo APIs y servicios backend, trabajando con Node.js, Laravel, Java Spring Boot y otras tecnologías dependiendo de las necesidades y arquitectura de cada proyecto.",
            "Desarrollo aplicaciones y experiencias multiplataforma utilizando React Native, compartiendo conocimiento, componentes y lógica de negocio dentro del ecosistema React y TypeScript.",
            "Implemento soluciones utilizando Supabase y PostgreSQL para autenticación, persistencia de datos, APIs, servicios backend y funcionalidades en tiempo real.",
            "Lidero el desarrollo de aplicaciones web de alto rendimiento utilizando React, Node.js, Next.js, Astro y Strapi, diseñando arquitecturas que facilitan la escalabilidad, mantenibilidad y autogestión de contenido.",
            "Participo en la modernización y migración de sistemas legacy, incluyendo migraciones de endpoints y servicios hacia arquitecturas basadas en Java Spring Boot y tecnologías modernas.",
            "Desarrollo y mantengo sistemas de generación y procesamiento de contenido utilizando Python, Jinja y herramientas de automatización.",
            "Diseño, despliego y mantengo aplicaciones en ambientes de QA y producción utilizando AWS, Google Cloud, Azure y DigitalOcean.",
            "Implemento arquitecturas basadas en Docker y Kubernetes, incluyendo estrategias de escalabilidad y optimización de recursos para aplicaciones con diferentes niveles de demanda.",
            "Diseño y mantengo pipelines de integración y despliegue continuo utilizando GitHub Actions, automatizando procesos de testing, build y deployment.",
            "Colaboro en decisiones técnicas relacionadas con arquitectura, performance, seguridad, bases de datos, infraestructura y experiencia de desarrollo.",
          ],
        },
        {
          period: "2021 — 2023",
          title: "Lead BackEnd Developer",
          company: "INFOTEC — CDMX, México",
          points: [
            "Lideré el desarrollo y arquitectura backend de aplicaciones web y plataformas digitales utilizando Laravel, PHP, JavaScript, Vue.js y diferentes tecnologías del ecosistema web.",
            "Diseñé arquitecturas de bases de datos relacionales y no relacionales utilizando PostgreSQL y Elasticsearch, optimizando consultas, organización de datos y escalabilidad de los sistemas.",
            "Implementé prácticas de desarrollo seguro orientadas a proteger aplicaciones, servicios y datos sensibles.",
            "Administré y desplegué aplicaciones sobre infraestructura Linux utilizando RHEL y CentOS, además de tecnologías de contenerización y orquestación como Docker y Red Hat OpenShift.",
            "Diseñé soluciones de automatización de procesos y administración de servidores utilizando Bash y Python, reduciendo tareas manuales dentro de los procesos operativos.",
            "Participé en decisiones de arquitectura, infraestructura, bases de datos y estrategia técnica para diferentes sistemas.",
            "Lideré y mentoreé a un equipo de desarrolladores, realizando revisión técnica, resolución de problemas y acompañamiento durante la implementación y entrega de proyectos.",
          ],
        },
        {
          period: "2019 — 2021",
          title: "Fullstack Junior Developer",
          company: "Presidencia de México — CDMX, México",
          points: [
            "Participé en el ciclo completo de desarrollo de aplicaciones web, desde levantamiento de requerimientos y diseño de soluciones hasta desarrollo, deployment y mantenimiento.",
            "Desarrollé aplicaciones Full Stack utilizando Laravel y PHP para backend, junto con JavaScript, jQuery y Vue.js para frontend.",
            "Diseñé e implementé bases de datos utilizando PostgreSQL y MySQL, incluyendo modelado de datos, optimización de consultas, mantenimiento y mejora de sistemas existentes.",
            "Configuré y administré servidores web utilizando Nginx sobre diferentes distribuciones Linux, incluyendo CentOS Server, Ubuntu Server y Fedora.",
            "Implementé flujos de desarrollo y control de versiones con Git para mejorar la colaboración, seguimiento de cambios y estabilidad de las entregas.",
            "Participé en diseño de interfaces, creación de wireframes, maquetación y desarrollo de nuevas funcionalidades para plataformas utilizadas dentro de la administración pública.",
          ],
        },
      ],
      education: "Educación",
      degree: "Ingeniería en Computación",
      school: "Universidad Autónoma Metropolitana · 2014 — 2018",
      coursesLabel: "Cursos:",
      courses: [
        { name: "AI for Brainstorming and Planning", url: "https://www.credly.com/badges/bf9ec647-423f-4f70-a804-04200900878a" },
        { name: "AI Fundamentals", url: "https://www.credly.com/badges/087ae33b-1022-43d6-94d5-ff2256cf3e47" },
        { name: "Introduction to Generative AI", url: "https://www.coursera.org/account/accomplishments/certificate/V4ADNFWSPRP8" },
        { name: "EF SET Certificate B2 English", url: "https://cert.efset.org/b3G39m" },
        { name: "ReactJS", url: "https://platzi.com/p/davirin96/curso/2444-react/diploma/detalle/" },
        { name: "PHP con Laravel", url: "https://platzi.com/p/davirin96/curso/1467-course/diploma/detalle/" }
      ],
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
        "Senior AI Fullstack Engineer with more than 7 years of experience designing, developing and deploying web applications, mobile applications and scalable backend solutions.",
      cta: "View Portfolio",
    },
    about: {
      title: "About Me",
      p1: "Full Stack Software Engineer with over 7 years of experience developing, designing, and deploying scalable web applications, digital platforms, and backend solutions.",
      p2: "I am currently focused on developing modern products driven by Artificial Intelligence, integrating AI models and services within web applications and business workflows. I have end-to-end experience in digital products using technologies such as TypeScript, React, React Native, Node.js, Next.js, and Supabase, as well as in API design, backend architectures, databases, and cloud services.",
      p3: "My experience combines Front-End, Back-End, Mobile, Cloud and DevOps development, allowing me to participate in the entire product lifecycle: architecture, development, integrations, infrastructure, automation, deployment, monitoring and optimization.",
      p4: "I have worked with infrastructures in AWS, Google Cloud, Azure and DigitalOcean, implementing solutions with Docker, Kubernetes, OpenShift and GitHub Actions. I also have extensive experience designing and managing relational and non-relational databases using PostgreSQL, MySQL, Supabase and Elasticsearch.",
      p5: "Throughout my career, I have participated in and led development teams, defined technical architectures, improved deployment processes and built products focused on performance, scalability, maintainability and user experience.",
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
          title: "Senior Fullstack Developer / AI Fullstack Engineer",
          company: "Qanta Media — Remote, Costa Rica",
          points: [
            "Developing applications and full-stack platforms with TypeScript, React, Next.js, Node.js, and modern JavaScript technologies, participating in both product architecture and implementation.",
            "Designing and implementing integrations with Artificial Intelligence to incorporate generative, automation, and intelligent processing capabilities within web applications and business workflows.",
            "Developing and maintaining APIs and backend services using Node.js, Laravel, Java Spring Boot, and other technologies depending on project requirements and architecture.",
            "Developing applications and cross-platform experiences with React Native, sharing knowledge, components, and business logic within the React and TypeScript ecosystem.",
            "Implementing solutions with Supabase and PostgreSQL for authentication, data persistence, APIs, backend services, and real-time functionalities.",
            "Leading the development of high-performance web applications using React, Node.js, Next.js, Astro, and Strapi, designing architectures that facilitate scalability, maintainability, and content self-management.",
            "Participating in the modernization and migration of legacy systems, including endpoint and service migrations towards architectures based on Java Spring Boot and modern technologies.",
            "Developing and maintaining content generation and processing systems using Python, Jinja, and automation tools.",
            "Designing, deploying, and maintaining applications in QA and production environments using AWS, Google Cloud, Azure, and DigitalOcean.",
            "Implementing architectures based on Docker and Kubernetes, including scalability strategies and resource optimization for applications with varying demand levels.",
            "Designing and maintaining continuous integration and deployment pipelines using GitHub Actions, automating testing, build, and deployment processes.",
            "Collaborating on technical decisions related to architecture, performance, security, databases, infrastructure, and developer experience.",
          ],
        },
        {
          period: "2021 — 2023",
          title: "Lead BackEnd Developer",
          company: "INFOTEC — Mexico City, Mexico",
          points: [
            "Leading backend development and architecture for web applications and digital platforms using Laravel, PHP, JavaScript, Vue.js, and various ecosystem technologies.",
            "Designing relational and non-relational database architectures with PostgreSQL and Elasticsearch, optimizing queries, data organization, and system scalability.",
            "Implementing security development practices aimed at protecting applications, services, and sensitive data.",
            "Administering and deploying applications on Linux infrastructure using RHEL and CentOS, in addition to containerization and orchestration technologies such as Docker and Red Hat OpenShift.",
            "Designing process automation and server administration solutions using Bash and Python, reducing manual tasks within operational workflows.",
            "Participating in architectural, infrastructure, database, and technical strategy decisions for different systems.",
            "Leading and mentoring a team of developers, conducting technical reviews, problem resolution, and support during project implementation and delivery.",
          ],
        },
        {
          period: "2019 — 2021",
          title: "Fullstack Junior Developer",
          company: "Presidencia de México — Mexico City, Mexico",
          points: [
            "Participated in the complete development cycle of web applications, from requirements gathering and solution design to development, deployment, and maintenance.",
            "Developed Full Stack applications using Laravel and PHP for backend, along with JavaScript, jQuery, and Vue.js for frontend.",
            "Designed and implemented databases using PostgreSQL and MySQL, including data modeling, query optimization, maintenance, and improvement of existing systems.",
            "Configured and administered web servers using Nginx on different Linux distributions, including CentOS Server, Ubuntu Server, and Fedora.",
            "Implemented development and version control workflows with Git to improve collaboration, change tracking, and delivery stability.",
            "Participated in interface design, wireframe creation, layout, and development of new features for platforms used within public administration.",
          ],
        },
      ],
      education: "Education",
      degree: "Computer Engineering",
      school: "Universidad Autónoma Metropolitana · 2014 — 2018",
      coursesLabel: "Courses:",
      courses: [
        { name: "AI for Brainstorming and Planning", url: "https://www.credly.com/badges/bf9ec647-423f-4f70-a804-04200900878a" },
        { name: "AI Fundamentals", url: "https://www.credly.com/badges/087ae33b-1022-43d6-94d5-ff2256cf3e47" },
        { name: "Introduction to Generative AI", url: "https://www.coursera.org/account/accomplishments/certificate/V4ADNFWSPRP8" },
        { name: "EF SET Certificate B2 English", url: "https://cert.efset.org/b3G39m" },
        { name: "ReactJS", url: "https://platzi.com/p/davirin96/curso/2444-react/diploma/detalle/" },
        { name: "PHP with Laravel", url: "https://platzi.com/p/davirin96/curso/1467-course/diploma/detalle/" }
      ],
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
