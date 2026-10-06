import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data/portfolio'
import { cn, scrollToId } from '../lib/utils'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const go = (id: string) => (e: React.MouseEvent) => { e.preventDefault(); setOpen(false); scrollToId(id) }
  const main = NAV.filter((n) => n.id !== 'contact')

  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4">
      <nav aria-label="Primary" className="relative w-full max-w-fit">
        <div className="flex items-center gap-2 rounded-full border border-line bg-bg/70 py-2 pl-2 pr-2 backdrop-blur-md md:gap-4">
          <a href="#home" onClick={go('home')} className="group flex items-center gap-3 rounded-full pr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent2" aria-label="Aravam Sireesha — home">
            <span className="h-9 w-9 rounded-full bg-accent p-px transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-rev">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-bg font-display text-sm italic">AS</span>
            </span>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-ink sm:block">Aravam</span>
          </a>
          <span className="hidden h-5 w-px bg-line md:block" />
          <ul className="hidden items-center gap-1 md:flex">
            {main.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={go(n.id)} className={cn('block rounded-full px-4 py-2 text-sm transition-colors hover:bg-surface hover:text-ink', active === n.id ? 'bg-surface text-ink' : 'text-muted')}>{n.label}</a>
              </li>
            ))}
          </ul>
          <span className="hidden h-5 w-px bg-line md:block" />
          <a href="#contact" onClick={go('contact')} className="gb hidden rounded-full border border-line px-5 py-2 text-sm text-ink md:block">Let's Connect ↗</a>
          <button type="button" className="rounded-full p-2 text-ink md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.ul initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="absolute left-0 right-0 top-full mt-2 rounded-3xl border border-line bg-bg/95 p-3 backdrop-blur-md md:hidden">
              {NAV.map((n) => (
                <li key={n.id}><a href={`#${n.id}`} onClick={go(n.id)} className={cn('block rounded-2xl px-4 py-3 text-sm', active === n.id ? 'bg-surface text-ink' : 'text-muted')}>{n.label}</a></li>
              ))}
              <li><a href="#contact" onClick={go('contact')} className="mt-2 block rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-bg">Let's Connect ↗</a></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
