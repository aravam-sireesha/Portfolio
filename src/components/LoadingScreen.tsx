import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const WORDS = ['Code', 'Build', 'Innovate']
const DURATION = 2700

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState(0)

  useEffect(() => {
    let raf = 0
    let timer: number | undefined
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1)
      setCount(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else timer = window.setTimeout(onComplete, 400)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); clearTimeout(timer) }
  }, [onComplete])

  useEffect(() => {
    const id = window.setInterval(() => setWord((w) => (w + 1) % WORDS.length), 900)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div className="fixed inset-0 z-[200] bg-bg" exit={{ opacity: 0 }} transition={{ duration: 0.7 }} role="status" aria-label="Loading portfolio">
      <p className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-12 md:top-10">Portfolio</p>
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span key={word} className="font-display text-6xl italic text-ink/90 md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45 }}>
            {WORDS[word]}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="absolute bottom-10 right-6 font-display text-6xl italic tabular-nums text-ink md:right-12 md:text-8xl">{String(count).padStart(3, '0')}</p>
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-line">
        <div className="h-full bg-accent" style={{ width: `${count}%` }} />
      </div>
    </motion.div>
  )
}
