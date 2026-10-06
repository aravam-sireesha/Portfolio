import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { PERSON } from '../data/portfolio'
import { prefersReducedMotion } from '../lib/utils'
import AnimatedText from './ui/AnimatedText'
import Button from './ui/Button'

function Marquee() {
  const track = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.to(track.current, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
    })
    return () => ctx.revert()
  }, [])
  return (
    <div className="overflow-hidden border-y border-line py-6" aria-hidden>
      <div ref={track} className="flex w-max whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="font-display text-5xl italic text-ink/15 md:text-8xl">BUILDING THE FUTURE •&nbsp;</span>
        ))}
      </div>
    </div>
  )
}

export default function Contact() {
  const links = [
    { href: PERSON.linkedin, label: 'LinkedIn', Icon: Linkedin, ext: true },
    { href: PERSON.github, label: 'GitHub', Icon: Github, ext: true },
    { href: `mailto:${PERSON.email}`, label: PERSON.email, Icon: Mail },
    { href: `tel:+91${PERSON.phone}`, label: PERSON.phone, Icon: Phone }
  ]
  return (
    <section id="contact" className="pt-24 md:pt-32">
      <div className="mx-auto max-w-4xl px-6 pb-24 text-center md:pb-32">
        <AnimatedText>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">Contact</p>
          <h2 className="text-4xl font-light leading-[1.1] tracking-tight md:text-7xl">Let's build something <span className="font-display italic">meaningful.</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg">Open to software engineering, AI/ML, and full-stack development opportunities.</p>
          <div className="mt-10 flex justify-center">
            <Button href={`mailto:${PERSON.email}`} className="gb-always">Get in touch ↗</Button>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-ink/80">
            {links.map(({ href, label, Icon, ext }) => (
              <li key={label}>
                <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="inline-flex items-center gap-2 transition-colors hover:text-accent1">
                  <Icon className="h-4 w-4" aria-hidden />{label}
                </a>
              </li>
            ))}
          </ul>
        </AnimatedText>
      </div>
      <Marquee />
    </section>
  )
}
