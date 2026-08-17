'use client'

import { useTheme } from './ThemeProvider'
import BottomTicker from './BottomTicker'
import { FaAws, FaDocker, FaRobot, FaSpaceShuttle, FaMousePointer, FaHtml5, FaCss3Alt, FaGitAlt, FaBrain, FaDatabase, FaClock, FaBitbucket, FaBug, FaVial, FaTasks, FaBook, FaServer, FaCubes, FaProjectDiagram, FaNetworkWired, FaSync, FaCreditCard, FaRoute } from 'react-icons/fa'
import { SiPython, SiDjango, SiFastapi, SiFlask, SiPostgresql, SiMysql, SiMongodb, SiCelery, SiRedis, SiJavascript, SiOpencv, SiRazorpay, SiStripe, SiPaypal, SiReact, SiNextdotjs, SiSocketdotio, SiNginx, SiGunicorn, SiPuppeteer, SiSelenium, SiXero, SiZapier, SiN8N } from 'react-icons/si'
import { BsChatDots, BsCodeSlash, BsChatRightDots } from 'react-icons/bs'
import { TbCube, TbApi } from 'react-icons/tb'
import { VscAzure } from 'react-icons/vsc'

interface SkillItem {
  icon: React.ReactNode
  name: string
}

interface SkillCategory {
  category: string
  skills: SkillItem[]
}

