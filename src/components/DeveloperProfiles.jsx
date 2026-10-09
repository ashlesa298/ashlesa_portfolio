import { Github, Linkedin } from 'lucide-react'
import Section from './Section'
import Tilt from './Tilt'
import { profile } from '../data/portfolioData'

const items = [
  { name: 'GitHub', Icon: Github, href: profile.github, label: 'github.com/ashlesa298' },
  { name: 'LinkedIn', Icon: Linkedin, href: profile.linkedin, label: 'linkedin.com/in/ashlesa' },
]

export default function DeveloperProfiles() {
  return (
    <Section id="profiles" title="Developer Profiles">
      <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
        {items.map(({ name, Icon, href, label }) => (
          <Tilt key={name} className="glass p-5">
            <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4">
              <Icon size={30} className="text-brand-500" />
              <span><span className="block font-semibold">{name}</span><span className="text-sm">{label}</span></span>
            </a>
          </Tilt>
        ))}
      </div>
    </Section>
  )
}
