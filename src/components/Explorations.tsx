import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X } from 'lucide-react'
import { EXPLORATIONS } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'

gsap.registerPlugin(ScrollTrigger)
type Item = (typeof EXPLORATIONS)[number]
const A = '#89AACC', B = '#4E85BF'

function Visual({ kind }: { kind: string }) {
  const common = 'h-full w-full'
  switch (kind) {
    case 'code':
      return (
        <div className="flex h-full w-full items-center bg-[#0d0d0d] p-6 font-mono text-[11px] leading-6 text-ink/70 sm:text-xs md:text-sm">
          <pre className="overflow-hidden"><span style={{ color: B }}>def</span> predict(url):{'\n'}{'    '}feats = extract(url){'\n'}{'    '}score = model.predict(feats){'\n'}{'    '}<span style={{ color: B }}>return</span> {'{'}"risk": score{'}'}{'\n\n'}<span className="text-muted"># typed, tested, readable</span></pre>
        </div>
      )
    case 'ai':
      return (
        <svg viewBox="0 0 200 200" className={common} style={{ background: '#0d0d0d' }} aria-hidden>
          {[40, 100, 160].flatMap((y1) => [30, 100, 170].map((y2) => <line key={`${y1}-${y2}`} x1="40" y1={y1} x2="100" y2={y2} stroke={B} strokeOpacity=".35" />))}
          {[30, 100, 170].flatMap((y1) => [60, 140].map((y2) => <line key={`b${y1}-${y2}`} x1="100" y1={y1} x2="160" y2={y2} stroke={A} strokeOpacity=".35" />))}
          {[40, 100, 160].map((y) => <circle key={`a${y}`} cx="40" cy={y} r="6" fill={A} />)}
          {[30, 100, 170].map((y) => <circle key={`m${y}`} cx="100" cy={y} r="6" fill={B} />)}
          {[60, 140].map((y) => <circle key={`o${y}`} cx="160" cy={y} r="6" fill={A} />)}
        </svg>
      )
    case 'ml':
      return (
        <svg viewBox="0 0 200 200" className={common} style={{ background: '#0d0d0d' }} aria-hidden>
          <path d="M20 20V180H185" stroke="#2a2a2a" fill="none" />
          <polyline points="25,160 55,120 85,128 115,80 145,62 178,34" fill="none" stroke={A} strokeWidth="2" />
          <polyline points="25,170 55,150 85,138 115,118 145,104 178,92" fill="none" stroke={B} strokeWidth="2" strokeDasharray="4 4" />
          {[[55,120],[85,128],[115,80],[145,62]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="3" fill={A} />)}
        </svg>
      )
    case 'arch':
      return (
        <svg viewBox="0 0 200 200" className={common} style={{ background: '#0d0d0d' }} aria-hidden>
          {[[20,80,'Client'],[80,80,'API'],[140,80,'Model'],[80,140,'DB']].map(([x,y,t]) => (
            <g key={String(t)}><rect x={x as number} y={y as number} width="44" height="28" rx="4" fill="none" stroke={B} /><text x={(x as number)+22} y={(y as number)+18} textAnchor="middle" fontSize="9" fill="#F5F5F5">{t}</text></g>
          ))}
          <path d="M64 94H80M124 94H140M102 108V140" stroke={A} />
        </svg>
      )
    case 'algo':
      return (
        <svg viewBox="0 0 200 200" className={common} style={{ background: '#0d0d0d' }} aria-hidden>
          {[40, 90, 60, 130, 110, 150, 75, 120].map((h, i) => <rect key={i} x={18 + i * 21} y={180 - h} width="14" height={h} rx="2" fill={i === 5 ? A : B} fillOpacity={i === 5 ? 1 : 0.45} />)}
        </svg>
      )
    default:
      return (
        <div className="flex h-full w-full flex-col justify-center gap-2 bg-[#0d0d0d] p-6 font-mono text-[11px] text-ink/70 sm:text-xs md:text-sm">
          <span className="text-muted">~/portfolio</span>
          <span><span style={{ color: B }}>$</span> git commit -m "ship it"</span>
          <span><span style={{ color: B }}>$</span> docker compose up</span>
          <span><span style={{ color: B }}>$</span> npm run dev</span>
          <span className="text-muted">ready in 412 ms</span>
        </div>
      )
  }
}

export default function Explorations() {
  const root = useRef<HTMLElement>(null)
  const [open, setOpen] = useState<Item | null>(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const trig = { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true }
      gsap.fromTo('.col-a', { yPercent: 4 }, { yPercent: -10, ease: 'none', scrollTrigger: trig })
      gsap.fromTo('.col-b', { yPercent: -10 }, { yPercent: 6, ease: 'none', scrollTrigger: trig })
      gsap.utils.toArray<HTMLElement>('.tilt').forEach((el, i) => {
        gsap.fromTo(el, { rotate: i % 2 ? -2 : 2 }, { rotate: i % 2 ? 2 : -2, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
    }, root)
    return () => mm.revert()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const card = (it: Item) => (
    <div key={it.kind} className="tilt">
      <motion.button type="button" onClick={() => setOpen(it)} whileHover={{ scale: 1.03 }}
        className="gb block w-full overflow-hidden rounded-2xl border border-line bg-surface text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent2" aria-label={`Open ${it.title}`}>
        <div className="aspect-[4/5] overflow-hidden rounded-t-2xl"><Visual kind={it.kind} /></div>
        <div className="p-4"><p className="font-medium">{it.title}</p><p className="text-sm text-muted">{it.sub}</p></div>
      </motion.button>
    </div>
  )

  return (
    <section id="explorations" ref={root} className="overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Explorations" title={<>Learning. <span className="font-display italic">Building.</span> Experimenting.</>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-10">
          <div className="col-a flex flex-col gap-6 lg:gap-10">{EXPLORATIONS.filter((_, i) => i % 2 === 0).map(card)}</div>
          <div className="col-b flex flex-col gap-6 sm:pt-0 lg:gap-10 lg:pt-24">{EXPLORATIONS.filter((_, i) => i % 2 === 1).map(card)}</div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={open.title}>
            <motion.div initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="aspect-[4/5] max-h-[75vh] w-full"><Visual kind={open.kind} /></div>
              <div className="p-5"><p className="font-display text-2xl italic">{open.title}</p><p className="text-sm text-muted">{open.sub}</p></div>
              <button type="button" onClick={() => setOpen(null)} className="absolute right-3 top-3 rounded-full bg-bg/80 p-2" aria-label="Close"><X className="h-4 w-4" /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
