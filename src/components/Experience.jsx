import { FaBullhorn, FaCode, FaChalkboardTeacher } from 'react-icons/fa'

function Experience() {
  const experiences = [
    {
      role: "Social Media & Digital Marketing",
      type: "Freelance / Projects",
      color: "#7c3aed",
      icon: <FaBullhorn size={28} />,
      points: [
        "Managed social media accounts for small businesses, creating engaging content and improving online presence.",
        "Designed digital products (planners, notebooks, templates) and distributed them online.",
        "Used marketing strategies to grow engagement and maintain consistent brand messaging.",
      ]
    },
    {
      role: "Software & Web Development",
      type: "Projects",
      color: "#00bfa6",
      icon: <FaCode size={28} />,
      points: [
        "Built small web applications integrating AI tools for smarter user experiences.",
        "Developed personal and client websites using HTML, CSS, JavaScript, and React.",
        "Hands-on experience with databases and CMS to ensure smooth data flow and site functionality.",
      ]
    },
    {
      role: "ICT Training & Mentorship",
      type: "Community / Volunteer",
      color: "#f59e0b",
      icon: <FaChalkboardTeacher size={28} />,
      points: [
        "Conducted training sessions for peers and small groups in software basics and digital tools.",
        "Guided individuals on building projects, managing online tools, and leveraging digital skills.",
      ]
    },
  ]

  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.role}>
            <div className="experience-content">
              <div className="experience-header">
                <div className="experience-icon" style={{ color: exp.color }}>
                  {exp.icon}
                </div>
                <div>
                  <h3 style={{ color: exp.color }}>{exp.role}</h3>
                  <p className="experience-type">{exp.type}</p>
                </div>
              </div>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

