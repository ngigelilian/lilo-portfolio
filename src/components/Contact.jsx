import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' })
      return
    }

    setIsSubmitting(true)

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        })

        if (!response.ok) {
          throw new Error('Submission failed')
        }

        setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const subject = encodeURIComponent(formData.subject)
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )
        window.location.href = `mailto:lilongige.online@gmail.com?subject=${subject}&body=${body}`
        setStatus({ type: 'success', message: 'Your email app was opened with your message draft.' })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Message could not be sent right now. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">

        <div className="contact-info">
          <div className="contact-main-card">
            <h3>Let's Work Together</h3>
            <p>I'm open to freelance projects, collaborations, and full-time opportunities. Feel free to reach out!</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <span>Email</span>
                  <p>lilongige.online@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div>
                  <span>Phone</span>
                  <p>+254 795 300 715</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <span>Location</span>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/lilian-ngige-0958b6233" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
              <a href="https://github.com/ngigelilian" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FaGithub /></a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button className="contact-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status.message && (
            <p className={`contact-form-status ${status.type}`} role="status">
              {status.message}
            </p>
          )}
        </form>

      </div>
    </section>
  )
}

export default Contact