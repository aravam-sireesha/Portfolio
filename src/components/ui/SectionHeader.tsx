import type { ReactNode } from 'react'
import AnimatedText from './AnimatedText'

export default function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <AnimatedText className="mb-14 max-w-3xl">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</p>
      <h2 className="text-4xl font-light leading-[1.1] tracking-tight md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 max-w-xl text-base text-muted md:text-lg">{sub}</p>}
    </AnimatedText>
  )
}
