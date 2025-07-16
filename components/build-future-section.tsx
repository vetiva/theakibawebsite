import type React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BuildFutureSection() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-akiba-pink-500 mb-8 leading-tight">
              We are here to help you build your future
            </h2>

            <p className="text-xl md:text-2xl lg:text-3xl font-script text-gray-800 mb-12 italic">It all begins here</p>

            {/* Animated Stacked and Slanted Buttons - Bigger and More Spaced */}
            <div className="relative space-y-6 max-w-lg">
              <Button
                className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl flex items-center space-x-3 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float transform -translate-y-2"
                style={{ "--rotation": "-3deg" } as React.CSSProperties}
              >
                <span className="text-2xl">🎵</span>
                <span>Living out your passion</span>
              </Button>

              <Button
                className="bg-akiba-orange-500 hover:bg-akiba-orange-600 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl flex items-center space-x-3 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float-delayed relative z-10"
                style={{ "--rotation": "2deg" } as React.CSSProperties}
              >
                <span className="text-2xl">💼</span>
                <span>Opening business doors</span>
              </Button>

              <Button
                className="bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl flex items-center space-x-3 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-float-slow"
                style={{ "--rotation": "-1.5deg" } as React.CSSProperties}
              >
                <span className="text-2xl">✈️</span>
                <span>Meeting the world</span>
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-right relative">
            {/* Real Coin Image repositioned to left side */}
            <div className="absolute top-16 left-16 w-20 h-20 z-20 animate-bounce">
              <Image
                src="/images/coin.png"
                alt="Naira coin"
                width={80}
                height={80}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Flying Money Elements - Positioned near guy's left knee and phone */}
            <div className="absolute bottom-32 left-16 w-12 h-12 animate-fly-money-1 z-10">
              <Image
                src="/images/flying-money-1.png"
                alt="Flying money"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute top-20 right-8 w-10 h-10 animate-fly-money-2 z-10">
              <Image
                src="/images/flying-money-2.png"
                alt="Flying money"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative">
              <Image
                src="/images/guy-with-phone.png"
                alt="Person with Akiba app"
                width={500}
                height={600}
                className="object-contain transition-transform duration-500 hover:scale-105 w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
