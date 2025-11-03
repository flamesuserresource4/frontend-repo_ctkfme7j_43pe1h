import { ExternalLink, Code } from 'lucide-react'

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Modern personal website with smooth sections, responsive layout, and accessible components.',
    tags: ['React', 'Tailwind', 'Vite'],
    link: '#',
  },
  {
    title: 'API Starter Kit',
    description:
      'Production-ready FastAPI template with auth, database, and testing utilities.',
    tags: ['FastAPI', 'MongoDB', 'Python'],
    link: '#',
  },
  {
    title: 'UI Component Library',
    description:
      'Reusable components following shadcn/ui conventions with motion and theming.',
    tags: ['TypeScript', 'Radix UI', 'Framer Motion'],
    link: '#',
  },
]

function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
      {children}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
            <p className="mt-2 text-slate-600">
              A selection of work that highlights problem‑solving and polish.
            </p>
          </div>
          <a
            href="mailto:hello@jefrianus-markus.web.id"
            className="hidden sm:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <Code size={18} /> Collaborate
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-36 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
