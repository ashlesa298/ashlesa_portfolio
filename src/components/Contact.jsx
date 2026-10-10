
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/portfolioData'

const empty = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const SERVICE_ID = 'service_rdbbzo3'
const TEMPLATE_ID = 'template_ouodh5j'
const PUBLIC_KEY = 'stgWn146kYtd5YMTp'

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e = {}

    if (!form.name.trim()) {
      e.name = 'Enter your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Enter a valid email address.'
    }

    if (!form.subject.trim()) {
      e.subject = 'Enter a subject.'
    }

    if (form.message.trim().length < 10) {
      e.message = 'Write at least 10 characters.'
    }

    return e
  }

  const submit = async (ev) => {
    ev.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    setSent(false)

    if (Object.keys(validationErrors).length > 0) return

    setSending(true)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          reply_to: form.email.trim(),
        },
        { publicKey: PUBLIC_KEY }
      )

      setSent(true)
      setForm(empty)
      setErrors({})
    } catch (error) {
      console.error('EmailJS error:', error)
      alert(
        error?.text ||
        'Unable to send your message. Please try again or email me directly.'
      )
    } finally {
      setSending(false)
    }
  }

  const field = (name, label, props = {}) => (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-semibold"
      >
        {label}
      </label>

      {props.rows ? (
        <textarea
          id={name}
          name={name}
          value={form[name]}
          onChange={(e) =>
            setForm({ ...form, [name]: e.target.value })
          }
          aria-invalid={!!errors[name]}
          {...props}
          className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline focus:outline-2 focus:outline-brand-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
        />
      ) : (
        <input
          id={name}
          name={name}
          value={form[name]}
          onChange={(e) =>
            setForm({ ...form, [name]: e.target.value })
          }
          aria-invalid={!!errors[name]}
          {...props}
          className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 focus:outline focus:outline-2 focus:outline-brand-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
        />
      )}

      {errors[name] && (
        <p role="alert" className="mt-1 text-xs font-semibold text-rose-600">
          {errors[name]}
        </p>
      )}
    </div>
  )

  const links = [
    [Mail, profile.email, `mailto:${profile.email}`],
    [
      Phone,
      profile.phone,
      `tel:${(profile.phone || '').replace(/\s/g, '')}`,
    ],
    [MapPin, profile.location],
    [Github, 'github.com/ashlesa298', profile.github],
    [Linkedin, 'linkedin.com/in/ashlesa', profile.linkedin],
  ]

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
        <ul className="glass space-y-4 p-6">
          {links.map(([Icon, text, href]) => (
            <li
              key={String(text)}
              className="flex items-center gap-3 text-sm"
            >
              <Icon size={18} className="shrink-0 text-brand-500" />

              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="break-all font-semibold hover:text-brand-600"
                >
                  {text}
                </a>
              ) : (
                <span className="font-semibold">{text}</span>
              )}
            </li>
          ))}
        </ul>

        <form onSubmit={submit} noValidate className="glass space-y-4 p-6">
          {field('name', 'Name', {
            type: 'text',
            autoComplete: 'name',
            required: true,
          })}

          {field('email', 'Email', {
            type: 'email',
            autoComplete: 'email',
            required: true,
          })}

          {field('subject', 'Subject', {
            type: 'text',
            required: true,
          })}

          {field('message', 'Message', {
            rows: 5,
            required: true,
          })}

          <button
            type="submit"
            disabled={sending}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {sent && (
            <p role="status" className="text-sm font-semibold text-emerald-600">
              Thank you! Your message has been sent successfully.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}
