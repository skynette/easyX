"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-muted py-3"
        }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-2">
              <span className="text-primary-foreground font-bold text-xl">LX</span>
            </div>
            <span className="text-primary font-bold text-xl">LinkX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" isActive={pathname === "/"}>
              Home
            </NavLink>
            <NavLink href="/about" isActive={pathname === "/about"}>
              About
            </NavLink>
            <NavLink href="/#faq" isActive={pathname === "/#faq" || pathname.includes("faq")}>
              FAQ
            </NavLink>
            <NavLink href="/#contact" isActive={pathname === "/#contact" || pathname.includes("contact")}>
              Contact Us
            </NavLink>
            <NavLink href="/become-agent" isActive={pathname === "/become-agent"}>
              Become an Agent
            </NavLink>
          </nav>

          {/* Theme Toggle and Download Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/" isActive={pathname === "/"}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" isActive={pathname === "/about"}>
                About
              </MobileNavLink>
              <MobileNavLink href="/#faq" isActive={pathname === "/#faq" || pathname.includes("faq")}>
                FAQ
              </MobileNavLink>
              <MobileNavLink href="/#contact" isActive={pathname === "/#contact" || pathname.includes("contact")}>
                Contact Us
              </MobileNavLink>
              <MobileNavLink href="/become-agent" isActive={pathname === "/become-agent"}>
                Become an Agent
              </MobileNavLink>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-2">
                Download App
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

function NavLink({ href, children, isActive = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive ? "text-primary" : "text-muted-foreground"
        }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : ""
          }`}
      ></span>
    </Link>
  )
}

function MobileNavLink({ href, children, isActive = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium block py-2 transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"
        }`}
    >
      {children}
    </Link>
  )
}