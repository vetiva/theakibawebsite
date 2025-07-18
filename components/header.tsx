"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDownCircleIcon, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToDownloadButtons = () => {
    const downloadSection = document.getElementById("download-buttons")
    if (downloadSection) {
      downloadSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-gray-100">
      <div className="container-responsive py-3 sm:py-4 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Enhanced Interactive Logo - Clean Version */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/akiba-logo.png"
              alt="Akiba"
              width={220}
              height={80}
              className="h-12 sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 will-change-transform drop-shadow-sm group-hover:drop-shadow-lg"
              priority
            />
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 hover:scale-105 font-medium text-sm xl:text-base focus-enhanced"
            >
              About Us
            </Link>
            <div className="relative group">
              <Link
                href="/tribe"
                className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 flex items-center space-x-1 hover:scale-105 font-medium text-sm xl:text-base focus-enhanced"
              >
                <span>Akiba Tribe</span>
                <ArrowDownCircleIcon className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-gray-100">
                <div className="py-2">
                  <Link
                    href="/blog"
                    className="block px-4 py-3 text-gray-700 hover:bg-akiba-pink-50 hover:text-akiba-pink-500 transition-all duration-200 text-sm font-medium"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/lifestyle"
                    className="block px-4 py-3 text-gray-700 hover:bg-akiba-pink-50 hover:text-akiba-pink-500 transition-all duration-200 text-sm font-medium"
                  >
                    Lifestyle
                  </Link>
                  <Link
                    href="/research"
                    className="block px-4 py-3 text-gray-700 hover:bg-akiba-pink-50 hover:text-akiba-pink-500 transition-all duration-200 text-sm font-medium"
                  >
                    Research
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/pay"
              className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 hover:scale-105 font-medium text-sm xl:text-base focus-enhanced"
            >
              Akiba Pay
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 hover:scale-105 font-medium text-sm xl:text-base focus-enhanced"
            >
              Contact
            </Link>
          </nav>

          {/* Enhanced CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button
              onClick={scrollToDownloadButtons}
              className="btn-enhanced bg-akiba-orange-500 hover:bg-akiba-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base font-medium cursor-pointer"
            >
              Get the Akiba app
            </Button>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-3 bg-gray-50 rounded-xl px-4">
            <Link
              href="/about"
              className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="space-y-2">
              <Link
                href="/tribe"
                className="block text-gray-700 font-medium hover:text-akiba-pink-500 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Akiba Tribe
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  href="/blog"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/lifestyle"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lifestyle
                </Link>
                <Link
                  href="/research"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Research
                </Link>
              </div>
            </div>
            <Link
              href="/pay"
              className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Akiba Pay
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
