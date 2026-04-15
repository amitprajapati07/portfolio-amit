export default function Footer() {
  const links = ['about', 'skills', 'experience', 'projects', 'contact']
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo">
            <span style={{ color: '#0f172a' }}>{`</>`}</span> Amit Kumar
          </div>
          <p className="footer-tagline">Python Full Stack Developer · Building Scalable Backends</p>
        </div>
        <div className="footer-links">
          {links.map(l => (
            <a key={l} href={`#${l}`}>{l.charAt(0).toUpperCase() + l.slice(1)}</a>
          ))}
        </div>
        <p className="footer-copy">© 2025 Amit Kumar. All rights reserved. Built with ❤️ for excellence.</p>
      </div>

    </footer>
  )
}
