"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDownCircleIcon, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToDownloadButtons = () => {
    const downloadSection = document.getElementById("download-buttons")
    if (downloadSection) {
      downloadSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 border-b ${
      isScrolled ? 'shadow-md border-gray-200' : 'shadow-sm border-gray-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/akiba-logo.png"
              alt="Akiba"
              width={160}
              height={60}
              className="h-10 sm:h-12 md:h-14 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 will-change-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 font-medium text-sm xl:text-base py-2 px-1 rounded-md hover:bg-gray-50"
            >
              About Us
            </Link>
            <div className="relative group">
              <Link
                href="/tribe"
                className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 flex items-center space-x-1 font-medium text-sm xl:text-base py-2 px-1 rounded-md hover:bg-gray-50"
              >
                <span>Akiba Tribe</span>
                <ArrowDownCircleIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-gray-200">
                <div className="py-2">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-akiba-pink-50 hover:text-akiba-pink-500 transition-all duration-200 text-sm"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/lifestyle"
                    className="block px-4 py-2 text-gray-700 hover:bg-akiba-pink-50 hover:text-akiba-pink-500 transition-all duration-200 text-sm"
                  >
                    Lifestyle
                  </Link>
                  <Link
                    href="/research"
                    className="block px-4 py-2 text-gray-700 hover:bg-akiba-pink-50 hover:text-akiba-pink-500 transition-all duration-200 text-sm"
                  >
                    Research
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/pay"
              className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 font-medium text-sm xl:text-base py-2 px-1 rounded-md hover:bg-gray-50"
            >
              Akiba Pay
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 font-medium text-sm xl:text-base py-2 px-1 rounded-md hover:bg-gray-50"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button
              onClick={scrollToDownloadButtons}
              className="hidden sm:flex bg-akiba-orange-500 hover:bg-akiba-orange-600 text-white px-4 sm:px-5 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-medium cursor-pointer shadow-sm"
            >
              Get the App
            </Button>
            
            {/* Mobile CTA - visible only on small screens */}
            <Button
              onClick={scrollToDownloadButtons}
              className="sm:hidden bg-akiba-orange-500 hover:bg-akiba-orange-600 text-white p-2 rounded-lg transition-all duration-300 text-xs font-medium cursor-pointer shadow-sm"
              size="icon"
            >
              <span className="sr-only">Get the App</span>
              <ArrowDownCircleIcon className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2 bg-gray-50 rounded-lg px-4 border border-gray-200">
            <Link
              href="/about"
              className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300 py-3 px-4 font-medium rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="space-y-2">
              <Link
                href="/tribe"
                className="block text-gray-700 font-medium hover:text-akiba-pink-500 transition-colors duration-300 py-3 px-4 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Akiba Tribe
              </Link>
              <div className="pl-6 space-y-2 border-l border-gray-200 ml-4">
                <Link
                  href="/blog"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/lifestyle"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lifestyle
                </Link>
                <Link
                  href="/research"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Research
                </Link>
              </div>
            </div>
            
            <Link
              href="/pay"
              className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300 py-3 px-4 font-medium rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Akiba Pay
            </Link>
            
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300 py-3 px-4 font-medium rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile-only CTA button */}
            <Button
              onClick={scrollToDownloadButtons}
              className="w-full mt-4 bg-akiba-orange-500 hover:bg-akiba-orange-600 text-white py-3 rounded-lg transition-all duration-300 text-sm font-medium cursor-pointer shadow-sm"
            >
              Get the Akiba App
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}