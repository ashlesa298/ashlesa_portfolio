import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <Section id="experience" title="Training & Experience" subtitle="Structured training and a virtual job simulation.">
      <ol className="relative ml-3 border-l-2 border-indigo-200 dark:border-white/15">
        {experience.map((e, i) => (
          <motion.li key={e.org} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="mb-10 ml-6 last:mb-0">
            <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-br from-brand-500 to-violet2 dark:border-[#0a0f1f]" />
            <div className="glass p-6">
              <p className="text-sm font-semibold text-brand-600 dark:text-indigo-300">{e.date} · {e.note}</p>
              <h3 className="mt-1 text-xl font-semibold">{e.org}</h3>
              <p className="font-semibold">{e.title}</p>
              <ul className="mt-3 flex flex-wrap gap-2">{e.points.map((p) => <li key={p} className="chip">{p}</li>)}</ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
