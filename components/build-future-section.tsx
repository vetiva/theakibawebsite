import type React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BuildFutureSection() {
  return (
    <section className="bg-white section-padding relative overflow-hidden py-12 lg:py-20">
      <div className="container-responsive px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-jakarta-extrabold text-akiba-pink-500 mb-5 sm:mb-7 lg:mb-8 leading-tight">
              We are here to help you build your future
            </h2>

            <p className="text-xl sm:text-2xl md:text-3xl font-pacifico text-gray-800 mb-6 sm:mb-8 lg:mb-10">It all begins here</p>

            {/* Enhanced Animated Stacked and Slanted Buttons */}
            <div className="relative space-y-4 sm:space-y-5 max-w-lg mx-auto md:mx-0">
              <Button
                className="btn-enhanced bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-5 sm:px-7 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full border-2 border-black text-sm sm:text-base lg:text-lg flex items-center space-x-2 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float transform -translate-y-2 font-jakarta-semibold"
                style={{ "--rotation": "-3deg" } as React.CSSProperties}
              >
                <span className="text-lg sm:text-xl">🎵</span>
                <span>Living out your passion</span>
              </Button>

              <Button
                className="btn-enhanced bg-akiba-orange-500 hover:bg-akiba-orange-600 text-white px-5 sm:px-7 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full border-2 border-black text-sm sm:text-base lg:text-lg flex items-center space-x-2 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float-delayed relative z-10 font-jakarta-semibold"
                style={{ "--rotation": "2deg" } as React.CSSProperties}
              >
                <span className="text-lg sm:text-xl">💼</span>
                <span>Opening business doors</span>
              </Button>

              <Button
                className="btn-enhanced bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white px-5 sm:px-7 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full border-2 border-black text-sm sm:text-base lg:text-lg flex items-center space-x-2 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float-slow font-jakarta-semibold"
                style={{ "--rotation": "-1.5deg" } as React.CSSProperties}
              >
                <span className="text-lg sm:text-xl">✈️</span>
                <span>Meeting the world</span>
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-right relative">
            {/* Enhanced coin positioning */}
            <div className="absolute top-8 sm:top-12 right-8 sm:right-12 lg:right-16 w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 z-20 animate-bounce">
              <Image
                src="/images/coin.png"
                alt="Naira coin"
                width={96}
                height={96}
                className="w-full h-full object-contain drop-shadow-lg will-change-transform"
              />
            </div>

            {/* Enhanced flying money elements */}
            <div className="absolute bottom-20 sm:bottom-28 left-8 sm:left-12 w-9 sm:w-10 lg:w-12 h-9 sm:h-10 lg:h-12 animate-fly-money-1 z-10">
              <Image
                src="/images/flying-money-1.png"
                alt="Flying money"
                width={56}
                height={56}
                className="w-full h-full object-contain will-change-transform"
              />
            </div>

            <div className="absolute top-12 sm:top-16 right-4 sm:right-6 w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 animate-fly-money-2 z-10">
              <Image
                src="/images/flying-money-2.png"
                alt="Flying money"
                width={48}
                height={48}
                className="w-full h-full object-contain will-change-transform"
              />
            </div>

            <div className="relative">
              <Image
                src="/images/guy-with-phone.png"
                alt="Person with Akiba app"
                width={600}
                height={700}
                className="object-contain transition-transform duration-700 hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg will-change-transform"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}