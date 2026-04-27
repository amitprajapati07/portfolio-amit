import { BsLaptop } from 'react-icons/bs'
import Image from 'next/image'

export default function IntroBanner() {
  return (
    <section className="intro-banner border-bottom">
      <div className="container intro-banner-inner">
        <div className="intro-banner-left" data-aos="fade-right">
          <div className="intro-icon-box">
            <BsLaptop size={20} color="#334155" />
          </div>
          <h3 className="intro-title">Python Full Stack Developer</h3>
          <p className="intro-description">
            I specialize in architecting and delivering scalable, cloud-native web applications for enterprise clients. Experienced in modern JavaScript ecosystems, Python frameworks, and cloud infrastructure.
          </p>
        </div>
        <div className="intro-banner-right" data-aos="fade-left">
          <Image
            src="/skills-animated.png"
            alt="Python Full Stack Developer Illustration"
            width={600}
            height={500}
            priority
            className="intro-illustration"
          />
        </div>
      </div>
    </section>
  )
}
