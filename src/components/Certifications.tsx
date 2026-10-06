import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { CERTIFICATIONS } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'
import GradientBorder from './ui/GradientBorder'

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Credentials" title="Certifications" />
        <div className="grid gap-4 md:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}>
              <GradientBorder className="flex items-center gap-5 rounded-2xl bg-surface p-6">
                <Award className="h-6 w-6 shrink-0 text-accent1" strokeWidth={1.5} aria-hidden />
                <div>
                  <h3 className="text-lg font-medium">{c.title}</h3>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
