import { Download } from 'lucide-react'
import Section from './Section'
import { resumeChips, RESUME_URL } from '../data/portfolioData'

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="glass flex flex-col items-start gap-6 p-6 sm:p-8">
        <ul className="flex flex-wrap gap-2">{resumeChips.map((c) => <li key={c} className="chip">{c}</li>)}</ul>
        <a href={RESUME_URL} download="Ashlesa_Behera_Resume.pdf" className="btn-primary"><Download size={18} /> Download Resume</a>
      </div>
    </Section>
  )
}
