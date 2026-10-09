import { motion, useReducedMotion } from 'framer-motion'

const particles = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 47) % 100}%`, top: `${20 + ((i * 31) % 75)}%`,
  size: 3 + (i % 3), dur: 9 + (i % 7) * 2, delay: -(i % 9),
}))

export default function Background() {
  const reduce = useReducedMotion()
  const drift = (x, y, d) => (reduce ? {} : { animate: { x: [0, x, 0], y: [0, y, 0] }, transition: { duration: d, repeat: Infinity, ease: 'easeInOut' } })
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#fbfaf6] via-[#f1f4ff] to-[#ece8ff] dark:from-[#0a0f1f] dark:via-[#0d1330] dark:to-[#150f33]">
      <div className="absolute inset-0 bg-grid" />
      <motion.div {...drift(60, 40, 18)} className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-400/40 to-indigo-300/20 blur-3xl" />
      <motion.div {...drift(-50, 60, 22)} className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-violet-400/40 to-fuchsia-300/20 blur-3xl" />
      <motion.div {...drift(40, -50, 26)} className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-sky-300/30 to-indigo-400/20 blur-3xl" />
      {particles.map((p, i) => (
        <span key={i} className="particle" style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }} />
      ))}
    </div>
  )
}
