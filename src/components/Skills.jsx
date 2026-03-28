function Skills() {
  const skillCards = [
    {
      title: 'Technical Skills',
      subtitle: 'Core Focus - Software Development',
      color: '#7c3aed',
      items: [
        { label: 'Programming & Development', detail: 'HTML, CSS, JavaScript, React, Node.js, PHP' },
        { label: 'Database Management', detail: 'MySQL, PostgreSQL' },
        { label: 'Web Management', detail: 'Website development, hosting, CMS management' },
        { label: 'AI Integration', detail: 'Using AI tools to enhance projects, automate workflows, and build smart solutions' },
        { label: 'Software Tools', detail: 'Git/GitHub, VS Code, Canva, Notion' },
      ],
    },
    {
      title: 'Supporting Skills',
      subtitle: 'Marketing & Digital Presence',
      color: '#00bfa6',
      items: [
        { label: 'Social Media Management', detail: 'Content creation, scheduling, analytics, client support' },
        { label: 'Digital Marketing', detail: 'Strategy planning, audience engagement, brand growth' },
        { label: 'Digital Product Creation', detail: 'Planners, notebooks, templates' },
        { label: 'ICT Training', detail: 'Teaching software basics and online tools' },
      ],
    },
    {
      title: 'Soft Skills',
      subtitle: 'People & Mindset',
      color: '#f59e0b',
      items: [
        { label: 'Problem-solving', detail: 'Critical thinking and analytical approach' },
        { label: 'Creativity', detail: 'Design sense and innovative thinking' },
        { label: 'Collaboration', detail: 'Teamwork and cross-functional cooperation' },
        { label: 'Mentorship', detail: 'Community engagement and knowledge sharing' },
      ],
    },
  ]

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCards.map((card) => (
          <article className="skill-card" key={card.title}>
            <h3 style={{ color: card.color }}>{card.title}</h3>
            <p className="skill-subtitle">{card.subtitle}</p>
            <ul>
              {card.items.map((item) => (
                <li key={item.label}>
                  <span className="skill-label">{item.label}:</span> {item.detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
