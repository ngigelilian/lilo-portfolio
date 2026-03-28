function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hey there...</p>
        <h1 className="hero-name">I'm Ngige Lilian Wanjiru</h1>
        <h2 className="hero-title">Software Developer & Digital Strategist.</h2>
        <p className="hero-description">
          I'm a software developer passionate about digital marketing, creativity, and meaningful impact.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn-primary">My Resume</a>
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/lilo.png" alt="Lilian" />
      </div>
    </section>
  )
}

export default Hero