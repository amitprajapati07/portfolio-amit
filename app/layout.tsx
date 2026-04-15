import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amit Kumar – Python Developer',
  description:
    'Python Developer with 3+ years of professional experience in Django, FastAPI, Flask, REST APIs, AWS, and scalable backend systems. Based in Ludhiana, Punjab, India.',
  keywords: 'Amit Kumar, Python Developer, Django, FastAPI, Flask, REST API, AWS, Backend Developer India',
  openGraph: {
    title: 'Amit Kumar – Python Developer Portfolio',
    description: '3+ years building scalable backends with Django, FastAPI, Flask & AWS.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
