import { ArrowRight, Mail, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-rose-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
              Available for freelance & remote roles
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Jefrianus Markus
            </h1>
            <p className="mt-3 text-lg text-slate-700">
              Full‑stack developer crafting reliable web apps with delightful user experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="mailto:hello@jefrianus-markus.web.id"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50"
              >
                <Mail size={18} /> Contact
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 p-1">
              <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl">👋</div>
                  <p className="mt-4 text-slate-700">
                    Passionate about TypeScript, React, Node.js, and cloud-native architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
