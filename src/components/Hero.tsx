import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { useHLS } from '../hooks/useHLS'
import { HERO_VIDEO, PERSON, ROLES } from '../data/portfolio'
import { prefersReducedMotion } from '../lib/utils'
import Button from './ui/Button'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const { failed } = useHLS(videoRef, HERO_VIDEO)
  const [role, setRole] = useState(0)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', { opacity: 0, y: 50, duration: 1.2, ease: 'power3.out', stagger: 0.15 })
    }, nameRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-32">
      <div className="absolute inset-0 bg-bg" aria-hidden>
        {!failed && <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline aria-hidden />}
        {failed && <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%,rgba(78,133,191,.18),transparent 60%)' }} />}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">Computer Science Undergraduate</p>
        <h1 ref={nameRef} className="font-display text-[clamp(3.5rem,14vw,11rem)] italic leading-[0.9] tracking-tight">
          <span className="hero-line block">{PERSON.first}</span>
          <span className="hero-line block">{PERSON.last}</span>
        </h1>
        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-ink/80">{PERSON.tagline}</p>
        <p className="mt-5 flex items-baseline justify-center gap-3 text-xl md:text-3xl">
          <span className="text-muted">A</span>
          <span className="relative inline-block h-[1.3em] min-w-[10ch] overflow-hidden text-left">
            <AnimatePresence mode="wait">
              <motion.span key={role} className="font-display italic" initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-100%', opacity: 0 }} transition={{ duration: 0.5 }}>
                {ROLES[role]}
              </motion.span>
            </AnimatePresence>
          </span>
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
          Computer Science undergraduate with strong foundations in Python, Java, Data Structures, Machine Learning, and Full-Stack Development, focused on building practical and scalable technology solutions.
        </p>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Button section="projects" className="w-full sm:w-auto">View My Work</Button>
          <Button variant="outline" section="contact" className="w-full sm:w-auto">Let's Connect ↗</Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3" aria-hidden>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <span className="scroll-line block h-10 w-px bg-ink/60" />
      </div>
    </section>
  )
}
