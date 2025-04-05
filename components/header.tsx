"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-gradient-to-r from-muted to-muted/70 py-3"
        }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mr-2"
            >
              <span className="text-primary-foreground font-bold text-xl">LX</span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-bold text-xl"
            >
              LinkX
            </motion.span>
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full px-6 shadow-md">
                Download App
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground p-1 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-4 pb-3 overflow-hidden"
            >
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
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full mt-2 shadow-sm">
                    Download App
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

function NavLink({ href, children, isActive = false }: NavLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <Link
        href={href}
        className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive ? "text-primary" : "text-muted-foreground"
          }`}
      >
        {children}
        <motion.span
          initial={{ width: isActive ? "100%" : "0%" }}
          animate={{ width: isActive ? "100%" : "0%" }}
          whileHover={{ width: "100%" }}
          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300`}
        ></motion.span>
      </Link>
    </motion.div>
  )
}

function MobileNavLink({ href, children, isActive = false }: NavLinkProps) {
  return (
    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link
        href={href}
        className={`text-sm font-medium block py-2 transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"
          }`}
      >
        {children}
      </Link>
    </motion.div>
  )
}