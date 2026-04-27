'use client'

const socials = [
  { icon: '📧', name: 'Email', value: 'kaleranamit@gmail.com', href: 'mailto:kaleranamit@gmail.com' },
  { icon: '🔗', name: 'LinkedIn', value: 'amit-kumar-prajapati', href: 'https://www.linkedin.com/in/amit-kumar-prajapati-314b58249/' },
  { icon: '📞', name: 'Phone', value: '+91 74046 95992', href: 'tel:+917404695992' },
  { icon: '📍', name: 'Location', value: 'Ludhiana, Punjab', href: null },
]

export default function Contact() {
  return (
    <div data-aos="fade-up">
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '32px' }}>
        I&apos;m always open to collaborations and new opportunities.
      </p>
      <div className="contact-grid">
        {socials.map((s) => {
          const content = (
            <div className="card contact-tile">
              <span>{s.icon}</span>
              <p>{s.name}</p>
              <p style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 400 }}>{s.value}</p>
            </div>
          )

          return s.href ? (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.name}: ${s.value}`}>
              {content}
            </a>
          ) : (
            <div key={s.name}>{content}</div>
          )
        })}
      </div>
    </div>
  )
}
