'use client'
import { useState } from 'react'

const projects = [
  {
    cat: 'Backend/Security',
    title: 'RWTS Identity Verification Platform',
    desc: 'Secure identity verification system supporting 11 Australian document types via RapidID API. Achieved 98% verification accuracy with strong validation logic and admin dashboards.',
    tags: ['Django', 'React', 'RapidID API', 'JWT'],
  },
  {
    cat: 'Telecom/Automation',
    title: 'Trade-Connect Portal',
    desc: 'Telecom service orchestration platform integrating Superloop CAPI and SMILE API for NBN diagnostics and service sync with SAML 2.0 + JWT auth.',
    tags: ['Django', 'SAML 2.0', 'Superloop API', 'Celery'],
  },
  {
    cat: 'Fintech/Automation',
    title: 'RealWorldNetworks – ISP Billing Portal',
    desc: 'Complete ISP billing system with automated invoicing via Xero, eliminating manual billing entirely. Includes pro-rata billing and real-time financial tracking.',
    tags: ['Django', 'Xero API', 'Celery', 'PostgreSQL'],
  },
  {
    cat: 'AI/Automation',
    title: 'IQ-detector',
    desc: 'Developed backend logic and APIs, integrated third-party services, conducted performance tuning, and ensured seamless communication between systems.',
    tags: ['Python', 'APIs', 'Performance Tuning'],
  },
  {
    cat: 'Gaming/Web',
    title: 'Hagey-game-studio',
    desc: 'Designed backend architecture, developed RESTful APIs, managed database schemas, and performed unit testing to ensure stability and scalability.',
    tags: ['Backend Architecture', 'REST APIs', 'Unit Testing'],
  },
  {
    cat: 'Automation',
    title: 'Automation Scripts',
    desc: 'Created automation scripts for data scraping and processing, ensuring robustness, error handling, and improving productivity by automating repetitive tasks.',
    tags: ['Python', 'Web Scraping', 'Team Productivity'],
  },
  {
    cat: 'HR/Web',
    title: 'Talento (Job Portal)',
    desc: 'Developed and maintained backend services, created authentication modules, optimized database queries, and integrated APIs for external services.',
    tags: ['Django', 'Auth Modules', 'DB Optimization'],
  },
  {
    cat: 'AI/Real-time',
    title: 'AI Interview Bot',
    desc: 'Developed Django-based web applications with real-time features, implemented robust unit tests, and delivered scalable solutions with clean code.',
    tags: ['Django', 'Real-time', 'Clean Code'],
  },
  {
    cat: 'AI/Optimization',
    title: 'Pharma AI',
    desc: 'Refactored and optimized Django code, fixed bugs, and implemented updates to improve compliance with industry standards and reliability.',
    tags: ['Django', 'Refactoring', 'Compliance'],
  },
  {
    cat: 'Insurtech/Web',
    title: 'Livwell Insurance Portal',
    desc: 'Built a dynamic insurance platform using Django, developed RESTful APIs, implemented RBAC, and optimized workflows for claims management.',
    tags: ['Django', 'REST APIs', 'RBAC'],
  },
  {
    cat: 'Fintech/Internal',
    title: 'In-house HR Salary Calculator',
    desc: 'Designed payroll system using Django to automate deductions, bonuses, and leave adjustments, reducing manual errors by 90%.',
    tags: ['Django', 'Payroll Automation', 'Internal Tool'],
  },
  {
    cat: 'Automation',
    title: 'Current RMS Calendar Sync',
    desc: 'Automation engine using FastAPI and Celery integrating Current RMS API to sync rental opportunities into unified ICS calendar feeds.',
    tags: ['FastAPI', 'Celery', 'Calendar Sync'],
  },
]

export default function Projects() {
  const categories = ['All', 'Backend', 'AI/Automation', 'Fintech', 'HR/Web']
  const [filter, setFilter] = useState('All')

  return (
    <div data-aos="fade-up">
      <div className="proj-filters">
        {categories.map(c => (
          <button
            key={c}
            className={`filter-btn ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {projects
          .filter(p => {
            if (filter === 'All') return true
            return p.cat.toLowerCase().includes(filter.toLowerCase()) || 
                   p.title.toLowerCase().includes(filter.toLowerCase())
          })
          .map((p, i) => (
            <div className="card proj-card" key={p.title + i}>
              <p className="proj-cat">{p.cat}</p>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc" dangerouslySetInnerHTML={{ __html: p.desc }} />
              <div className="proj-tags">
                {p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
