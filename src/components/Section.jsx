import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  )
}
