'use client'

import { FaAws, FaDocker, FaRobot, FaSpaceShuttle, FaMousePointer, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaBrain, FaDatabase } from 'react-icons/fa'
import { SiPython, SiDjango, SiFastapi, SiFlask, SiPostgresql, SiMysql, SiMongodb, SiCelery, SiRedis, SiOclc, SiJavascript, SiOpencv } from 'react-icons/si'
import { BsChatDots } from 'react-icons/bs'
import { TbCube } from 'react-icons/tb'

const skills = [
  { icon: <SiPython size={40} color="#3776AB" />, name: 'Python' },
  { icon: <SiDjango size={40} color="#092E20" />, name: 'Django' },
  { icon: <SiDjango size={40} color="#092E20" />, name: 'Django REST' },
  { icon: <SiFastapi size={40} color="#009688" />, name: 'FastAPI' },
  { icon: <SiFlask size={40} color="#000000" />, name: 'Flask' },
  { icon: <SiPostgresql size={40} color="#4169E1" />, name: 'PostgreSQL' },
  { icon: <SiMysql size={40} color="#4479A1" />, name: 'MySQL' },
  { icon: <SiMongodb size={40} color="#47A248" />, name: 'MongoDB' },
  { icon: <FaDatabase size={40} color="#232F3E" />, name: 'DynamoDB' },
  { icon: <FaAws size={40} color="#FF9900" />, name: 'AWS Cloud' },
  { icon: <FaDocker size={40} color="#2496ED" />, name: 'Docker' },
  { icon: <SiCelery size={40} color="#37814A" />, name: 'Celery' },
  { icon: <SiRedis size={40} color="#DC382D" />, name: 'Redis' },
  { icon: <FaRobot size={40} color="#7c3aed" />, name: 'AI Agents' },
  { icon: <FaBrain size={40} color="#7c3aed" />, name: 'LLMs' },
  { icon: <SiOpencv size={40} color="#5C3EE8" />, name: 'OpenCV' },
  { icon: <BsChatDots size={40} color="#7c3aed" />, name: 'NLP' },
  { icon: <TbCube size={40} color="#000000" />, name: 'Ollama' },
  { icon: <FaSpaceShuttle size={40} color="#7c3aed" />, name: 'Antigravity' },
  { icon: <FaMousePointer size={40} color="#000000" />, name: 'Cursor' },
  { icon: <SiJavascript size={40} color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <FaReact size={40} color="#61DAFB" />, name: 'React.js' },
  { icon: <FaHtml5 size={40} color="#E34F26" />, name: 'HTML5' },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: 'CSS3' },
  { icon: <FaGitAlt size={40} color="#F05032" />, name: 'Git/GitHub' },
]

export default function Skills() {
  return (
    <div className="skills-grid" data-aos="fade-up">
      {skills.map((s, i) => (
        <div className="card skill-tile" key={s.name + i} style={{ animationDelay: `${i * 50}ms` }}>
          <span className="skill-icon-svg">{s.icon}</span>
          <p>{s.name}</p>
        </div>
      ))}
    </div>
  )
}
