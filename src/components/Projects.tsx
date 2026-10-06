import { PROJECTS } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'
import ProjectCard from './ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Selected Projects" title={<>Things I've <span className="font-display italic">built</span></>}
          sub="A selection of projects combining software engineering, AI, machine learning, and practical problem solving." />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} wide={i === 0} />)}
        </div>
      </div>
    </section>
  )
}