function getSkillCategories(isDark: boolean): SkillCategory[] {
  const c = (light: string, dark: string) => (isDark ? dark : light)
  const sz = 32

  return [
    {
      category: 'BACKEND',
      skills: [
        { icon: <SiPython size={sz} color="#3776AB" />, name: 'Python' },
        { icon: <SiDjango size={sz} color={c('#092E20', '#44d17a')} />, name: 'Django' },
        { icon: <SiDjango size={sz} color={c('#092E20', '#44d17a')} />, name: 'Django REST' },
        { icon: <SiFastapi size={sz} color="#009688" />, name: 'FastAPI' },
        { icon: <SiFlask size={sz} color={c('#000000', '#e2e8f0')} />, name: 'Flask' },
      ],
    },
    {
      category: 'FRONTEND',
      skills: [
        { icon: <SiJavascript size={sz} color="#F7DF1E" />, name: 'JavaScript' },
        { icon: <SiReact size={sz} color="#61DAFB" />, name: 'React' },
        { icon: <SiNextdotjs size={sz} color={c('#000000', '#e2e8f0')} />, name: 'Next.js' },
        { icon: <FaHtml5 size={sz} color="#E34F26" />, name: 'HTML' },
        { icon: <FaCss3Alt size={sz} color="#1572B6" />, name: 'CSS' },
      ],
    },
    {
      category: 'DATABASES',
      skills: [
        { icon: <SiPostgresql size={sz} color="#4169E1" />, name: 'PostgreSQL' },
        { icon: <SiMysql size={sz} color="#4479A1" />, name: 'MySQL' },
        { icon: <SiMongodb size={sz} color="#47A248" />, name: 'MongoDB' },
        { icon: <FaDatabase size={sz} color={c('#232F3E', '#7CB9E8')} />, name: 'DynamoDB' },
        { icon: <SiRedis size={sz} color="#DC382D" />, name: 'Redis' },
      ],
    },
    {
      category: 'APIS & INTEGRATIONS',
      skills: [
        { icon: <TbApi size={sz} color="#7c3aed" />, name: 'API Dev' },
        { icon: <FaProjectDiagram size={sz} color="#7c3aed" />, name: 'System Design' },
        { icon: <SiSocketdotio size={sz} color={c('#010101', '#e2e8f0')} />, name: 'WebSockets' },
        { icon: <SiDjango size={sz} color={c('#092E20', '#44d17a')} />, name: 'Channels' },
        { icon: <BsChatRightDots size={sz} color="#7c3aed" />, name: 'Chat Apps' },
        { icon: <BsCodeSlash size={sz} color="#1572B6" />, name: 'Data Sync' },
      ],
    },
    {
      category: 'AUTOMATION & AI',
      skills: [
        { icon: <FaRobot size={sz} color="#7c3aed" />, name: 'AI Agents' },
        { icon: <FaBrain size={sz} color="#7c3aed" />, name: 'LLMs' },
        { icon: <SiOpencv size={sz} color="#5C3EE8" />, name: 'OpenCV' },
        { icon: <BsChatDots size={sz} color="#7c3aed" />, name: 'NLP' },
        { icon: <TbCube size={sz} color={c('#000000', '#e2e8f0')} />, name: 'Ollama' },
        { icon: <SiZapier size={sz} color="#FF4A00" />, name: 'Zapier' },
        { icon: <SiN8N size={sz} color="#EA4B71" />, name: 'n8n' },
      ],
    },
    {
      category: 'CLOUD & DEVOPS',
      skills: [
        { icon: <FaAws size={sz} color="#FF9900" />, name: 'AWS Cloud' },
        { icon: <VscAzure size={sz} color="#0089D6" />, name: 'Microsoft Azure' },
        { icon: <FaAws size={sz} color="#FF9900" />, name: 'AWS S3' },
        { icon: <FaServer size={sz} color={c('#232F3E', '#7CB9E8')} />, name: 'AWS RDS' },
        { icon: <FaCubes size={sz} color="#D13212" />, name: 'AWS ECR' },
        { icon: <FaDocker size={sz} color="#2496ED" />, name: 'Docker' },
        { icon: <FaSync size={sz} color="#1572B6" />, name: 'CI/CD' },
        { icon: <SiCelery size={sz} color="#37814A" />, name: 'Celery' },
        { icon: <SiNginx size={sz} color="#009639" />, name: 'Nginx' },
        { icon: <SiGunicorn size={sz} color="#499848" />, name: 'Gunicorn' },
      ],
    },
    {
      category: 'PAYMENTS & ACCOUNTING',
      skills: [
        { icon: <SiRazorpay size={sz} color={c('#02042B', '#7CB9E8')} />, name: 'Razorpay' },
        { icon: <SiStripe size={sz} color="#008CDD" />, name: 'Stripe' },
        { icon: <SiPaypal size={sz} color="#00457C" />, name: 'PayPal' },
        { icon: <FaCreditCard size={sz} color={c('#6B7280', '#94a3b8')} />, name: 'Payment Gateway' },
        { icon: <SiXero size={sz} color="#13B5EA" />, name: 'Xero' },
      ],
    },
    {
      category: 'TOOLS & VCS',
      skills: [
        { icon: <FaGitAlt size={sz} color="#F05032" />, name: 'Git' },
        { icon: <FaGitAlt size={sz} color={c('#181717', '#e2e8f0')} />, name: 'GitHub' },
        { icon: <FaBitbucket size={sz} color="#0052CC" />, name: 'Bitbucket' },
        { icon: <SiPuppeteer size={sz} color="#2EAD33" />, name: 'Playwright' },
        { icon: <SiSelenium size={sz} color="#43B02A" />, name: 'Selenium' },
        { icon: <FaBug size={sz} color="#E34F26" />, name: 'Debugging' },
        { icon: <FaVial size={sz} color="#00A261" />, name: 'Unit Testing' },
      ],
    },
  ]
}

export default function Skills() {
  const { theme } = useTheme()
  const categories = getSkillCategories(theme === 'dark')

  return (
    <>
      <div className="skills-categorized-container" data-aos="fade-up">
        {categories.map((group) => (
          <div className="skill-category-group" key={group.category}>
            <div className="skill-category-header">
              <span className="skill-category-badge">{group.category}</span>
            </div>
            <div className="skill-category-grid">
              {group.skills.map((s) => (
                <div className="card skill-cat-card" key={s.name}>
                  <span className="skill-icon-svg">{s.icon}</span>
                  <p>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-ticker-fullbleed">
        <BottomTicker />
      </div>
    </>
  )
}
