import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from './components/ThemeProvider'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var stored=localStorage.getItem("theme");var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;var theme=stored||(prefersDark?"dark":"light");document.documentElement.setAttribute("data-theme",theme);if(theme==="dark"){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
