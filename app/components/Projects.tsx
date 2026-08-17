'use client'
import { useState } from 'react'

const featuredProjects = [
  {
    emoji: '🏢',
    cat: 'HR/Full-Stack',
    title: 'Kinetic HRMS',
    subtitle: 'Full-Stack Multi-Tenant HR Management System',
    desc: 'End-to-end HRMS covering the complete employee lifecycle — attendance, leaves, payroll, shifts, onboarding/offboarding, and approval workflows. Built with a Django REST Framework modular backend, React (Vite) frontend (20+ pages), multi-tenant architecture with JWT-based RBAC, and deployed via Docker Compose.',
    modules: [
      { icon: '📦', label: 'Core Modules' },
      { icon: '⚙️', label: 'Backend' },
      { icon: '🎨', label: 'Frontend' },
      { icon: '☁️', label: 'Infra' },
    ],
    tags: ['Django REST Framework', 'React (Vite)', 'Multi-Tenant', 'JWT RBAC', 'Docker Compose', 'PostgreSQL'],
    accent: 'featured-purple',
  },
  {
    emoji: '🎬',
    cat: 'AI/Automation',
    title: 'AI Reel Generator',
    subtitle: 'Auto-Generate Professional Instagram Reels with Full AI Pipeline',
    desc: 'Production-ready platform that converts a topic → complete 9:16 Instagram Reel with consistent character, voice, and visual style. Powered by a fully async Celery chord pipeline: GPT-4o script generation → DALL·E 3 character reference → Veo 3.1 concurrent scene generation → ElevenLabs voiceover → FFmpeg merge with subtitles & watermark → AWS S3 upload → React live-polling UI.',
    modules: [
      { icon: '🧠', label: 'AI Stack' },
      { icon: '⚙️', label: 'Backend' },
      { icon: '🎨', label: 'Frontend' },
      { icon: '☁️', label: 'Infra' },
    ],
    tags: ['GPT-4o', 'DALL·E 3', 'Veo 3.1', 'ElevenLabs', 'Celery', 'FFmpeg', 'AWS S3', 'React'],
    accent: 'featured-pink',
  },
]

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
    tags: ['Django', 'React', 'SAML 2.0', 'Superloop API', 'Celery'],
  },
  {
    cat: 'Fintech/Automation',
    title: 'RealWorldNetworks – ISP Billing Portal',
    desc: 'Complete ISP billing system with automated invoicing via Xero, eliminating manual billing entirely. Includes pro-rata billing and real-time financial tracking.',
    tags: ['Django', 'React', 'Xero API', 'Celery', 'PostgreSQL'],
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
  {
    cat: 'Automation',
    title: 'AI-Powered Apollo → Pipedrive Lead Automation',
    desc: 'End-to-end lead processing workflow that captures contacts from Apollo CRM, cleans and qualifies data, scores leads with Python, and routes them into the correct sales pipeline (Factoring, Funding, Advisory) in Pipedrive. Includes automated email outreach, activity logging, and real-time spreadsheet tracking across all branches.',
    tags: ['Zapier', 'Apollo CRM', 'Pipedrive', 'Python', 'Google Sheets', 'Email Automation'],
  },
]

export default function Projects() {
  const categories = ['All', 'Backend', 'AI', 'Automation', 'Fintech', 'HR/Web']
  const [filter, setFilter] = useState('All')

  return (
    <div data-aos="fade-up">
      {/* ── Featured Showcase Projects ── */}
      <div className="featured-projects-section">
        <div className="featured-projects-label">✦ Featured Builds</div>
        <div className="featured-projects-grid">
          {featuredProjects.map((p) => (
            <div className={`card featured-proj-card ${p.accent}`} key={p.title}>
              <div className="featured-proj-top">
                <span className="featured-proj-emoji">{p.emoji}</span>
                <span className="featured-proj-cat">{p.cat}</span>
              </div>
              <h3 className="featured-proj-title">{p.title}</h3>
              <p className="featured-proj-subtitle">{p.subtitle}</p>
              <p className="featured-proj-desc">{p.desc}</p>
              <div className="featured-proj-modules">
                {p.modules.map((m) => (
                  <span className="featured-module-badge" key={m.label}>
                    {m.icon} {m.label}
                  </span>
                ))}
              </div>
              <div className="proj-tags" style={{ marginTop: '16px' }}>
                {p.tags.map((t) => (
                  <span className="proj-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Filter + Regular Projects ── */}
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
          .filter(p => filter === 'All' || p.cat.toLowerCase().includes(filter.toLowerCase()))
          .map((p) => (
            <div className="card proj-card" key={p.title}>
              <p className="proj-cat">{p.cat}</p>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
