import { GraduationCap } from 'lucide-react'
import Section from './Section'
import Tilt from './Tilt'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e) => (
          <Tilt key={e.degree} className="glass p-6">
            <GraduationCap className="text-brand-500" />
            <h3 className="mt-3 font-semibold">{e.degree}</h3>
            <p className="mt-1 text-sm">{e.school}</p>
            <p className="mt-3 text-sm font-semibold text-brand-600 dark:text-indigo-300">{e.year} · {e.score}</p>
          </Tilt>
        ))}
      </div>
    </Section>
  )
}
