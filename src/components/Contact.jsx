import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-10">
          <div className="md:flex md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Let’s build something great together
              </h2>
              <p className="mt-2 text-slate-600">
                I’m open to full‑time roles, contract work, and collaborations. Tell me about your project.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@jefrianus-markus.web.id"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700"
              >
                <Mail size={18} /> Email me
              </a>
              <a
                href="tel:+620000000000"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50"
              >
                <Phone size={18} /> Call
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Jefrianus Markus · All rights reserved
        </p>
      </div>
    </section>
  )
}
