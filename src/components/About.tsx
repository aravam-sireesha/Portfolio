import { motion } from 'framer-motion'
import { DETAILS, PERSON } from '../data/portfolio'
import AnimatedText from './ui/AnimatedText'

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }}
          className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-3xl bg-gradient-to-br from-accent1/40 via-line to-accent2/40 p-px">
            <div className="overflow-hidden rounded-3xl bg-surface">
              <img src={PERSON.portrait} alt="Portrait of Aravam Sireesha" loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover transition-transform duration-700 ease-out hover:scale-[1.02]" />
            </div>
          </div>
        </motion.div>

        <div>
          <AnimatedText>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">About Me</p>
            <h2 className="text-4xl font-light leading-[1.1] tracking-tight md:text-5xl">
              Building practical software with AI, problem-solving, and <span className="font-display italic">purpose.</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-ink/70 md:text-lg">
            <p>I'm Aravam Sireesha, a Computer Science undergraduate at Siddartha Institute of Science and Technology, Puttur, with a strong interest in Software Development, Artificial Intelligence, Machine Learning, and Full-Stack Development.</p>
            <p>I enjoy turning ideas into practical applications while strengthening my foundations in Java, Python, Data Structures &amp; Algorithms, Web Development, and Machine Learning. My goal is to build scalable, reliable, and user-focused software solutions.</p>
          </AnimatedText>
          <dl className="mt-12 border-t border-line">
            {DETAILS.map(([k, v], i) => (
              <motion.div key={k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">{k}</dt>
                <dd className="text-sm text-ink md:text-base">{v}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
