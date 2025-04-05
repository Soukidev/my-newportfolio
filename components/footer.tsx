import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t py-8">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">


        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Soukayna Mouradi. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="https://github.com/Soukidev?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/soukaina-mouradi-digital/?locale=en_US" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:contact@example.com">
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}