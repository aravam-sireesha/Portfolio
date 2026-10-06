import { Github, Linkedin, Mail } from 'lucide-react'
import { PERSON } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-3xl italic">{PERSON.name}</p>
          <p className="mt-2 text-sm text-muted">{PERSON.tagline}</p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-ink/80">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" /></span>
            Open to opportunities
          </p>
        </div>
        <ul className="flex gap-6 text-sm text-muted">
          <li><a className="inline-flex items-center gap-2 hover:text-ink" href={PERSON.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a></li>
          <li><a className="inline-flex items-center gap-2 hover:text-ink" href={PERSON.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" />GitHub</a></li>
          <li><a className="inline-flex items-center gap-2 hover:text-ink" href={`mailto:${PERSON.email}`}><Mail className="h-4 w-4" />Email</a></li>
        </ul>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
        <p>© 2026 Aravam Sireesha</p>
        <p>Built with React, TypeScript &amp; curiosity.</p>
      </div>
    </footer>
  )
}
