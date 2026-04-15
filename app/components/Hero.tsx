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
            A dynamic and outcome-focused <strong>Python Full Stack Developer</strong> with <strong>{yearsOfExperience}+ years</strong> of professional experience. I specialize in architecting highly scalable web applications featuring <strong>React and Next.js</strong>, and robust REST/GraphQL APIs using <strong>Django</strong>, <strong>FastAPI</strong>, and <strong>Flask</strong>. My expertise extends to building complex backend infrastructures on <strong>AWS</strong>, integrating state-of-the-art <strong>AI Agents, LLMs, and NLP</strong> capabilities, and developing intelligent computer vision automation pipelines with <strong>OpenCV</strong>. I am passionate about writing clean, modular, and maintainable code that drives measurable business impact and ensures high-availability across cloud-native environments.
          </p>
          <div className="hero-ctas">
            <a href="mailto:kaleranamit@gmail.com" className="filter-btn active">Get in Touch</a>
            <a href="https://www.linkedin.com/in/amit-kumar-prajapati-314b58249/" target="_blank" rel="noopener noreferrer" className="filter-btn" style={{ marginLeft: '10px' }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
