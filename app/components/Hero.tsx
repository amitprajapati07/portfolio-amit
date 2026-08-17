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
            <a href="mailto:kaleranamit@gmail.com" className="filter-btn">Get in Touch</a>
            <a href="https://github.com/amitprajapati07/amit-webworks-profile/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="filter-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/amit-kumar-prajapati-314b58249/" target="_blank" rel="noopener noreferrer" className="filter-btn">LinkedIn</a>
            <a href="https://www.hackerrank.com/profile/kaleranamit" target="_blank" rel="noopener noreferrer" className="filter-btn">HackerRank</a>
          </div>
        </div>
      </div>
    </section>
  )
}
