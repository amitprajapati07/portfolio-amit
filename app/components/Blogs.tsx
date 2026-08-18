const blogs = [
  {
    id: 'redis-slower',
    title: 'We Added Redis and Made the System Slower',
    description:
      'A deep dive into how blindly adding a caching layer can backfire — and the subtle architectural mistakes that turn a performance win into a bottleneck.',
    tags: ['Redis', 'Caching', 'System Design', 'Backend'],
    date: 'Aug 2026',
    readTime: '6 min read',
    href: 'https://medium.com/@kaleranamit/we-added-redis-and-made-the-system-slower-bbd7ec5d8bae',
    accent: '#FF6B35',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 'api-200-ok',
    title: 'Your API Returns 200 OK But the User Still Lost Money',
    description:
      'When HTTP status codes lie — exploring silent failures, partial writes, and why a successful response code doesn\'t always mean a successful operation.',
    tags: ['API Design', 'Reliability', 'Distributed Systems', 'Backend'],
    date: 'Aug 2026',
    readTime: '7 min read',
    href: 'https://medium.com/@kaleranamit/your-api-returns-200-ok-but-the-user-still-lost-money-6a5dd5b57f5c',
    accent: '#38BDF8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
]

export default function Blogs() {
  return (
    <div data-aos="fade-up">
      {/* Info bar */}
      <div className="blogs-info-bar">
        <span className="blogs-info-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 0 0-6.77 6.34H7v.34A6.8 6.8 0 0 0 13.8 25.5h.14a6.8 6.8 0 0 0 6.8-6.8v-.16a6.8 6.8 0 0 0-7.2-6.54zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.252 16.5L8.4 12.75l1.5-1.5 1.848 1.848L16.1 8.25l1.5 1.5-5.852 6.75z" />
          </svg>
        </span>
        <span>Published on <strong>Medium</strong> — Writing about backend engineering, system design &amp; reliability.</span>
        <a
          href="https://medium.com/@kaleranamit"
          target="_blank"
          rel="noopener noreferrer"
          className="blogs-medium-link"
        >
          View all posts ↗
        </a>
      </div>

      {/* Blog cards */}
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.href}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            style={{ '--blog-accent': blog.accent } as React.CSSProperties}
          >
            {/* Accent top bar */}
            <div className="blog-card-accent-bar" />

            {/* Header */}
            <div className="blog-card-header">
              <span className="blog-card-icon" style={{ color: blog.accent }}>
                {blog.icon}
              </span>
              <div className="blog-card-meta">
                <span className="blog-card-date">{blog.date}</span>
                <span className="blog-card-dot">·</span>
                <span className="blog-card-read-time">{blog.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="blog-card-title">{blog.title}</h3>

            {/* Description */}
            <p className="blog-card-desc">{blog.description}</p>

            {/* Tags */}
            <div className="blog-card-tags">
              {blog.tags.map((tag) => (
                <span className="blog-card-tag" key={tag}>{tag}</span>
              ))}
            </div>

            {/* Footer */}
            <div className="blog-card-footer">
              <span className="blog-read-link">
                Read on Medium
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
