import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-akiba-pink-500 to-akiba-red text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          {/* Logo */}
          <div className="md:col-span-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/akiba-logo.png"
                alt="Akiba"
                width={140}
                height={48}
                className="brightness-0 invert transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <nav className="space-y-4">
              <Link
                href="/about"
                className="block text-white hover:text-pink-200 transition-colors font-medium text-lg"
              >
                About us
              </Link>
              <Link href="/pay" className="block text-white hover:text-pink-200 transition-colors font-medium text-lg">
                Akiba Pay
              </Link>
              <Link
                href="/tribe"
                className="block text-white hover:text-pink-200 transition-colors font-medium text-lg"
              >
                Akiba Tribe
              </Link>
            </nav>
          </div>

          {/* Address */}
          <div className="md:col-span-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium text-lg leading-relaxed">
                  Plot 266B, Kofo Abayomi St, Victoria Island.
                </p>
                <p className="text-white font-medium text-lg">Lagos, Nigeria.</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <a
                href="mailto:info@akibatribe.com"
                className="text-white hover:text-pink-200 transition-colors font-medium text-lg"
              >
                info@akibatribe.com
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="md:col-span-2 flex justify-end">
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Facebook className="w-5 h-5 text-akiba-pink-500" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Instagram className="w-5 h-5 text-akiba-pink-500" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Twitter className="w-5 h-5 text-akiba-pink-500" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-akiba-pink-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-6 border-t border-pink-400/30">
          <p className="text-sm leading-relaxed text-white/90">
            <strong className="text-white">DISCLAIMER:</strong> Akiba is a technology platform by Vetiva Capital
            Management Ltd, a company duly licensed and regulated by the Securities and Exchange Commission. Akiba does
            not provide investment advice and individual investors are required to seek independent investment advice
            before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
