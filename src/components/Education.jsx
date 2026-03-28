import { FaUniversity, FaGraduationCap, FaCertificate } from 'react-icons/fa'

function Education() {
  const education = [
    {
      icon: <FaUniversity size={30} />,
      institution: "KCA University",
      image: "/KCA.jpg",
      qualification: "Bachelor of Science in Information Technology",
      type: "Degree",
      color: "#7c3aed",
    },
    {
      icon: <FaGraduationCap size={30} />,
      institution: "Kiambu National Polytechnic",
      image: "/KINAP.jpg",
      qualification: "Diploma in Information Technology",
      type: "Diploma",
      color: "#00bfa6",
    },
    {
      icon: <FaCertificate size={30} />,
      institution: "Apprentice Cloud",
      image: "/apprentice_cloud.jpg",
      qualification: "Digital Apprenticeship Masterclass (DAM) Foundation Bootcamp",
      type: "Certificate",
      color: "#f59e0b",
    },
  ]

  return (
    <section id="education">
      <h2 className="section-title">Education & Certification</h2>
      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="education-info">
              <span className="education-type" style={{ color: item.color }}>{item.type}</span>
              {item.image && <img src={item.image} alt={item.institution} className="education-image" />}
              <h3>{item.institution}</h3>
              <p>{item.qualification}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education