import { motion } from 'framer-motion'
import { Code2, Globe, Brain, Database, Cpu, Wrench, type LucideIcon } from 'lucide-react'
import GradientBorder from './GradientBorder'

const ICONS: Record<string, LucideIcon> = { code: Code2, globe: Globe, brain: Brain, db: Database, cpu: Cpu, tool: Wrench }

export default function SkillCard({ icon, category, items, index }: { icon: string; category: string; items: string[]; index: number }) {
  const Icon = ICONS[icon] ?? Code2
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08 }} whileHover={{ y: -4 }} className="h-full">
      <GradientBorder className="h-full rounded-2xl bg-surface p-6">
        <Icon className="mb-6 h-5 w-5 text-accent1" strokeWidth={1.5} aria-hidden />
        <h3 className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">{category}</h3>
        <ul className="flex flex-wrap gap-2">
          {items.map((s) => (
            <li key={s} className="rounded-full border border-line bg-bg px-3 py-1 text-sm text-ink/90">{s}</li>
          ))}
        </ul>
      </GradientBorder>
    </motion.div>
  )
}
