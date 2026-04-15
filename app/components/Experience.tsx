const experiences = [
  {
    logo: 'LN',
    title: 'Python Developer',
    company: 'Laxmi Narayan (LN) Webworks Pvt. Ltd.',
    location: 'Ludhiana, Punjab',
    period: 'Aug 2024 – Present',
    achievements: [
      'Design, develop and maintain scalable backend systems using Django and Flask.',
      'Build secure, high-performance RESTful APIs for web and mobile applications.',
      'Implement authentication, authorization, middleware, and session handling.',
      'Optimize application performance to handle high traffic and large datasets.',
      'Integrate third-party services like payment gateways, email systems, and external APIs.',
      'Use Celery and background workers to process long-running tasks efficiently.',
      'Collaborate with front-end developers to ensure seamless API integration.',
    ],
  },
  {
    logo: 'AT',
    title: 'Python Developer',
    company: 'Aviox Technologies Pvt. Ltd.',
    location: 'Mohali, Punjab',
    period: 'Mar 2023 – Aug 2024',
    achievements: [
      'Developed and maintained backend applications using Python, Django, and Flask.',
      'Designed and implemented REST APIs for frontend-backend communication.',
      'Automated repetitive operational tasks using Python scripts, improving productivity by 20%.',
      'Deployed applications on AWS and Heroku, ensuring reliability and scalability.',
      'Integrated third-party APIs including payment gateways and authentication services.',
      'Debugged and resolved production issues to improve systems stability.',
    ],
  },
  {
    logo: 'PS',
    title: 'Python Developer Intern',
    company: 'Pyspiders',
    location: 'Basavanagudi, Bangalore',
    period: '6 Months (2022)',
    achievements: [
      'Learned Python fundamentals, data structures, and OOP concepts.',
      'Built small web applications using Django, HTML, CSS, and JavaScript.',
      'Worked on CRUD operations, form handling, and basic authentication.',
    ],
  },
]

export default function Experience() {
  return (
    <div className="experience-container" data-aos="fade-up">
      {experiences.map((exp, i) => (
        <div className="card exp-card" key={exp.company + i}>
          <div className="exp-header">
            <div className="exp-logo">{exp.logo}</div>
            <div className="exp-info">
              <h3>{exp.title}</h3>
              <p>{exp.company} | {exp.location}</p>
              <p style={{ fontSize: '0.8rem', marginTop: '4px', color: '#64748b' }}>{exp.period}</p>
            </div>
          </div>
          <div className="exp-achievements">
            <h4>Key Responsibilities & Achievements</h4>
            <ul className="exp-list">
              {exp.achievements.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
