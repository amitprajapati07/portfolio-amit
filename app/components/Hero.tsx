import Image from 'next/image'

export default function Hero() {
  const start = new Date('2023-02-26')
  const yearsOfExperience = ((new Date().getTime() - start.getTime()) / 31557600000).toFixed(1)

  return (
    <section id="about" className="hero-split">
      <div className="container hero-split-inner">
        {/* Left: Image in portrait box frame */}
        <div className="hero-split-left" data-aos="fade-right">
          <div className="portrait-frame">
            <div className="frame-border" />
            <Image
              src="/amit-photo-portrait.png"
              alt="Amit Kumar"
              width={260}
              height={340}
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="hero-split-right" data-aos="fade-left">
          <h1 className="hero-name">Amit Kumar</h1>
          <p className="hero-role">Python Full Stack Developer</p>
          <p className="hero-bio">
            A dynamic and outcome-focused <strong>Python Full Stack Developer</strong> with <strong>{yearsOfExperience} years</strong> of professional experience. I specialize in architecting highly scalable web applications featuring <strong>React and Next.js</strong>, and robust REST/GraphQL APIs using <strong>Django</strong>, <strong>FastAPI</strong>, and <strong>Flask</strong>. My expertise extends to building complex backend infrastructures on <strong>AWS</strong>, integrating state-of-the-art <strong>AI Agents, LLMs, and NLP</strong> capabilities, and developing intelligent computer vision automation pipelines with <strong>OpenCV</strong>. I am passionate about writing clean, modular, and maintainable code that drives measurable business impact and ensures high-availability across cloud-native environments.
          </p>
          <div className="hero-ctas">
            <a
              href="/Amit_Kumar_Resume_Backend_Focused.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="filter-btn active"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <a href="mailto:kaleranamit@gmail.com" className="filter-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Get in Touch
            </a>
            <a href="https://github.com/amitprajapati07/amit-webworks-profile/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="filter-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amit-kumar-prajapati-314b58249/" target="_blank" rel="noopener noreferrer" className="filter-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://www.hackerrank.com/profile/kaleranamit" target="_blank" rel="noopener noreferrer" className="filter-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#00EA64' }}>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.252 16.5L8.4 12.75l1.5-1.5 1.848 1.848L16.1 8.25l1.5 1.5-5.852 6.75z" />
              </svg>
              HackerRank
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
