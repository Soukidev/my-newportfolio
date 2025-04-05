import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import "./globals.css"
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Soukayna Mouradi | Web project manager Portfolio",
  description: "Portfolio website showcasing the projects and skills of John Doe, a full-stack web developer.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}