export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  stack: string[];
  projects?: { name: string; description: string }[];
};

export type Education = {
  title: string;
  school: string;
  period: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export const profile = {
  name: "Axel Rodas",
  fullName: "Axel César Rodas Samayoa",
  title: "Ingeniero en Informática · Desarrollador Full Stack",
  location: "Guatemala",
  summary:
    "Desarrollador full stack apasionado por el aprendizaje continuo y la adopción de nuevas tecnologías. Me destaco por mi enfoque competitivo y mi habilidad para colaborar en equipo. Disfruto enfrentando retos y superando metas, y estoy comprometido con mi desarrollo profesional en el ámbito de la informática.",
  email: "axelgolin4@gmail.com",
  github: "https://github.com/axelgolin4",
  linkedin: "https://www.linkedin.com/in/axelrodas4",
  cv: "/cv-axel-rodas.pdf",
};

export const jobs: Job[] = [
  {
    role: "Analista de IT",
    company: "Componentes El Orbe",
    location: "Costa Rica",
    period: "Mar 2025 — Actualidad",
    description:
      "Especializado en el desarrollo de soluciones web con Laravel y React. Encargado de la creación y mantenimiento de sistemas internos, análisis de requerimientos, optimización de procesos y soporte técnico para garantizar la eficiencia y continuidad operativa.",
    stack: ["Laravel", "React", "SQL"],
  },
  {
    role: "Desarrollador Full Stack",
    company: "CARI Latinoamérica",
    location: "Guatemala",
    period: "Jul 2023 — Mar 2025",
    description:
      "Desarrollé en diversos proyectos de la empresa trabajando bajo SCRUM y con Git para el control de versiones. También participé en procesos de QA, apoyando en la certificación de desarrollos y la documentación técnica.",
    stack: ["Laravel", "Angular", "Livewire", "Filament", "SQL", "Scrum"],
    projects: [
      {
        name: "Muniplex",
        description:
          "Aplicación para municipalidades enfocada en la gestión de proyectos, reuniones y cobros.",
      },
      {
        name: "Colplex",
        description:
          "Plataforma educativa, en funcionamiento desde 2011, para la gestión académica y financiera de colegios.",
      },
      {
        name: "Nomiplex",
        description:
          "Sistema de nóminas, planillas y gestión de personal administrativo.",
      },
    ],
  },
  {
    role: "Practicante — Desarrollador",
    company: "Cian Coder",
    location: "Guatemala",
    period: "Jul 2022 — Dic 2022",
    description:
      "Seis meses de prácticas profesionales con desarrollo backend en Django y frontend en React. Como proyecto final desarrollé una solución para una clínica odontológica.",
    stack: ["Django", "React", "Python"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Lenguajes",
    items: ["JavaScript", "Python", "Java", "PHP", "HTML", "CSS"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "Angular", "Laravel", "NestJS", "Django", "Flask"],
  },
  { group: "Bases de datos", items: ["MySQL", "MongoDB"] },
  {
    group: "Herramientas",
    items: ["Git", "Docker", "Linux", "Tailwind", "Bootstrap", "Figma", "Metodologías ágiles"],
  },
];

export const education: Education[] = [
  {
    title: "Ingeniería en Informática y Sistemas",
    school: "Universidad Rafael Landívar",
    period: "2019 — 2024",
  },
  {
    title: "Bachiller en Computación",
    school: "Instituto de Estudios Avanzados",
    period: "2018",
  },
];

export const certifications: Certification[] = [
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft · 2022" },
  { name: "Desarrollo Backend con Python y Django", issuer: "Platzi" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp" },
  { name: "Curso Profesional de Git y GitHub", issuer: "Platzi" },
  { name: "QA y Automatización de Pruebas", issuer: "Platzi" },
];

export const languages: { name: string; level: string }[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2+ · Academia Europea" },
];
