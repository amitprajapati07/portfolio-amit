const skills = [
  { icon: '🐍', name: 'Python' },
  { icon: 'dj', name: 'Django' },
  { icon: 'DRF', name: 'Django REST' },
  { icon: '⚡', name: 'FastAPI' },
  { icon: '🧪', name: 'Flask' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🐬', name: 'MySQL' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '📊', name: 'DynamoDB' },
  { icon: 'aws', name: 'AWS Cloud' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🤖', name: 'Celery' },
  { icon: '⚙️', name: 'Redis' },
  { icon: '🤖', name: 'AI Agents' },
  { icon: '🧠', name: 'LLMs' },
  { icon: '👁️', name: 'OpenCV' },
  { icon: '💬', name: 'NLP' },
  { icon: '🌀', name: 'Ollama' },
  { icon: '💠', name: 'Antigravity' },
  { icon: '⌨️', name: 'Cursor' },
  { icon: 'JS', name: 'JavaScript' },
  { icon: '⚛️', name: 'React.js' },
  { icon: 'HTML', name: 'HTML5' },
  { icon: 'CSS', name: 'CSS3' },
  { icon: '🌳', name: 'Git/GitHub' },
]

export default function Skills() {
  return (
    <div className="skills-grid" data-aos="fade-up">
      {skills.map((s, i) => (
        <div className="card skill-tile" key={s.name + i} style={{ animationDelay: `${i * 50}ms` }}>
          <span className="skill-icon">{s.icon}</span>
          <p>{s.name}</p>
        </div>
      ))}
    </div>
  )
}
