'use client'

import { useTheme } from './ThemeProvider'
import { FaAws, FaDocker, FaRobot, FaSpaceShuttle, FaMousePointer, FaHtml5, FaCss3Alt, FaGitAlt, FaBrain, FaDatabase, FaClock, FaBitbucket, FaBug, FaVial, FaTasks, FaBook, FaServer, FaCubes, FaProjectDiagram, FaNetworkWired, FaSync, FaCreditCard, FaRoute } from 'react-icons/fa'
import { SiPython, SiDjango, SiFastapi, SiFlask, SiPostgresql, SiMysql, SiMongodb, SiCelery, SiRedis, SiJavascript, SiOpencv, SiRazorpay, SiStripe, SiPaypal, SiReact, SiNextdotjs, SiSocketdotio, SiNginx, SiGunicorn, SiPuppeteer, SiSelenium, SiXero, SiZapier, SiN8N } from 'react-icons/si'
import { BsChatDots, BsCodeSlash, BsChatRightDots } from 'react-icons/bs'
import { TbCube, TbApi } from 'react-icons/tb'
import { VscAzure } from 'react-icons/vsc'

function getTickerIcons(isDark: boolean) {
  const c = (light: string, dark: string) => (isDark ? dark : light)
  const sz = 28

  return [
    { icon: <SiPython size={sz} color="#3776AB" />, name: 'Python' },
    { icon: <SiDjango size={sz} color={c('#092E20', '#44d17a')} />, name: 'Django' },
    { icon: <SiFastapi size={sz} color="#009688" />, name: 'FastAPI' },
    { icon: <SiFlask size={sz} color={c('#000000', '#e2e8f0')} />, name: 'Flask' },
    { icon: <SiPostgresql size={sz} color="#4169E1" />, name: 'PostgreSQL' },
    { icon: <SiMysql size={sz} color="#4479A1" />, name: 'MySQL' },
    { icon: <SiMongodb size={sz} color="#47A248" />, name: 'MongoDB' },
    { icon: <FaDatabase size={sz} color={c('#232F3E', '#7CB9E8')} />, name: 'DynamoDB' },
    { icon: <FaAws size={sz} color="#FF9900" />, name: 'AWS' },
    { icon: <VscAzure size={sz} color="#0089D6" />, name: 'Azure' },
    { icon: <FaDocker size={sz} color="#2496ED" />, name: 'Docker' },
    { icon: <SiCelery size={sz} color="#37814A" />, name: 'Celery' },
    { icon: <SiRedis size={sz} color="#DC382D" />, name: 'Redis' },
    { icon: <SiNginx size={sz} color="#009639" />, name: 'Nginx' },
    { icon: <FaGitAlt size={sz} color="#F05032" />, name: 'Git' },
    { icon: <FaGitAlt size={sz} color={c('#181717', '#e2e8f0')} />, name: 'GitHub' },
    { icon: <SiRazorpay size={sz} color={c('#02042B', '#7CB9E8')} />, name: 'Razorpay' },
    { icon: <SiStripe size={sz} color="#008CDD" />, name: 'Stripe' },
    { icon: <TbApi size={sz} color="#7c3aed" />, name: 'API' },
    { icon: <FaRobot size={sz} color="#7c3aed" />, name: 'AI Agents' },
    { icon: <FaBrain size={sz} color="#7c3aed" />, name: 'LLMs' },
    { icon: <SiOpencv size={sz} color="#5C3EE8" />, name: 'OpenCV' },
    { icon: <TbCube size={sz} color={c('#000000', '#e2e8f0')} />, name: 'Ollama' },
    { icon: <SiJavascript size={sz} color="#F7DF1E" />, name: 'JS' },
    { icon: <SiReact size={sz} color="#61DAFB" />, name: 'React' },
    { icon: <SiNextdotjs size={sz} color={c('#000000', '#e2e8f0')} />, name: 'Next.js' },
  ]
}

export default function BottomTicker() {
  const { theme } = useTheme()
  const icons = getTickerIcons(theme === 'dark')
  const track = [...icons, ...icons, ...icons]

  return (
    <div className="bottom-ticker-bar">
      <div className="bottom-ticker-track">
        {track.map((item, idx) => (
          <div className="bottom-ticker-item" key={`${item.name}-${idx}`} title={item.name}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  )
}
