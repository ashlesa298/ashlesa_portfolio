import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav aria-label="Primary" className="glass mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        <a href="#home" className="font-display text-base font-bold text-slate-900 dark:text-white">{profile.name}</a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, href]) => (
            <li key={href}><a href={href} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">{label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="btn-ghost !p-2.5">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="btn-ghost !p-2.5 lg:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="glass mx-auto mt-2 max-w-6xl p-2 lg:hidden">
          {navLinks.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-semibold hover:bg-indigo-50 dark:hover:bg-white/10">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
