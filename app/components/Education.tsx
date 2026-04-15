export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-tag" data-aos="fade-up">Background</div>
        <h2 className="section-title" data-aos="fade-up">
          Education &amp;<br />
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="edu-grid">
          <div className="edu-card" data-aos="fade-right">
            <div className="edu-icon">🎓</div>
            <div>
              <h3>Bachelor of Science (B.Sc.)</h3>
              <p className="edu-inst">Govt. P.G. College, Ambala</p>
              <p className="edu-year">📅 2018</p>
            </div>
          </div>
          <div className="edu-card" data-aos="fade-left">
            <div className="edu-icon">🏆</div>
            <div>
              <h3>Python Development Certification</h3>
              <p className="edu-inst">Pyspiders, Basavanagudi, Bangalore</p>
              <p className="edu-year">📅 2022</p>
            </div>
          </div>
        </div>

        <div className="interests-section" data-aos="fade-up">
          <h3 className="interests-title">Beyond Code</h3>
          <div className="interests-grid">
            {[
              '📚 Reading philosophy & self-development books',
              '🏐 Playing volleyball for fitness & teamwork',
              '🎵 Listening to meaningful music',
              '✍️ Writing to express personal thoughts',
            ].map(item => (
              <div className="interest-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
