import type React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BuildFutureSection() {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="container-responsive">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-responsive-5xl font-jakarta-extrabold text-akiba-pink-500 mb-6 sm:mb-8 lg:mb-10 leading-tight">
              We are here to help you build your future
            </h2>

            <p className="text-responsive-2xl font-pacifico text-gray-800 mb-8 sm:mb-10 lg:mb-12">It all begins here</p>

            {/* Enhanced Animated Stacked and Slanted Buttons */}
            <div className="relative space-y-4 sm:space-y-6 max-w-lg">
              <Button
                className="btn-enhanced bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full border-2 border-black text-base sm:text-lg lg:text-xl flex items-center space-x-3 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float transform -translate-y-2 font-jakarta-semibold"
                style={{ "--rotation": "-3deg" } as React.CSSProperties}
              >
                <span className="text-xl sm:text-2xl">🎵</span>
                <span>Living out your passion</span>
              </Button>

              <Button
                className="btn-enhanced bg-akiba-orange-500 hover:bg-akiba-orange-600 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full border-2 border-black text-base sm:text-lg lg:text-xl flex items-center space-x-3 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float-delayed relative z-10 font-jakarta-semibold"
                style={{ "--rotation": "2deg" } as React.CSSProperties}
              >
                <span className="text-xl sm:text-2xl">💼</span>
                <span>Opening business doors</span>
              </Button>

              <Button
                className="btn-enhanced bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full border-2 border-black text-base sm:text-lg lg:text-xl flex items-center space-x-3 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float-slow font-jakarta-semibold"
                style={{ "--rotation": "-1.5deg" } as React.CSSProperties}
              >
                <span className="text-xl sm:text-2xl">✈️</span>
                <span>Meeting the world</span>
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-right relative">
            {/* Enhanced coin positioning */}
            <div className="absolute top-12 sm:top-16 left-12 sm:left-16 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 z-20 animate-bounce">
              <Image
                src="/images/coin.png"
                alt="Naira coin"
                width={96}
                height={96}
                className="w-full h-full object-contain drop-shadow-lg will-change-transform"
              />
            </div>

            {/* Enhanced flying money elements */}
            <div className="absolute bottom-24 sm:bottom-32 left-12 sm:left-16 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 animate-fly-money-1 z-10">
              <Image
                src="/images/flying-money-1.png"
                alt="Flying money"
                width={56}
                height={56}
                className="w-full h-full object-contain will-change-transform"
              />
            </div>

            <div className="absolute top-16 sm:top-20 right-6 sm:right-8 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 animate-fly-money-2 z-10">
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
                className="object-contain transition-transform duration-700 hover:scale-105 w-full max-w-sm sm:max-w-md lg:max-w-lg will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
