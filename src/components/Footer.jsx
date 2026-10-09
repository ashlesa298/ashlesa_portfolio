import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 text-center text-sm dark:border-white/10">
      © {new Date().getFullYear()} {profile.name}. Built with React, Vite, Tailwind CSS and Framer Motion.
    </footer>
  )
}
