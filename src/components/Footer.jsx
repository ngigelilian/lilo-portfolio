import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Ngige Lilian<span>.</span></h2>
          <p>Software Developer & Digital Strategist based in Nairobi, Kenya. Building meaningful digital experiences one line of code at a time.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p><FaEnvelope /> your@email.com</p>
          <div className="footer-socials">
            <a href="https://github.com/ngigelilian" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/lilian-ngige-0958b6233" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
            <a href="https://x.com/LilianNgige5" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile"><FaTwitter /></a>
            <a href="https://www.instagram.com/ngige_lilian" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ngige Lilian Wanjiru. All rights reserved.</p>
        <p>Designed & Built with ❤️ using React & Vite</p>
      </div>
    </footer>
  )
}

export default Footer