const certificates = [
  {
    id: 'f3cc6acf67aa',
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    issued: 'Jun 2023',
    credentialUrl: 'https://www.hackerrank.com/certificates/f3cc6acf67aa',
    skills: ['Python', 'Scalar Types', 'Operators', 'Strings', 'Classes', 'Exceptions'],
    color: 'cert-green',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.252 16.5L8.4 12.75l1.5-1.5 1.848 1.848L16.1 8.25l1.5 1.5-5.852 6.75z" />
      </svg>
    ),
    issuerColor: '#00EA64',
  },
]

export default function Certificates() {
  return (
    <div data-aos="fade-up">
      <div className="certs-grid">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`card cert-card ${cert.color}`}
          >
            {/* Top row */}
            <div className="cert-top">
              <span className="cert-issuer-icon" style={{ color: cert.issuerColor }}>
                {cert.icon}
              </span>
              <div className="cert-issuer-info">
                <span className="cert-issuer-name">{cert.issuer}</span>
                <span className="cert-issued-date">{cert.issued}</span>
              </div>
              <span className="cert-verify-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Verified
              </span>
            </div>

            {/* Title */}
            <h3 className="cert-title">{cert.title}</h3>

            {/* Skills */}
            <div className="cert-skills">
              {cert.skills.map((s) => (
                <span className="cert-skill-tag" key={s}>{s}</span>
              ))}
            </div>

            {/* Footer */}
            <div className="cert-footer">
              <span className="cert-view-link">
                View Certificate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
