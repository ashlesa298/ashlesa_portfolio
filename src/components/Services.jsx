import { Icons } from './iconMap'
import Section from './Section'
import Tilt from './Tilt'
import { services } from '../data/portfolioData'

export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = Icons[s.icon]
          return (
            <Tilt key={s.title} className="glass p-5">
              <Icon className="text-brand-500" size={26} />
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.text}</p>
            </Tilt>
          )
        })}
      </div>
    </Section>
  )
}
