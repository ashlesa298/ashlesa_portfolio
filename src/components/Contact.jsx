import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/portfolioData'

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.subject.trim()) e.subject = 'Enter a subject.'
    if (form.message.trim().length < 10) e.message = 'Write at least 10 characters.'
    return e
  }
  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    // No backend is configured: connect an email service (EmailJS, Formspree, your API) here.
    setSent(true); setForm(empty)
  }
  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-semibold">{label}</label>
      {props.rows
        ? <textarea id={name} value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })} aria-invalid={!!errors[name]} {...props} className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline focus:outline-2 focus:outline-brand-500 dark:border-white/15 dark:bg-white/5 dark:text-white" />
        : <input id={name} value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })} aria-invalid={!!errors[name]} {...props} className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline focus:outline-2 focus:outline-brand-500 dark:border-white/15 dark:bg-white/5 dark:text-white" />}
      {errors[name] && <p role="alert" className="mt-1 text-xs font-semibold text-rose-600">{errors[name]}</p>}
    </div>
  )
  const links = [
    [Mail, profile.email, `mailto:${profile.email}`], [Phone, profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`],
    [MapPin, profile.location], [Github, 'github.com/ashlesa298', profile.github], [Linkedin, 'linkedin.com/in/ashlesa', profile.linkedin],
  ]
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
        <ul className="glass space-y-4 p-6">
          {links.map(([Icon, text, href]) => (
            <li key={text} className="flex items-center gap-3 text-sm">
              <Icon size={18} className="shrink-0 text-brand-500" />
              {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="break-all font-semibold hover:text-brand-600">{text}</a> : <span className="font-semibold">{text}</span>}
            </li>
          ))}
        </ul>
        <form onSubmit={submit} noValidate className="glass space-y-4 p-6">
          {field('name', 'Name', { type: 'text', autoComplete: 'name' })}
          {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
          {field('subject', 'Subject', { type: 'text' })}
          {field('message', 'Message', { rows: 5 })}
          <button type="submit" className="btn-primary">Send Message</button>
          {sent && <p role="status" className="text-sm font-semibold text-emerald-600">Thanks, your message is ready. (Demo form: connect an email service to deliver it.)</p>}
        </form>
      </div>
    </Section>
  )
}
