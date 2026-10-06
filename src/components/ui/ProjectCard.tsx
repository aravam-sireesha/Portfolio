import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import GradientBorder from './GradientBorder'
import type { Project } from '../../data/portfolio'

function Fallback({ mark }: { mark: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d]"
      style={{ backgroundImage: 'linear-gradient(#1E1E1E 1px,transparent 1px),linear-gradient(90deg,#1E1E1E 1px,transparent 1px)', backgroundSize: '32px 32px' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%,rgba(78,133,191,.22),transparent 60%)' }} />
      <span className="relative font-display text-8xl italic text-ink/80">{mark}</span>
    </div>
  )
}

export default function ProjectCard({ project, index, wide }: { project: Project; index: number; wide?: boolean }) {
  const [failed, setFailed] = useState(false)
  return (
    <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1 }} className={wide ? 'md:col-span-2' : ''}>
      <GradientBorder className="group rounded-2xl bg-surface">
        <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — view project`} className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent2">
          <div className="relative aspect-[2.08/1] overflow-hidden rounded-t-2xl bg-bg">
            {project.image && !failed ? (
              <img src={project.image} alt={project.alt} loading="lazy" onError={() => setFailed(true)}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            ) : (
              <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"><Fallback mark={project.mark} /></div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />
            <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1 rounded-full bg-ink px-4 py-2 text-xs font-medium text-bg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              View Project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-medium leading-snug md:text-2xl">{project.title}</h3>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent1" aria-hidden />
            </div>
            <p className="mt-3 text-sm text-muted md:text-base">{project.description}</p>
            <ul className="mt-5 grid gap-x-6 gap-y-1.5 text-sm text-ink/80 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent2" />{h}</li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</li>)}
            </ul>
          </div>
        </a>
      </GradientBorder>
    </motion.article>
  )
}
