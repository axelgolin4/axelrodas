import type { ReactNode } from "react";
import {
  certifications,
  education,
  jobs,
  languages,
  profile,
  skills,
} from "./data/cv";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./components/Icons";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <h2
        id={`${id}-title`}
        className="mb-6 text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase dark:text-teal-400"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full bg-stone-200/70 px-3 py-1 text-xs font-medium text-stone-700 dark:bg-stone-800 dark:text-stone-300">
      {children}
    </li>
  );
}

function Header() {
  return (
    <header className="flex flex-col gap-8 sm:flex-row sm:items-center">
      <div
        aria-hidden="true"
        className="grid size-24 shrink-0 place-items-center rounded-2xl bg-teal-700 text-3xl font-bold text-white shadow-lg shadow-teal-900/20 dark:bg-teal-500 dark:text-stone-950"
      >
        AR
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
          {profile.name}
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-300">{profile.title}</p>
        <p className="flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400">
          <PinIcon />
          {profile.location}
        </p>
      </div>
    </header>
  );
}

function Actions() {
  const link =
    "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600";
  const secondary = `${link} border border-stone-300 text-stone-700 hover:bg-stone-200/60 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800`;

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`mailto:${profile.email}`}
        className={`${link} bg-teal-700 text-white hover:bg-teal-800 dark:bg-teal-500 dark:text-stone-950 dark:hover:bg-teal-400`}
      >
        <MailIcon className="size-4" />
        Contáctame
      </a>
      <a href={profile.cv} download className={secondary}>
        <DownloadIcon className="size-4" />
        Descargar CV
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" className={secondary}>
        <GitHubIcon className="size-4" />
        GitHub
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" className={secondary}>
        <LinkedInIcon className="size-4" />
        LinkedIn
      </a>
    </div>
  );
}

function Experience() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="relative flex flex-col gap-10 border-l border-stone-300 pl-6 dark:border-stone-700">
        {jobs.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-teal-600 ring-4 ring-stone-50 dark:bg-teal-400 dark:ring-stone-950"
            />
            <p className="text-xs font-medium text-stone-500 dark:text-stone-400">
              {job.period} · {job.location}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-stone-900 dark:text-stone-50">
              {job.role}
              <span className="font-normal text-stone-500 dark:text-stone-400"> — {job.company}</span>
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-300">{job.description}</p>

            {job.projects && (
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {job.projects.map((project) => (
                  <div
                    key={project.name}
                    className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900"
                  >
                    <p className="font-semibold text-stone-900 dark:text-stone-100">{project.name}</p>
                    <p className="mt-1 text-sm leading-snug text-stone-600 dark:text-stone-400">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
              {job.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Sidebar() {
  return (
    <div className="flex flex-col gap-12">
      <Section id="habilidades" title="Habilidades">
        <div className="flex flex-col gap-5">
          {skills.map((skill) => (
            <div key={skill.group}>
              <h3 className="mb-2 text-sm font-semibold text-stone-900 dark:text-stone-100">{skill.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="educacion" title="Educación">
        <ul className="flex flex-col gap-4">
          {education.map((item) => (
            <li key={item.title}>
              <p className="font-semibold text-stone-900 dark:text-stone-100">{item.title}</p>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {item.school} · {item.period}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="certificaciones" title="Certificaciones">
        <ul className="flex flex-col gap-3">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{cert.name}</p>
              <p className="text-xs text-stone-500 dark:text-stone-400">{cert.issuer}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="idiomas" title="Idiomas">
        <ul className="flex flex-col gap-2">
          {languages.map((language) => (
            <li key={language.name} className="flex justify-between gap-4 text-sm">
              <span className="font-medium text-stone-900 dark:text-stone-100">{language.name}</span>
              <span className="text-stone-500 dark:text-stone-400">{language.level}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 dark:bg-stone-950 dark:text-stone-200">
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-8">
          <Header />
          <p className="max-w-3xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            {profile.summary}
          </p>
          <Actions />
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_300px]">
          <Experience />
          <Sidebar />
        </div>
      </main>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
        <a href={`mailto:${profile.email}`} className="hover:text-teal-700 dark:hover:text-teal-400">
          {profile.email}
        </a>
        <p className="mt-1">© {new Date().getFullYear()} {profile.fullName}</p>
      </footer>
    </div>
  );
}

export default App;
