import { Award } from 'lucide-react'
import Section from './Section'
import Tilt from './Tilt'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <Tilt key={c.name} className="glass flex items-start gap-4 p-5">
            <Award className="mt-1 shrink-0 text-violet2" />
            <div><h3 className="font-semibold">{c.name}</h3><p className="text-sm text-slate-600 dark:text-slate-400">{c.issuer}</p></div>
          </Tilt>
        ))}
      </div>
    </Section>
  )
}
