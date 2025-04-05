'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X } from 'lucide-react'
import { useState } from "react"


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          
          <span className="font-bold text-xl"> My portfolio</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            
            {isOpen && (
              <div className="fixed inset-0 z-50 bg-background">
                <div className="container flex h-16 items-center justify-between">
                  <Link href="/" className="font-bold text-xl">
                    Soukaina
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="container flex flex-col gap-4 py-8">
                  <Link 
                    href="/" 
                    className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/projects" 
                    className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
          <Link href="/contact">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
