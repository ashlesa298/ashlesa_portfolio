import Section from './Section'
import { about } from '../data/portfolioData'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="glass max-w-3xl space-y-4 p-6 leading-relaxed sm:p-8">
        {about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  )
}
