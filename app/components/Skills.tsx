'use client'

import { FaAws, FaDocker, FaRobot, FaSpaceShuttle, FaMousePointer, FaHtml5, FaCss3Alt, FaGitAlt, FaBrain, FaDatabase, FaClock, FaBitbucket, FaBug, FaVial, FaTasks, FaBook, FaServer, FaCubes, FaProjectDiagram, FaNetworkWired, FaSync, FaCreditCard } from 'react-icons/fa'
import { SiPython, SiDjango, SiFastapi, SiFlask, SiPostgresql, SiMysql, SiMongodb, SiCelery, SiRedis, SiJavascript, SiKnexdotjs, SiOpencv, SiRazorpay, SiStripe, SiPaypal, SiReact, SiNextdotjs, SiSocketdotio, SiNginx, SiGunicorn, SiPuppeteer, SiSelenium, SiXero } from 'react-icons/si'
import { BsChatDots, BsCodeSlash, BsChatRightDots } from 'react-icons/bs'
import { TbCube, TbApi } from 'react-icons/tb'
import { VscAzure } from 'react-icons/vsc'

const skills = [
  { icon: <SiPython size={40} color="#3776AB" />, name: 'Python' },
  { icon: <SiDjango size={40} color="#092E20" />, name: 'Django' },
  { icon: <SiDjango size={40} color="#092E20" />, name: 'Django REST' },
  { icon: <SiFastapi size={40} color="#009688" />, name: 'FastAPI' },
  { icon: <SiFlask size={40} color="#000000" />, name: 'Flask' },

  // Databases
  { icon: <SiPostgresql size={40} color="#4169E1" />, name: 'PostgreSQL' },
  { icon: <SiMysql size={40} color="#4479A1" />, name: 'MySQL' },
  { icon: <SiMongodb size={40} color="#47A248" />, name: 'MongoDB' },
  { icon: <FaDatabase size={40} color="#232F3E" />, name: 'DynamoDB' },

  // Cloud & DevOps
  { icon: <FaAws size={40} color="#FF9900" />, name: 'AWS Cloud' },
  { icon: <VscAzure size={40} color="#0089D6" />, name: 'Microsoft Azure' },
  { icon: <FaAws size={40} color="#FF9900" />, name: 'AWS S3' },
  { icon: <FaServer size={40} color="#232F3E" />, name: 'AWS RDS' },
  { icon: <FaCubes size={40} color="#D13212" />, name: 'AWS ECR' },
  { icon: <FaDocker size={40} color="#2496ED" />, name: 'Docker' },
  { icon: <FaSync size={40} color="#1572B6" />, name: 'CI/CD' },
  { icon: <SiCelery size={40} color="#37814A" />, name: 'Celery' },
  { icon: <FaClock size={40} color="#64748b" />, name: 'Cronjobs' },
  { icon: <SiRedis size={40} color="#DC382D" />, name: 'Redis' },
  { icon: <SiNginx size={40} color="#009639" />, name: 'Nginx' },
  { icon: <SiGunicorn size={40} color="#499848" />, name: 'Gunicorn' },
  { icon: <FaNetworkWired size={40} color="#00A3E0" />, name: 'Load Balancing' },

  // VCS
  { icon: <FaGitAlt size={40} color="#F05032" />, name: 'Git' },
  { icon: <FaGitAlt size={40} color="#181717" />, name: 'GitHub' },
  { icon: <FaBitbucket size={40} color="#0052CC" />, name: 'Bitbucket' },

  // Payments
  { icon: <SiRazorpay size={40} color="#02042B" />, name: 'Razorpay' },
  { icon: <SiStripe size={40} color="#008CDD" />, name: 'Stripe' },
  { icon: <SiPaypal size={40} color="#00457C" />, name: 'PayPal' },
  { icon: <FaCreditCard size={40} color="#6B7280" />, name: 'Payment Gateway' },
  { icon: <SiXero size={40} color="#13B5EA" />, name: 'Xero' },

  // Engineering & Core
  { icon: <TbApi size={40} color="#7c3aed" />, name: 'API Dev' },
  { icon: <FaProjectDiagram size={40} color="#7c3aed" />, name: 'System Design' },
  { icon: <SiSocketdotio size={40} color="#010101" />, name: 'WebSockets' },
  { icon: <SiDjango size={40} color="#092E20" />, name: 'Channels' },
  { icon: <BsChatRightDots size={40} color="#7c3aed" />, name: 'Chat Apps' },
  { icon: <BsCodeSlash size={40} color="#1572B6" />, name: 'Data Sync' },
  { icon: <FaBug size={40} color="#E34F26" />, name: 'Debugging' },
  { icon: <FaVial size={40} color="#00A261" />, name: 'Unit Testing' },
  { icon: <SiPuppeteer size={40} color="#2EAD33" />, name: 'Playwright' },
  { icon: <SiSelenium size={40} color="#43B02A" />, name: 'Selenium' },
  { icon: <FaTasks size={40} color="#3776AB" />, name: 'Task Mgmt' },
  { icon: <FaBook size={40} color="#24292E" />, name: 'Docs' },

  // AI Tools
  { icon: <FaRobot size={40} color="#7c3aed" />, name: 'AI Agents' },
  { icon: <FaBrain size={40} color="#7c3aed" />, name: 'LLMs' },
  { icon: <SiOpencv size={40} color="#5C3EE8" />, name: 'OpenCV' },
  { icon: <BsChatDots size={40} color="#7c3aed" />, name: 'NLP' },
  { icon: <TbCube size={40} color="#000000" />, name: 'Ollama' },
  { icon: <FaSpaceShuttle size={40} color="#7c3aed" />, name: 'Antigravity' },
  { icon: <FaMousePointer size={40} color="#000000" />, name: 'Cursor' },

  // Frontend
  { icon: <SiJavascript size={40} color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <SiReact size={40} color="#61DAFB" />, name: 'React' },
  { icon: <SiNextdotjs size={40} color="#000000" />, name: 'Next.js' },
  { icon: <FaHtml5 size={40} color="#E34F26" />, name: 'HTML' },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: 'CSS' },
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
