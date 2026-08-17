export default function About() {
  const start = new Date('2023-02-26')
  const yearsOfExperience = ((new Date().getTime() - start.getTime()) / 31557600000).toFixed(1)

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-tag" data-aos="fade-up">About Me</div>
        <h2 className="section-title" data-aos="fade-up">
          Crafting Backend Systems<br />
          <span className="gradient-text">That Actually Scale</span>
        </h2>

        <div className="about-grid">
          <div className="about-text" data-aos="fade-right">
            <p>
              I am a dynamic and outcome-focused <strong>Python Full Stack Developer</strong> based in Ludhiana, Punjab with <strong>{yearsOfExperience} years of professional experience</strong>. I specialize in architecting highly scalable web applications, building dynamic frontends with <strong>React and Next.js</strong>, and developing robust REST/GraphQL APIs using <strong>Django, FastAPI, and Flask</strong>.
            </p>
            <p>
              My expertise extends to building complex backend infrastructures on <strong>AWS</strong>, integrating state-of-the-art <strong>AI Agents, LLMs, and NLP</strong> capabilities, and developing intelligent computer vision automation pipelines with <strong>OpenCV</strong>.
            </p>
            <p>
              At <strong>LN Webworks</strong> and previously at <strong>Aviox Technologies</strong>,
              I&apos;ve engineered solutions that handle millions of records, automated billing for ISPs,
              built identity verification platforms, and integrated complex telecoms APIs. I am passionate about writing clean, modular, and maintainable code that drives measurable business impact and ensures high-availability across cloud-native environments.
            </p>

            <div className="about-facts">
              {[
                ['📍', 'Ludhiana, Punjab, India'],
                ['💼', 'Open to opportunities'],
                ['🌐', 'English, Hindi, Punjabi'],
                ['🎓', 'B.Sc. + Python Certification'],
              ].map(([icon, text]) => (
                <div className="about-fact" key={text as string}>
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="about-btns">
              <a
                href="/Amit_Kumar_Resume_Backend_Focused.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
              <a
                href="https://github.com/amitprajapati07/amit-webworks-profile/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kumar-prajapati-314b58249/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="about-cards" data-aos="fade-left">
            {[
              { cls: 'ac-purple', icon: '🚀', title: 'Backend First', desc: 'Architecting robust, performant APIs that power products at scale using Django, FastAPI & Flask.' },
              { cls: 'ac-pink', icon: '⚛️', title: 'Modern Frontend', desc: 'Building responsive, dynamic user interfaces and full-stack web apps using React and Next.js.' },
              { cls: 'ac-cyan', icon: '☁️', title: 'Cloud Native', desc: 'Deploying and managing apps on AWS (EC2, S3, RDS, ECR, Lambda) with Docker containers.' },
              { cls: 'ac-amber', icon: '⚙️', title: 'Systems Thinker', desc: 'From Celery queues to SAML auth to payment gateways — integrating complex systems reliably.' },
            ].map(c => (
              <div className={`about-card ${c.cls}`} key={c.title}>
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
