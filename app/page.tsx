import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import AosInit    from './components/AosInit'

export default function Page() {
  return (
    <>
      <AosInit />
      <Navbar />
      <main>
        <Hero />
        <section className="section">
          <div className="container">
            <h2 className="section-title"><span>⚙️</span> Skills</h2>
            <Skills />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="section-title"><span>💼</span> Experience</h2>
            <Experience />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="section-title"><span>🚀</span> Projects</h2>
            <Projects />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="section-title">Let&apos;s Connect</h2>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
