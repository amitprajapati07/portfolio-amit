import type { Metadata } from 'next'
import './globals.css'

const start = new Date('2023-02-26')
const yearsOfExperience = ((new Date().getTime() - start.getTime()) / 31557600000).toFixed(1)

export const metadata: Metadata = {
  title: 'Amit Kumar – Python Full Stack Developer',
  description:
    `Python Full Stack Developer with ${yearsOfExperience} years of professional experience in Django, FastAPI, Flask, REST APIs, AWS, and scalable backend systems. Based in Ludhiana, Punjab, India.`,
  keywords: 'Amit Kumar, Python Full Stack Developer, Python Developer, Django, FastAPI, Flask, REST API, AWS, Backend Developer India',
  openGraph: {
    title: 'Amit Kumar – Python Full Stack Developer Portfolio',
    description: `${yearsOfExperience} years building scalable backends with Django, FastAPI, Flask & AWS.`,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
