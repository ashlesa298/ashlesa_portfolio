import { ExternalLink, Github } from 'lucide-react'
import Section from './Section'
import Tilt from './Tilt'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <Tilt as="article" key={p.name} className="glass flex flex-col p-6">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-sm font-semibold text-brand-600 dark:text-indigo-300">{p.subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm marker:text-brand-500">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost !py-2"><Github size={16} /> GitHub</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary !py-2"><ExternalLink size={16} /> Live Demo</a>}
            </div>
          </Tilt>
        ))}
      </div>
    </Section>
  )
}
