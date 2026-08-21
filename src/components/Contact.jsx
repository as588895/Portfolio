import React from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact(){
  const formRef = React.useRef(null)
  const [status, setStatus] = React.useState('')

  function sendEmail(e){
    e.preventDefault()
    setStatus('sending')
    // TODO: replace serviceID, templateID, publicKey
    emailjs.sendForm('service_qo9snrd','template_8xb4h6b', formRef.current, 'ulXV5QKw2qt80B8kx')
      .then(()=>{ setStatus('sent'); formRef.current.reset() })
      // .catch(()=> setStatus('error'))
      .catch((err) => {
      console.log(err)
      setStatus('error')
    })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <span>06 / CONNECTION</span>
        <h2>Let&apos;s build something<br /><em>worth shipping.</em></h2>
      </div>
      <div className="contact-layout">
        <div className="contact-intro">
          <p>I&apos;m currently open to SDE internships and full-stack opportunities. Have a project, question, or idea? My inbox is open.</p>
          <div className="contact-availability"><i /> Currently available for work</div>
          <div className="contact-details">
            <a href="tel:+919260938583"><FiPhone /><span>Phone<strong>+91 92609 38583</strong></span></a>
            <a href="mailto:as588895@gmail.com"><FiMail /><span>Email<strong>as588895@gmail.com</strong></span></a>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/as588895" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href="https://linkedin.com/in/aman-singh-222364298/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="contact-form__topline"><span>Send a message</span><span>01</span></div>
          <label>Your name<input type="text" name="from_name" required placeholder="Aman, let's talk..." /></label>
          <label>Email address<input type="email" name="from_email" required placeholder="you@example.com" /></label>
          <label>Subject<input name="subject" placeholder="What can I help with?" /></label>
          <label>Message<textarea name="message" required placeholder="Tell me a little about your idea..." /></label>
          <button type="submit" className="contact-submit">{status === 'sending' ? 'Sending...' : 'Send message →'}</button>
          <p className="contact-status">{status === 'sent' && 'Message sent — thank you!'}{status === 'error' && 'Failed to send. Please try again.'}</p>
        </form>
      </div>
      <button
        type="button"
        className="contact-back-top"
        onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Back to top</span>
        <FiArrowUp aria-hidden="true" />
      </button>
    </section>
  )
}
