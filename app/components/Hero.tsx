import Image from 'next/image'

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-avatar" data-aos="zoom-in">
            <Image
              src="/amit-photo-portrait.png"
              alt="Amit Kumar"
              width={140}
              height={140}
              priority
            />
          </div>
          <h1 className="hero-name" data-aos="fade-up">Amit Kumar</h1>
          <p className="hero-role" data-aos="fade-up" data-aos-delay="100">Python Full Stack Developer</p>
          <p className="hero-bio" data-aos="fade-up" data-aos-delay="200">
            Python Full Stack Developer with 3+ years of professional experience building scalable web applications using Django, FastAPI, and Flask. Specialized in architecting <strong>AI Agents</strong> and integrating <strong>LLMs</strong> using tools like <strong>Ollama</strong>, <strong>Antigravity</strong>, and <strong>Cursor</strong>. Strong expertise in <strong>Computer Vision (OpenCV)</strong>, <strong>NLP</strong>, and cloud-native solutions on AWS. Known for delivering robust, AI-driven backend systems with clean, modular code.
          </p>
          <div className="hero-ctas" data-aos="fade-up" data-aos-delay="300">
            <a href="mailto:kaleranamit@gmail.com" className="filter-btn active">Get in Touch</a>
            <a href="https://www.linkedin.com/in/amit-kumar-prajapati-314b58249/" target="_blank" rel="noopener noreferrer" className="filter-btn" style={{ marginLeft: '10px' }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
