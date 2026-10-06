import { motion } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'

const STATS = [
  { value: '8.87', label: 'CGPA', desc: 'Current B.Tech CGPA in Computer Science and Engineering.' },
  { value: String(PROJECTS.length), label: 'Major Projects', desc: 'AI, machine learning and full-stack projects built end to end.' },
  { value: '5+', label: 'Core Technology Areas', desc: 'Programming, web, AI/ML, backend & databases, CS fundamentals.' }
]

export default function Stats() {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 border-y border-line py-16 md:grid-cols-3 md:gap-0">
        {STATS.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }}
            className="md:border-l md:border-line md:px-10 md:first:border-l-0 md:first:pl-0">
            <p className="font-display text-7xl italic md:text-8xl">{s.value}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-ink">{s.label}</p>
            <p className="mt-2 max-w-xs text-sm text-muted">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
