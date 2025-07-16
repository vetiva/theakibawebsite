"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDownCircleIcon, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Official Akiba Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/akiba-logo.png"
              alt="Akiba"
              width={120}
              height={40}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-akiba-pink-500 transition-all duration-300 hover:scale-105"
            >
              About Us
            </Link>
            <div className="relative group">
              <Link
                href="/tribe"
                className="text-gray-700 hover:text-pink-500 transition-all duration-300 flex items-center space-x-1 hover:scale-105"
              >
                <span>Akiba Tribe</span>
                <ArrowDownCircleIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition-all duration-200"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/lifestyle"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition-all duration-200"
                  >
                    Lifestyle
                  </Link>
                  <Link
                    href="/research"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition-all duration-200"
                  >
                    Research
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/pay" className="text-gray-700 hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Akiba Pay
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-pink-500 transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="bg-akiba-orange-500 hover:bg-akiba-orange-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get the Akiba app
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="py-4 space-y-4">
            <Link
              href="/about"
              className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300"
            >
              About Us
            </Link>
            <div className="space-y-2">
              <Link
                href="/tribe"
                className="block text-gray-700 font-medium hover:text-akiba-pink-500 transition-colors duration-300"
              >
                Akiba Tribe
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  href="/blog"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300"
                >
                  Blog
                </Link>
                <Link
                  href="/lifestyle"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300"
                >
                  Lifestyle
                </Link>
                <Link
                  href="/research"
                  className="block text-gray-600 hover:text-akiba-pink-500 transition-colors duration-300"
                >
                  Research
                </Link>
              </div>
            </div>
            <Link href="/pay" className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300">
              Akiba Pay
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-akiba-pink-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
