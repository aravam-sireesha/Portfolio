import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { JOURNAL } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'
import GradientBorder from './ui/GradientBorder'

export default function Journal() {
  return (
    <section id="journal" className="px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Journal" title={<>Recent <span className="font-display italic">Thoughts</span></>} />
        <div className="space-y-4">
          {JOURNAL.map((j, i) => (
            <motion.div key={j.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.06 }} whileHover={{ x: 6 }}>
              <GradientBorder className="group flex flex-col gap-4 rounded-2xl bg-surface p-6 md:flex-row md:items-center md:justify-between md:gap-8">
                <div className="md:max-w-xl">
                  <h3 className="text-lg font-medium md:text-xl">{j.title}</h3>
                  <p className="mt-1 text-sm text-muted">{j.desc}</p>
                </div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.15em] text-muted">
                  <span>{j.date}</span><span aria-hidden>·</span><span>{j.read}</span>
                  <ArrowUpRight className="hidden h-5 w-5 transition-colors group-hover:text-accent1 md:block" aria-hidden />
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
