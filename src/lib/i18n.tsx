import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "es" | "en";

const translations = {
  es: {
    nav: {
      home: "Resumen profesional",
      skills: "Skills",
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
    about: {
      title: "Resumen profesional",
      p1: "Ingeniero de software Full Stack con más de 7 años de experiencia desarrollando, diseñando y desplegando aplicaciones web, plataformas digitales y soluciones backend escalables.",
      p2: "Actualmente enfocado en el desarrollo de productos modernos impulsados por Inteligencia Artificial, integrando modelos y servicios de IA dentro de aplicaciones web y flujos de negocio. Cuento con experiencia trabajando de extremo a extremo en productos digitales utilizando tecnologías como TypeScript, React, React Native, Node.js, Next.js y Supabase, así como en el diseño de APIs, arquitecturas backend, bases de datos y servicios en la nube.",
      p3: "Mi experiencia combina desarrollo Front-End, Back-End, Mobile, Cloud y DevOps, permitiéndome participar en todo el ciclo de vida de un producto: arquitectura, desarrollo, integraciones, infraestructura, automatización, deployment, monitoreo y optimización.",
      p4: "He trabajado con infraestructuras en AWS, Google Cloud, Azure y DigitalOcean, implementando soluciones con Docker, Kubernetes, OpenShift y GitHub Actions. También cuento con amplia experiencia diseñando y administrando bases de datos relacionales y no relacionales utilizando PostgreSQL, MySQL, Supabase y Elasticsearch.",
      p5: "A lo largo de mi carrera he participado y liderado equipos de desarrollo, definido arquitecturas técnicas, mejorado procesos de deployment y construido productos orientados a rendimiento, escalabilidad, mantenibilidad y experiencia de usuario.",
    },
    skills: {
      title: "Skills",
      intro:
        "Tecnologías y capacidades que utilizo para diseñar, construir y operar productos digitales de extremo a extremo.",
      groups: [
        {
          title: "Inteligencia artificial",
          items: [
            "Generative AI",
            "OpenAI API",
            "Gemini API",
            "RAG",
            "Vector Databases",
            "AI Agents",
            "MCP",
            "pgvector",
          ],
        },
        {
          title: "Lenguajes",
          items: ["TypeScript", "JavaScript", "Python", "PHP", "Java", "Bash"],
        },
        {
          title: "Frontend y mobile",
          items: ["React", "Next.js", "Vue.js", "Astro", "React Native", "Cross-platform Mobile"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Laravel", "Java Spring Boot", "REST APIs", "API Integration"],
        },
        {
          title: "Datos",
          items: [
            "PostgreSQL",
            "Supabase",
            "MySQL",
            "Elasticsearch",
            "Database Design",
            "Query Optimization",
          ],
        },
        {
          title: "Cloud y DevOps",
          items: [
            "AWS",
            "Google Cloud",
            "Azure",
            "DigitalOcean",
            "Docker",
            "Kubernetes",
            "OpenShift",
            "GitHub Actions",
            "CI/CD",
            "Linux",
            "Nginx",
          ],
        },
        {
          title: "Ingeniería de software",
          items: [
            "Software Architecture",
            "System Design",
            "Scalability",
            "Performance Optimization",
            "Technical Leadership",
            "Code Review",
          ],
        },
      ],
    },
    projects: {
      title: "Portafolio",
      viewProject: "Ver proyecto",
      gallery: "Galería del proyecto",
      site: "Sitio",
      repoLabel: (title: string) => `${title} repositorio`,
      demoLabel: (title: string) => `${title} demo en vivo`,
      items: [
        {
          title: "Modern Estates",
          description:
            "Plataforma de propiedades premium que centraliza la venta, documentación legal y firma digital para clientes nacionales e internacionales.",
          details:
            "Desarrollé una plataforma de venta de propiedades de gama alta con Laravel y arquitectura hexagonal, complementada por un frontend en Next.js. La solución utiliza PostgreSQL para la persistencia de datos y fue desplegada en DigitalOcean, con almacenamiento seguro de activos y expedientes legales en buckets compatibles con S3. Integré DocuSign para los procesos de firma digital y conecté WebSockets y Webhooks para reflejar actualizaciones de estado en tiempo real.",
          tags: ["Laravel", "Next.js", "PostgreSQL", "DigitalOcean", "DocuSign", "WebSockets"],
          preview:
            "https://s3.borendain.com/public/portfolio-web/modern-estates/01modern-estates.png",
          images: [
            "https://s3.borendain.com/public/portfolio-web/modern-estates/02modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/03modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/04modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/05modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/06modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/07modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/08modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/09modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/10modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/11modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/12modern-estates.png",
          ],
          siteUrl: "https://modernestates.borendain.com/",
          githubUrl: null,
        },
        {
          title: "Monitoreo de Antenas de Telecomunicación",
          description:
            "Sistema operativo para supervisar una red nacional de antenas, coordinar incidencias y facilitar el trabajo de campo en zonas marginadas.",
          details:
            "Construí una plataforma de control para la operación logística de estaciones base de telecomunicación. Implementé microservicios con Lumen, autenticación JWT, permisos por rol y documentación OpenAPI/Swagger para integrar los sistemas involucrados. Diseñé la base de datos en PostgreSQL y desarrollé capacidades geoespaciales con PostGIS y Leaflet para localizar antenas e incidencias, generar reportes y exportar información. Además, realicé el deployment en un VPS con Nginx y trabajé con contenedores Docker sobre OpenShift para mantener despliegues reproducibles y escalables.",
          tags: [
            "Lumen",
            "PostgreSQL",
            "PostGIS",
            "Leaflet",
            "JWT",
            "Docker",
            "OpenShift",
            "Nginx",
          ],
          preview: "https://s3.borendain.com/public/portfolio-web/antenas/01antenas.png",
          images: [
            "https://s3.borendain.com/public/portfolio-web/antenas/01antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/02antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/03antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/04antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/05antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/06antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/07antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/08antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/09antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/10antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/11antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/12antenas.png",
          ],
          siteUrl: null,
          githubUrl: null,
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
            "Desarrollo aplicaciones web y mobile Full Stack con TypeScript, React, React Native, Next.js, Node.js, Supabase, AstroJS y Strapi.",
            "Diseño, desarrollo y mantengo REST APIs y servicios backend con Node.js, Laravel y Java Spring Boot, incluyendo la modernización y migración de endpoints.",
            "Implemento soluciones e integraciones de Inteligencia Artificial en aplicaciones y flujos de negocio.",
            "Diseño soluciones backend y persistencia de datos con Supabase y PostgreSQL, orientadas a rendimiento y escalabilidad.",
            "Despliego y administro aplicaciones en AWS, Google Cloud, Azure y DigitalOcean con Docker, Kubernetes, autoscaling y entornos de producción y QA.",
            "Automatizo procesos de deployment mediante CI/CD y GitHub Actions para mejorar la consistencia de las entregas y la eficiencia del ciclo de desarrollo.",
          ],
        },
        {
          period: "2021 — 2023",
          title: "Lead BackEnd Developer",
          company: "INFOTEC — CDMX, México",
          points: [
            "Lideré el desarrollo de aplicaciones web seguras con Laravel, PHP, JavaScript, Vue.js y jQuery, aplicando prácticas de protección de datos.",
            "Diseñé arquitecturas de datos relacionales y no relacionales con PostgreSQL y Elasticsearch, mejorando en 30% la eficiencia de consultas y la escalabilidad.",
            "Gestioné mantenimiento y despliegues en RHEL y CentOS con Docker y Red Hat OpenShift, mejorando 25% la estabilidad y reduciendo 30% el downtime.",
            "Desarrollé automatizaciones para servidores con Python y Bash, reduciendo en 50% el tiempo dedicado a tareas operativas manuales.",
            "Lideré y mentoreé a un equipo de tres desarrolladores, participando en decisiones técnicas, resolución de problemas y entrega de proyectos.",
          ],
        },
        {
          period: "2019 — 2021",
          title: "Fullstack Junior Developer",
          company: "Presidencia de México — CDMX, México",
          points: [
            "Participé en el ciclo completo de aplicaciones web, desde levantamiento de requerimientos y diseño hasta implementación y deployment con Laravel, PHP, JavaScript, Vue.js y jQuery; las mejoras redujeron en 30% el tiempo operativo de los usuarios.",
            "Diseñé, implementé y mantuve bases de datos con PostgreSQL y MySQL, optimizando consultas, rendimiento e integridad de la información.",
            "Configuré y administré servidores web con Nginx en CentOS, Ubuntu Server y Fedora, utilizando Git para control de versiones y colaboración.",
          ],
        },
      ],
      education: "Educación",
      degree: "Ingeniería en Computación",
      school: "Universidad Autónoma Metropolitana · 2014 — 2018",
      coursesLabel: "Certificaciones e insignias",
      viewCredential: "Ver credencial",
      courses: [
        {
          name: "Google AI for Content Creation",
          issuer: "Google · Credly",
          url: "https://www.credly.com/earner/earned/badge/8d4c4c72-0cb0-4028-9508-6aebae81a2af",
        },
        {
          name: "Google AI for Brainstorming and Planning",
          issuer: "Google · Credly",
          url: "https://www.credly.com/badges/bf9ec647-423f-4f70-a804-04200900878a/public_url",
        },
        {
          name: "Google AI for Research and Insights",
          issuer: "Google · Credly",
          url: "https://www.credly.com/badges/3fd7ebc9-51be-47df-905f-02b4367b69b4/public_url",
        },
        {
          name: "Google AI for Writing and Communicating",
          issuer: "Google · Credly",
          url: "https://www.credly.com/badges/ef716010-a7d3-4c61-8aa9-9a48d79c3912/public_url",
        },
        {
          name: "Google AI Fundamentals",
          issuer: "Google · Credly",
          url: "https://www.credly.com/badges/087ae33b-1022-43d6-94d5-ff2256cf3e47/public_url",
        },
        {
          name: "Introduction to Generative AI",
          issuer: "Google · Coursera",
          url: "https://www.coursera.org/account/accomplishments/certificate/V4ADNFWSPRP8",
        },
        {
          name: "EF SET Certificate B2 English",
          issuer: "EF SET",
          url: "https://cert.efset.org/b3G39m",
        },
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
      home: "Professional Summary",
      skills: "Skills",
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
    about: {
      title: "Professional Summary",
      p1: "Full Stack Software Engineer with over 7 years of experience developing, designing, and deploying scalable web applications, digital platforms, and backend solutions.",
      p2: "I am currently focused on developing modern products driven by Artificial Intelligence, integrating AI models and services within web applications and business workflows. I have end-to-end experience in digital products using technologies such as TypeScript, React, React Native, Node.js, Next.js, and Supabase, as well as in API design, backend architectures, databases, and cloud services.",
      p3: "My experience combines Front-End, Back-End, Mobile, Cloud and DevOps development, allowing me to participate in the entire product lifecycle: architecture, development, integrations, infrastructure, automation, deployment, monitoring and optimization.",
      p4: "I have worked with infrastructures in AWS, Google Cloud, Azure and DigitalOcean, implementing solutions with Docker, Kubernetes, OpenShift and GitHub Actions. I also have extensive experience designing and managing relational and non-relational databases using PostgreSQL, MySQL, Supabase and Elasticsearch.",
      p5: "Throughout my career, I have participated in and led development teams, defined technical architectures, improved deployment processes and built products focused on performance, scalability, maintainability and user experience.",
    },
    skills: {
      title: "Skills",
      intro:
        "Technologies and capabilities I use to design, build, and operate end-to-end digital products.",
      groups: [
        {
          title: "Artificial intelligence",
          items: [
            "Generative AI",
            "OpenAI API",
            "Gemini API",
            "RAG",
            "Vector Databases",
            "AI Agents",
            "MCP",
            "pgvector",
          ],
        },
        {
          title: "Languages",
          items: ["TypeScript", "JavaScript", "Python", "PHP", "Java", "Bash"],
        },
        {
          title: "Frontend & mobile",
          items: ["React", "Next.js", "Vue.js", "Astro", "React Native", "Cross-platform Mobile"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Laravel", "Java Spring Boot", "REST APIs", "API Integration"],
        },
        {
          title: "Data",
          items: [
            "PostgreSQL",
            "Supabase",
            "MySQL",
            "Elasticsearch",
            "Database Design",
            "Query Optimization",
          ],
        },
        {
          title: "Cloud & DevOps",
          items: [
            "AWS",
            "Google Cloud",
            "Azure",
            "DigitalOcean",
            "Docker",
            "Kubernetes",
            "OpenShift",
            "GitHub Actions",
            "CI/CD",
            "Linux",
            "Nginx",
          ],
        },
        {
          title: "Software engineering",
          items: [
            "Software Architecture",
            "System Design",
            "Scalability",
            "Performance Optimization",
            "Technical Leadership",
            "Code Review",
          ],
        },
      ],
    },
    projects: {
      title: "Portfolio",
      viewProject: "View project",
      gallery: "Project gallery",
      site: "Site",
      repoLabel: (title: string) => `${title} repository`,
      demoLabel: (title: string) => `${title} live demo`,
      items: [
        {
          title: "Modern Estates",
          description:
            "A premium property platform that centralizes sales, legal documentation, and digital signatures for domestic and international clients.",
          details:
            "I developed a high-end property sales platform with Laravel and hexagonal architecture, paired with a Next.js frontend. The solution uses PostgreSQL for data persistence and runs on DigitalOcean, with secure storage for assets and legal records in S3-compatible buckets. I integrated DocuSign for digital-signature workflows and connected WebSockets and Webhooks to reflect status updates in real time.",
          tags: ["Laravel", "Next.js", "PostgreSQL", "DigitalOcean", "DocuSign", "WebSockets"],
          preview:
            "https://s3.borendain.com/public/portfolio-web/modern-estates/01modern-estates.png",
          images: [
            "https://s3.borendain.com/public/portfolio-web/modern-estates/02modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/03modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/04modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/05modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/06modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/07modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/08modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/09modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/10modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/11modern-estates.png",
            "https://s3.borendain.com/public/portfolio-web/modern-estates/12modern-estates.png",
          ],
          siteUrl: "https://modernestates.borendain.com/",
          githubUrl: null,
        },
        {
          title: "Telecommunications Antenna Monitoring",
          description:
            "An operations system for monitoring a nationwide antenna network, coordinating incidents, and supporting field work in underserved areas.",
          details:
            "I built an operations-control platform for a telecommunications base-station network. I implemented Lumen microservices, JWT authentication, role-based permissions, and OpenAPI/Swagger documentation to integrate the participating systems. I designed the PostgreSQL database and developed geospatial capabilities with PostGIS and Leaflet to locate antennas and incidents, generate reports, and export information. I also handled deployment on an Nginx VPS and worked with Docker containers on OpenShift to maintain reproducible, scalable releases.",
          tags: [
            "Lumen",
            "PostgreSQL",
            "PostGIS",
            "Leaflet",
            "JWT",
            "Docker",
            "OpenShift",
            "Nginx",
          ],
          preview: "https://s3.borendain.com/public/portfolio-web/antenas/01antenas.png",
          images: [
            "https://s3.borendain.com/public/portfolio-web/antenas/01antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/02antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/03antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/04antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/05antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/06antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/07antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/08antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/09antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/10antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/11antenas.png",
            "https://s3.borendain.com/public/portfolio-web/antenas/12antenas.png",
          ],
          siteUrl: null,
          githubUrl: null,
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
            "Developing full-stack web and mobile applications with TypeScript, React, React Native, Next.js, Node.js, Supabase, AstroJS, and Strapi.",
            "Designing, developing, and maintaining REST APIs and backend services with Node.js, Laravel, and Java Spring Boot, including endpoint modernization and migration.",
            "Implementing Artificial Intelligence solutions and integrations in applications and business workflows.",
            "Designing backend solutions and data persistence with Supabase and PostgreSQL, focused on performance and scalability.",
            "Deploying and administering applications on AWS, Google Cloud, Azure, and DigitalOcean with Docker, Kubernetes, autoscaling, and production and QA environments.",
            "Automating deployment processes through CI/CD and GitHub Actions to improve delivery consistency and development-cycle efficiency.",
          ],
        },
        {
          period: "2021 — 2023",
          title: "Lead BackEnd Developer",
          company: "INFOTEC — Mexico City, Mexico",
          points: [
            "Led the development of secure web applications with Laravel, PHP, JavaScript, Vue.js, and jQuery, applying data-protection practices.",
            "Designed relational and non-relational data architectures with PostgreSQL and Elasticsearch, improving query efficiency and scalability by 30%.",
            "Managed maintenance and deployments on RHEL and CentOS with Docker and Red Hat OpenShift, improving system stability by 25% and reducing downtime by 30%.",
            "Developed server automations with Python and Bash, reducing time spent on manual operational tasks by 50%.",
            "Led and mentored a team of three developers, contributing to technical decisions, problem solving, and project delivery.",
          ],
        },
        {
          period: "2019 — 2021",
          title: "Fullstack Junior Developer",
          company: "Presidencia de México — Mexico City, Mexico",
          points: [
            "Participated in the full web application lifecycle, from requirements gathering and design to implementation and deployment with Laravel, PHP, JavaScript, Vue.js, and jQuery; improvements reduced users' operational time by 30%.",
            "Designed, implemented, and maintained PostgreSQL and MySQL databases, optimizing queries, performance, and data integrity.",
            "Configured and administered Nginx web servers on CentOS, Ubuntu Server, and Fedora, using Git for version control and collaboration.",
          ],
        },
      ],
      education: "Education",
      degree: "Computer Engineering",
      school: "Universidad Autónoma Metropolitana · 2014 — 2018",
      coursesLabel: "Certifications & badges",
      viewCredential: "View credential",
      courses: [
        {
          name: "Google AI for Content Creation",
          issuer: "Google · Credly",
          url: "https://www.credly.com/earner/earned/badge/8d4c4c72-0cb0-4028-9508-6aebae81a2af",
        },
        {
          name: "Google AI for Brainstorming and Planning",
          issuer: "Google · Credly",
          url: "https://www.credly.com/badges/bf9ec647-423f-4f70-a804-04200900878a/public_url",
        },
        {
          name: "Google AI for Research and Insights",
          issuer: "Google · Credly",
          url: "https://www.credly.com/badges/3fd7ebc9-51be-47df-905f-02b4367b69b4/public_url",
        },
        {
          name: "Google AI for Writing and Communicating",
          issuer: "Google · Credly",
          url: "https://www.credly.com/badges/ef716010-a7d3-4c61-8aa9-9a48d79c3912/public_url",
        },
        {
          name: "Google AI Fundamentals",
          issuer: "Google · Credly",
          url: "https://www.credly.com/badges/087ae33b-1022-43d6-94d5-ff2256cf3e47/public_url",
        },
        {
          name: "Introduction to Generative AI",
          issuer: "Google · Coursera",
          url: "https://www.coursera.org/account/accomplishments/certificate/V4ADNFWSPRP8",
        },
        {
          name: "EF SET Certificate B2 English",
          issuer: "EF SET",
          url: "https://cert.efset.org/b3G39m",
        },
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
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
