function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      description: "A personal portfolio website built with React and Vite showcasing my skills, experience, and projects.",
      tech: ["React", "CSS", "Vite"],
      color: "#7c3aed",
      link: "#"
    },
    {
      title: "EcoHealth Sentinel",
      image: "/ecohealth.png",
      description: "EcoHealth Sentinel is a low-bandwidth, AI-powered environmental health early warning platform that enables communities and health workers to report environmental hazards and transforms this data into real-time health risk insights for authorities.",
      tech: ["JavaScript", "React", "AI Tools"],
      color: "#00bfa6",
      link: "https://ecohealthsentinel.vercel.app"
    },
    {
      title: "Summit Accounting System",
      description: "A comprehensive desktop accounting application designed for small businesses, built with JavaFX and embedded H2 database. Works like QuickBooks with role-based access control, double-entry bookkeeping, and comprehensive financial reporting.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "#f59e0b",
      link: "https://github.com/ngigelilian/AccountingSystem/tree/main"
    },

    {
      title: "RAIA Guide",
      image: "/raia-guide.png",
      description: "Firebase Studio Project:Your Guide to Kenyan Government Services RaiaGuide simplifies access to government services. Find out what you need, where to go, and how much it costs, all in one place.",
      tech: ["Firebase", "JavaScript", "HTML", "CSS"],
      color: "#e25822",
      link: "https://studio--studio-9673021452-db216.us-central1.hosted.app"
    },
  ]

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-top" style={{ borderTop: `4px solid ${project.color}` }}>
              {project.image && <img src={project.image} alt={project.title} className="project-image" />}
              <h3 style={{ color: project.color }}>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-bottom">
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} style={{ borderColor: project.color, color: project.color }}>
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link" style={{ color: project.color }}>
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects