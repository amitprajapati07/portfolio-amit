import Navbar       from './components/Navbar'
import IntroBanner   from './components/IntroBanner'
import Hero         from './components/Hero'
import Skills       from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Certificates from './components/Certificates'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import AosInit    from './components/AosInit'

export default function Page() {
  return (
    <>
      <AosInit />
      <Navbar />
      <main>
        <IntroBanner />
        <Hero />
        <section id="skills" className="section section-no-bottom-pad">
          <div className="container">
            <h2 className="section-title"><span>⚙️</span> Skills</h2>
            <Skills />
          </div>
        </section>
        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title"><span>💼</span> Experience</h2>
            <Experience />
          </div>
        </section>
        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title"><span>🚀</span> Projects</h2>
            <Projects />
          </div>
        </section>
        <section id="certificates" className="section">
          <div className="container">
            <h2 className="section-title"><span>🏅</span> Certificates</h2>
            <Certificates />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
