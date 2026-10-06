import { SKILLS } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'
import SkillCard from './ui/SkillCard'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Skills" title={<>Technical <span className="font-display italic">Arsenal</span></>} sub="Technologies and fundamentals I work with." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => <SkillCard key={s.category} {...s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
