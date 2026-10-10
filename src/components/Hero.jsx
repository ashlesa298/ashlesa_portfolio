
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Download,
  FolderGit2,
  Mail,
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Sparkles,
} from 'lucide-react'
import { profile, floatingTech, RESUME_URL } from '../data/portfolioData'

const techIcons = [Code2, Database, Cpu, Sparkles]

export default function Hero() {
  const reduce = useReducedMotion()
  const [activeTech, setActiveTech] = useState('Java')
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (reduce) return

    const rect = e.currentTarget.getBoundingClientRect()

    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 18,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -18,
    })
  }

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 })

  const technologies = [
    { name: 'Java', detail: 'Backend Development', color: '#f59e0b' },
    { name: 'React', detail: 'Interactive Interfaces', color: '#61dafb' },
    { name: 'Spring Boot', detail: 'REST APIs & Services', color: '#86efac' },
    { name: 'GenAI', detail: 'AI-Powered Applications', color: '#c4b5fd' },
  ]

  return (
    <section
      id="home"
      className="relative isolate mx-auto flex min-h-screen max-w-7xl items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-10"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]" />
        <div className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.5) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage:
              'radial-gradient(ellipse at center, black, transparent 75%)',
          }}
        />
      </div>

      <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-8">
        {/* LEFT: Introduction */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.07] px-4 py-2 text-sm text-violet-600 dark:text-violet-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Full-Time Opportunities
          </div>

          <p className="mb-3 font-mono text-sm tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
            HELLO, WORLD! I'M
          </p>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-6xl xl:text-7xl">
            {profile.name.split(' ')[0]}
            <br />
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="mt-6 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">
            <span className="text-violet-500">Full-Stack Developer</span>
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            I build modern web applications, secure REST APIs, and AI-powered
            experiences by combining clean code with creative problem-solving.
          </p>

          {/* Technology chips */}
          <div className="mt-7 flex flex-wrap gap-2">
            {['Java', 'Spring Boot', 'React.js', 'Node.js', 'Generative AI'].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.25 + i * 0.1 }}
                  className="rounded-lg border border-slate-300/70 bg-white/60 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                >
                  {tech}
                </motion.span>
              ),
            )}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={reduce ? {} : { y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20"
            >
              <FolderGit2 size={18} />
              Explore Projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

            <motion.a
              href={RESUME_URL}
              download
              whileHover={reduce ? {} : { y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-5 py-3.5 font-semibold text-slate-800 backdrop-blur-md transition-colors hover:border-violet-400 dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
            >
              <Download size={18} />
              Resume
            </motion.a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 font-semibold text-slate-600 transition-colors hover:text-violet-500 dark:text-slate-300"
            >
              <Mail size={18} />
              Contact
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-cyan-400" />
            Learning. Building. Improving.
          </div>
        </motion.div>

        {/* RIGHT: Interactive 3D-inspired scene */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto flex h-[440px] w-full max-w-[520px] items-center justify-center sm:h-[510px]"
          style={{ perspective: '1000px' }}
        >
          {/* Orbital rings */}
          <motion.div
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            className="absolute h-[300px] w-[300px] rounded-full border border-violet-400/30 sm:h-[370px] sm:w-[370px]"
            style={{ transform: 'rotateX(67deg) rotateZ(-15deg)' }}
          />

          <motion.div
            animate={reduce ? {} : { rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="absolute h-[250px] w-[350px] rounded-full border border-cyan-400/30 sm:h-[300px] sm:w-[430px]"
            style={{ transform: 'rotateY(62deg) rotateX(20deg)' }}
          />

          {/* Glowing center */}
          <motion.div
            animate={
              reduce
                ? {}
                : {
                    y: [0, -10, 0],
                    rotateZ: [0, 3, 0, -3, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-10 flex h-48 w-48 items-center justify-center sm:h-60 sm:w-60"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${mouse.y}deg) rotateY(${mouse.x}deg)`,
              transition: 'transform 180ms ease-out',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-violet-600/25 blur-3xl" />

            <div
              className="absolute inset-3 rounded-full border border-white/30 shadow-2xl"
              style={{
                background:
                  'radial-gradient(circle at 30% 24%, rgba(255,255,255,.9), rgba(167,139,250,.85) 8%, rgba(109,40,217,.9) 34%, rgba(30,41,100,.98) 70%, #020617 100%)',
                boxShadow:
                  'inset -18px -20px 40px rgba(0,0,0,.6), inset 12px 10px 28px rgba(255,255,255,.35), 0 0 55px rgba(139,92,246,.3)',
                transform: 'translateZ(20px)',
              }}
            />

            <div
              className="absolute inset-8 rounded-full border border-cyan-200/30"
              style={{
                transform: 'translateZ(45px) rotateX(60deg)',
              }}
            />

            <div
              className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/25 bg-slate-950/40 text-white shadow-xl backdrop-blur-xl sm:h-28 sm:w-28"
              style={{ transform: 'translateZ(65px)' }}
            >
              <Code2 size={54} strokeWidth={1.3} />
            </div>

            <span className="absolute -right-1 top-10 h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_24px_8px_rgba(34,211,238,.35)]" />
            <span className="absolute -bottom-1 left-10 h-3 w-3 rounded-full bg-fuchsia-300 shadow-[0_0_20px_7px_rgba(232,121,249,.35)]" />
          </motion.div>

          {/* Floating technology cards */}
          {floatingTech.slice(0, 4).map((tech, i) => {
            const Icon = techIcons[i]

            return (
              <motion.button
                key={tech}
                type="button"
                onClick={() => setActiveTech(tech)}
                whileHover={reduce ? {} : { scale: 1.08, z: 20 }}
                animate={
                  reduce
                    ? {}
                    : {
                        y: [0, i % 2 === 0 ? -12 : 12, 0],
                        rotateZ: [0, i % 2 === 0 ? 2 : -2, 0],
                      }
                }
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`absolute z-20 flex min-w-[135px] items-center gap-3 rounded-2xl border px-4 py-3 text-left shadow-xl backdrop-blur-xl transition-colors ${
                  activeTech === tech
                    ? 'border-violet-400/70 bg-violet-500/15'
                    : 'border-slate-300/60 bg-white/75 dark:border-white/15 dark:bg-slate-900/70'
                }`}
                style={{
                  top: i < 2 ? `${i === 0 ? 13 : 28}%` : 'auto',
                  bottom: i >= 2 ? `${i === 2 ? 23 : 12}%` : 'auto',
                  left: i % 2 === 0 ? '0%' : 'auto',
                  right: i % 2 === 1 ? '0%' : 'auto',
                  transform: `translateZ(${i * 12}px)`,
                }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-600 dark:text-cyan-300">
                  <Icon size={21} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-800 dark:text-white">
                    {tech}
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                    {i === 0
                      ? 'Backend'
                      : i === 1
                        ? 'Database'
                        : i === 2
                          ? 'Development'
                          : 'AI Integration'}
                  </span>
                </span>
              </motion.button>
            )
          })}

          {/* Interactive detail panel */}
          <motion.div
            layout
            className="absolute bottom-0 left-1/2 z-30 w-[90%] max-w-[330px] -translate-x-1/2 rounded-2xl border border-slate-300/60 bg-white/85 p-4 shadow-2xl backdrop-blur-2xl dark:border-white/15 dark:bg-slate-950/80"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Currently exploring
                </p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                  {activeTech}
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                Building
              </span>
            </div>

            <div className="mt-3 flex gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech.name}
                  type="button"
                  title={tech.detail}
                  onClick={() => setActiveTech(tech.name)}
                  className="h-1.5 flex-1 rounded-full transition-all"
                  style={{
                    backgroundColor:
                      activeTech === tech.name ? tech.color : '#64748b40',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

