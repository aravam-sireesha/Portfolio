import { motion } from 'framer-motion'
import { EDUCATION } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Background" title={<span className="font-display italic">Education</span>} />
        <ol className="relative border-l border-line pl-8 md:pl-12">
          {EDUCATION.map((e, i) => (
            <motion.li key={e.period} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: i * 0.05 }}
              className="relative grid gap-3 pb-16 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-10">
              <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent md:-left-[53px]" aria-hidden />
              <p className="font-display text-3xl italic text-ink/90">{e.period}</p>
              <div>
                <h3 className="text-xl font-medium md:text-2xl">{e.title}{e.field && <span className="text-muted"> — {e.field}</span>}</h3>
                <p className="mt-2 text-ink/80">{e.school}</p>
                <p className="text-sm text-muted">{e.place}</p>
                <p className="mt-4 inline-block rounded-full border border-line px-4 py-1 text-sm text-ink">{e.score}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
