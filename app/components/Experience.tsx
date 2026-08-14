'use client'

function getElapsed(startDate: Date, endDate: Date | null): string {
  const end = endDate ?? new Date()
  const totalMonths =
    (end.getFullYear() - startDate.getFullYear()) * 12 +
    (end.getMonth() - startDate.getMonth())
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
  return parts.join(' ') || '< 1 mo'
}

function formatMonth(d: Date): string {
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}

const experiences = [
  {
    logo: 'LN',
    title: 'Python Developer — Backend & AI Automation',
    company: 'Laxmi Narayan (LN) Webworks Pvt. Ltd.',
    location: 'Ludhiana, Punjab',
    startDate: new Date('2025-03-01'),
    endDate: null,
    achievements: [
      'Engineered asynchronous task processing pipelines using Celery, Redis, and FastAPI, cutting high-volume background processing latency by 40%.',
      'Containerized microservices with Docker and AWS (ECR/EC2), configuring Nginx/Gunicorn load balancing that sustained 99.9% production uptime.',
      'Implemented AI agent pipelines (Ollama/LLMs) to automate data extraction and downstream workflow triggers, cutting manual processing time and freeing the team to focus on higher-value work.',
      'Delivered WebSocket-based real-time features for web and mobile apps, plus integrations with payment gateways, Xero accounting, and email systems.',
      'Developed and maintained backend systems for the TradeConnect Portal, ISP Billing Portal, and RWTS Identity Verification Platform, with light React work on admin dashboards.',
      'Mentored junior developers on Django best practices, system design, and security, raising the team\'s overall code-quality standard.',
    ],
  },
  {
    logo: 'TW',
    title: 'Python Django Developer',
    company: 'Tekki Web Solutions',
    location: 'Ludhiana, Punjab',
    startDate: new Date('2024-08-01'),
    endDate: new Date('2025-02-28'),
    achievements: [
      'Engineered backend services for LivWell, an insurance portal platform covering policy management, user onboarding, and claims workflows, reducing manual handling for the operations team.',
      'Integrated Stripe and Razorpay payment gateways to support secure, multi-provider premium payments, reducing failed-transaction follow-up and simplifying reconciliation.',
    ],
  },
  {
    logo: 'AT',
    title: 'Python Developer',
    company: 'Aviox Technologies Pvt. Ltd.',
    location: 'Mohali, Punjab',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2024-08-01'),
    achievements: [
      'Created and maintained backend applications in Django and Flask following RESTful API design patterns.',
      'Managed relational (PostgreSQL, MySQL) and NoSQL (MongoDB, DynamoDB) databases with optimized query strategies.',
      'Automated repetitive operational workflows using Python scripts, improving team productivity by 20%.',
      'Deployed applications on AWS (EC2, S3, RDS) and Heroku; established Docker and CI/CD pipelines for reliable, scalable releases.',
    ],
  },
]

export default function Experience() {
  return (
    <div className="experience-container" data-aos="fade-up">
      {experiences.map((exp, i) => {
        const elapsed = getElapsed(exp.startDate, exp.endDate)
        const period = exp.endDate
          ? `${formatMonth(exp.startDate)} – ${formatMonth(exp.endDate)} · ${elapsed}`
          : `${formatMonth(exp.startDate)} – Present · ${elapsed}`

        return (
          <div className="card exp-card" key={exp.company + i}>
            <div className="exp-header">
              <div className="exp-logo">{exp.logo}</div>
              <div className="exp-info">
                <h3>{exp.title}</h3>
                <p>{exp.company} | {exp.location}</p>
                <p className="exp-period">{period}</p>
              </div>
            </div>
            <div className="exp-achievements">
              <h4>Key Responsibilities &amp; Achievements</h4>
              <ul className="exp-list">
                {exp.achievements.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
