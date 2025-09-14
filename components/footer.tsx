import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-akiba-pink-500 to-akiba-red border-t-2 border-black text-white py-8 lg:py-12">
      <div className="container-responsive px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start mb-8 lg:mb-10">
          {/* Logo and Social Links - Mobile first */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex justify-center md:justify-start mb-6 group">
              <Image
                src="/images/akiba-logo.png"
                alt="Akiba"
                width={280}
                height={103}
                className="brightness-0 invert transition-all duration-500 group-hover:scale-105 group-hover:brightness-125 h-16 sm:h-20 md:h-24 lg:h-28 w-auto will-change-transform drop-shadow-sm group-hover:drop-shadow-xl"
              />
            </Link>
            
            {/* Social Media Icons - Mobile visible */}
            <div className="flex space-x-4 md:hidden justify-center w-full mt-2">
              <a
                href="https://www.facebook.com/akibatribe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Facebook className="w-5 h-5 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/akibatribe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Instagram className="w-5 h-5 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/akibatribe_ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Twitter className="w-5 h-5 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Linkedin className="w-5 h-5 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <nav className="space-y-3 sm:space-y-4">
              <h3 className="font-jakarta-semibold text-lg mb-2 sm:mb-3 text-white">Quick Links</h3>
              <Link
                href="/about"
                className="block text-white hover:text-pink-200 transition-colors font-jakarta-medium text-base sm:text-lg"
              >
                About us
              </Link>
              <Link
                href="/pay"
                className="block text-white hover:text-pink-200 transition-colors font-jakarta-medium text-base sm:text-lg"
              >
                Akiba Pay
              </Link>
              <Link
                href="/tribe"
                className="block text-white hover:text-pink-200 transition-colors font-jakarta-medium text-base sm:text-lg"
              >
                Akiba Tribe
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Address */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-jakarta-semibold text-lg mb-3 text-white">Visit Us</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-jakarta-medium text-base sm:text-lg leading-relaxed">
                    Plot 266B, Kofo Abayomi St,
                  </p>
                  <p className="text-white font-jakarta-medium text-base sm:text-lg">
                    Victoria Island, Lagos, Nigeria.
                  </p>
                </div>
              </div>
            </div>

            {/* Email & Contact */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-jakarta-semibold text-lg mb-3 text-white">Contact Us</h3>
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <a
                  href="mailto:info@akibatribe.com"
                  className="text-white hover:text-pink-200 transition-colors font-jakarta-medium text-base sm:text-lg"
                >
                  info@akibatribe.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <a
                  href="tel:+234800AKIBATRIBE"
                  className="text-white hover:text-pink-200 transition-colors font-jakarta-medium text-base sm:text-lg"
                >
                  +234 800 AKIBA TRIBE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Desktop visible */}
        <div className="hidden md:flex justify-center mb-6 lg:mb-8">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/akibatribe/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Facebook className="w-6 h-6 sm:w-7 sm:h-7 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/akibatribe/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
            </a>
            <a
              href="https://x.com/akibatribe_ng"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Twitter className="w-6 h-6 sm:w-7 sm:h-7 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-6 lg:pt-8 border-t border-pink-400/30">
          <p className="text-sm sm:text-base leading-relaxed text-white/90 font-jakarta-regular text-center md:text-left">
            <strong className="text-white font-jakarta-semibold">DISCLAIMER:</strong> Akiba is a technology platform by
            Vetiva Capital Management Ltd, a company duly licensed and regulated by the Securities and Exchange
            Commission. Akiba does not provide investment advice and individual investors are required to seek
            independent investment advice before making investment decisions.
          </p>
          
          {/* Legal Links */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <Link
              href="/terms-of-use"
              className="text-white hover:text-pink-200 transition-colors font-jakarta-medium text-sm"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white hover:text-pink-200 transition-colors font-jakarta-medium text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          
          {/* Copyright */}
          <p className="text-center mt-4 text-white/80 font-jakarta-regular text-sm">
            © {new Date().getFullYear()} Akiba Tribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}