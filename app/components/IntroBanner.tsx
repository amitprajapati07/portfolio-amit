import Image from 'next/image'
import { FiMail, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiHackerrank } from 'react-icons/si'

export default function IntroBanner() {
  const start = new Date('2023-02-26')
  const yearsOfExperience = ((new Date().getTime() - start.getTime()) / 31557600000).toFixed(1)

  return (
    <section className="intro-banner">
      {/* Ambient background glows & grid */}
      <div className="hero-bg-glow hero-bg-glow-left" />
      <div className="hero-bg-glow hero-bg-glow-right" />
      <div className="hero-grid-pattern" />

      <div className="container intro-banner-container">
        <div className="intro-banner-inner">
          <div className="intro-banner-left" data-aos="fade-right">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>Available for new opportunities</span>
            </div>

            <h1 className="intro-title">
              Hi, I’m Amit —<br />
              <span className="intro-title-role">
                Python Full Stack <span className="text-gradient">Engineer</span>
              </span>
            </h1>

            <p className="intro-description">
              I architect and deliver scalable, cloud-native web applications for enterprise clients — blending modern JavaScript, Python frameworks, and cloud infrastructure into products that perform.
            </p>

            <div className="hero-action-row">
              <div className="hero-main-ctas">
                <a href="mailto:kaleranamit@gmail.com" className="btn-primary">
                  <FiMail size={16} />
                  <span>Contact Me</span>
                </a>
                <a
                  href="/Amit_Kumar_Resume_Backend_Focused.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FiDownload size={16} />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="hero-social-links">
                <a
                  href="https://github.com/amitprajapati07/amit-webworks-profile/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-icon-btn"
                >
                  <FiGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-kumar-prajapati-314b58249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon-btn"
                >
                  <FiLinkedin size={16} />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/kaleranamit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HackerRank"
                  className="social-icon-btn"
                >
                  <SiHackerrank size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="intro-banner-right" data-aos="fade-left">
            <div className="intro-illustration-wrap">
              <div className="illustration-glow-backdrop" />
              <Image
                src="/skills-animated.png"
                alt="Python Full Stack Developer Illustration"
                width={620}
                height={520}
                priority
                className="intro-illustration intro-illustration-light"
              />
              <Image
                src="/skills-animated-dark.png"
                alt="Python Full Stack Developer Illustration Dark Mode"
                width={620}
                height={520}
                priority
                className="intro-illustration intro-illustration-dark"
              />
            </div>
          </div>
        </div>

        {/* Stats bottom row */}
        <div className="hero-stats-row" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-stat-item">
            <span className="stat-number">{yearsOfExperience}+</span>
            <span className="stat-label">Years Exp</span>
          </div>
          <div className="hero-stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Apps Shipped</span>
          </div>
          <div className="hero-stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>
    </section>
  )
}
