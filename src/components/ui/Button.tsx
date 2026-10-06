import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn, scrollToId } from '../../lib/utils'

interface Props {
  variant?: 'solid' | 'outline'
  href?: string
  section?: string
  external?: boolean
  onClick?: () => void
  className?: string
  children: ReactNode
}

export default function Button({ variant = 'solid', href, section, external, onClick, className, children }: Props) {
  const cls = cn(
    'gb inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent2',
    variant === 'solid' ? 'bg-ink text-bg' : 'border border-line bg-bg/40 text-ink hover:bg-surface',
    className
  )
  const motionProps = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.98 } }
  if (section || href) {
    return (
      <motion.a
        href={section ? `#${section}` : href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={(e) => { if (section) { e.preventDefault(); scrollToId(section) } onClick?.() }}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }
  return <motion.button type="button" className={cls} onClick={onClick} {...motionProps}>{children}</motion.button>
}
