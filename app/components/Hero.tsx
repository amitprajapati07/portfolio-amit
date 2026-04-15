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
            Python Full Stack Developer with {yearsOfExperience}+ years of professional experience building scalable web applications using Django, FastAPI, and Flask. Specialized in architecting <strong>AI Agents</strong> and integrating <strong>LLMs</strong> using tools like <strong>Ollama</strong>, <strong>Antigravity</strong>, and <strong>Cursor</strong>. Strong expertise in <strong>Computer Vision (OpenCV)</strong>, <strong>NLP</strong>, and cloud-native solutions on AWS. Known for delivering robust, AI-driven backend systems with clean, modular code.
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
