import React from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const formRef = React.useRef(null)
  const [status, setStatus] = React.useState('')

  function sendEmail(e){
    e.preventDefault()
    setStatus('sending')
    // TODO: replace serviceID, templateID, publicKey
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(()=>{ setStatus('sent'); formRef.current.reset() })
      .catch(()=> setStatus('error'))
  }

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold">Let's Connect</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-muted">I'm currently looking for SDE internships and full-stack developer roles. Whether you have a question or just want to say hi, my inbox is always open.</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 p-5 bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-3 text-secondary dark:text-white font-semibold"><FiPhone /> Phone</div>
              <div className="text-sm text-muted mt-2">+91-9260938583</div>
            </div>
            <div className="rounded-3xl border border-slate-200 dark:border-slate-700 p-5 bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-3 text-secondary dark:text-white font-semibold"><FiMail /> Email</div>
              <div className="text-sm text-muted mt-2">as588895@gmail.com</div>
            </div>
            <div className="flex gap-3 mt-3">
              <a href="https://github.com/" className="btn-outline inline-flex items-center gap-2"><FiGithub /> GitHub</a>
              <a href="https://linkedin.com/in/aman-singh-222364298/" className="btn-outline inline-flex items-center gap-2"><FiLinkedin /> LinkedIn</a>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="contact-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input name="name" required placeholder="Name" className="w-full p-3 rounded border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950" />
            <input name="email" type="email" required placeholder="Email" className="w-full p-3 rounded border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full p-3 rounded border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 mt-3" />
          <textarea name="message" placeholder="Message" className="w-full p-3 rounded border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 h-40 mt-3" />
          <button type="submit" className="w-full btn-primary mt-3">Send Message</button>
          <div className="text-sm text-muted mt-2">{status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message sent — thank you!' : status === 'error' ? 'Failed to send.' : ''}</div>
        </form>
      </div>
    </section>
  )
}
