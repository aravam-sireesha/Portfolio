import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export default function GradientBorder({ children, className, always }: { children: ReactNode; className?: string; always?: boolean }) {
  return <div className={cn('gb border border-line', always && 'gb-always', className)}>{children}</div>
}
