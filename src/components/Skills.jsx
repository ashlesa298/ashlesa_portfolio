import { Icons } from './iconMap'
import Section from './Section'
import Tilt from './Tilt'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => {
          const Icon = Icons[s.icon]
          return (
            <Tilt key={s.title} className="glass group p-5">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg transition group-hover:scale-110`}><Icon size={22} /></span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">{s.items.map((i) => <li key={i} className="chip">{i}</li>)}</ul>
            </Tilt>
          )
        })}
      </div>
    </Section>
  )
}
