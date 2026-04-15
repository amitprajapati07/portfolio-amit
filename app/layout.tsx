import type { Metadata } from 'next'
import './globals.css'

const start = new Date('2022-03-01')
const yearsOfExperience = Math.floor((new Date().getTime() - start.getTime()) / 31557600000)

export const metadata: Metadata = {
  title: 'Amit Kumar – Python Developer',
  description:
    `Python Developer with ${yearsOfExperience}+ years of professional experience in Django, FastAPI, Flask, REST APIs, AWS, and scalable backend systems. Based in Ludhiana, Punjab, India.`,
  keywords: 'Amit Kumar, Python Developer, Django, FastAPI, Flask, REST API, AWS, Backend Developer India',
  openGraph: {
    title: 'Amit Kumar – Python Developer Portfolio',
    description: `${yearsOfExperience}+ years building scalable backends with Django, FastAPI, Flask & AWS.`,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
