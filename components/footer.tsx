import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-akiba-pink-500 to-akiba-red border-t-2 border-black text-white py-12 lg:py-16">
      <div className="container-responsive">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 lg:mb-12">
          {/* Enhanced Interactive Logo - Clean Version */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/akiba-logo.png"
                alt="Akiba"
                width={240}
                height={88}
                className="brightness-0 invert transition-all duration-500 group-hover:scale-110 group-hover:brightness-125 h-14 sm:h-18 md:h-20 lg:h-24 xl:h-28 2xl:h-32 w-auto will-change-transform drop-shadow-sm group-hover:drop-shadow-xl"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <nav className="space-y-3 sm:space-y-4">
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

          {/* Address */}
          <div className="md:col-span-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-jakarta-medium text-base sm:text-lg leading-relaxed">
                  Plot 266B, Kofo Abayomi St, Victoria Island.
                </p>
                <p className="text-white font-jakarta-medium text-base sm:text-lg">Lagos, Nigeria.</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="md:col-span-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <a
                href="mailto:info@akibatribe.com"
                className="text-white hover:text-pink-200 transition-colors font-jakarta-medium text-base sm:text-lg"
              >
                info@akibatribe.com
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Interactive Social Media Icons - Bottom Right */}
        <div className="flex justify-end mb-6 lg:mb-8">
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Facebook className="w-6 h-6 sm:w-7 sm:h-7 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-akiba-pink-500 group-hover:text-akiba-pink-600 transition-colors duration-300" />
            </a>
            <a
              href="#"
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
          <p className="text-sm sm:text-base leading-relaxed text-white/90 font-jakarta-regular">
            <strong className="text-white font-jakarta-semibold">DISCLAIMER:</strong> Akiba is a technology platform by
            Vetiva Capital Management Ltd, a company duly licensed and regulated by the Securities and Exchange
            Commission. Akiba does not provide investment advice and individual investors are required to seek
            independent investment advice before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
