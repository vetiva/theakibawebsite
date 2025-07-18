import { Button } from "@/components/ui/button"
import { Play, Apple } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      {/* Enhanced cloud decorative elements with better responsive positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 sm:top-4 left-4 sm:left-8 w-32 sm:w-40 lg:w-48 h-16 sm:h-20 lg:h-24 opacity-60 sm:opacity-80">
          <Image src="/images/cloud-1.png" alt="" width={192} height={96} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-4 sm:top-8 right-6 sm:right-12 w-28 sm:w-36 lg:w-44 h-14 sm:h-18 lg:h-22 opacity-55 sm:opacity-75">
          <Image src="/images/cloud-2.png" alt="" width={176} height={88} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-6 sm:top-12 left-8 sm:left-16 w-24 sm:w-32 lg:w-40 h-12 sm:h-16 lg:h-20 opacity-50 sm:opacity-70">
          <Image src="/images/cloud-3.png" alt="" width={160} height={80} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-8 sm:top-16 right-10 sm:right-20 w-36 sm:w-44 lg:w-52 h-18 sm:h-22 lg:h-26 opacity-65 sm:opacity-85">
          <Image src="/images/cloud-4.png" alt="" width={208} height={104} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-10 sm:top-20 left-1/4 w-20 sm:w-28 lg:w-36 h-10 sm:h-14 lg:h-18 opacity-45 sm:opacity-65">
          <Image src="/images/cloud-1.png" alt="" width={144} height={72} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-12 sm:top-24 right-1/4 w-24 sm:w-32 lg:w-40 h-12 sm:h-16 lg:h-20 opacity-55 sm:opacity-75">
          <Image src="/images/cloud-3.png" alt="" width={160} height={80} className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="container-responsive text-center relative z-10">
        {/* Slightly increased font size for Welcome to Akiba */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-akiba-pink-500 mb-6 sm:mb-8 lg:mb-10 animate-fade-in-up leading-tight">
          Welcome to Akiba
        </h1>

        {/* Single line write-up text with increased font size */}
        <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up delay-200">
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
            A digital community that brings you Financial literacy and lifestyle related content. We are here to teach,
            connect and deliver on all things saving and investing.
          </p>
        </div>

        {/* Download Buttons with ID for scrolling */}
        <div
          id="download-buttons"
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up delay-400"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.akiba.by_vetiva2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-enhanced bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white w-72 h-16 sm:w-80 sm:h-18 lg:w-[22rem] lg:h-20 xl:w-[24rem] xl:h-22 rounded-2xl border-2 border-black flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base lg:text-lg xl:text-xl font-bold shadow-xl">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 flex-shrink-0" />
              <span className="whitespace-nowrap">Download on Google Play</span>
            </Button>
          </a>
          <a
            href="https://apps.apple.com/us/app/akiba-app/id6471265552"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-enhanced bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white w-72 h-16 sm:w-80 sm:h-18 lg:w-[22rem] lg:h-20 xl:w-[24rem] xl:h-22 rounded-2xl border-2 border-black flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base lg:text-lg xl:text-xl font-bold shadow-xl">
              <Apple className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 flex-shrink-0" />
              <span className="whitespace-nowrap">Download on App Store</span>
            </Button>
          </a>
        </div>

        {/* Enhanced Community Showcase with Responsive Hover Effects */}
        <div className="relative max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto animate-fade-in-up delay-600">
          <div className="flex justify-center">
            <div className="relative group w-full overflow-hidden">
              <Image
                src="/images/community-collage.png"
                alt="Akiba community members"
                width={1400}
                height={500}
                className="w-full transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-105 will-change-transform"
                priority
              />

              {/* Animated Border Effect - Mobile Optimized */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="absolute inset-0 bg-gradient-to-r from-akiba-pink-500 via-akiba-orange-500 to-akiba-pink-500 animate-pulse opacity-20"></div>
                <div className="absolute inset-1 sm:inset-2 bg-white"></div>
                <div className="absolute inset-1 sm:inset-2">
                  <Image
                    src="/images/community-collage.png"
                    alt="Akiba community members"
                    width={1400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements on Hover - Desktop Only */}
              <div className="hidden lg:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                {/* Top Left Sparkle */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-akiba-pink-500 rounded-full animate-ping"></div>
                <div
                  className="absolute top-6 left-12 w-2 h-2 bg-akiba-orange-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>

                {/* Top Right Sparkle */}
                <div
                  className="absolute top-8 right-8 w-4 h-4 bg-akiba-pink-500 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-4 right-16 w-2 h-2 bg-akiba-orange-500 rounded-full animate-ping"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                {/* Bottom Sparkles */}
                <div
                  className="absolute bottom-6 left-8 w-3 h-3 bg-akiba-pink-500 rounded-full animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-4 right-12 w-2 h-2 bg-akiba-orange-500 rounded-full animate-bounce"
                  style={{ animationDelay: "2.5s" }}
                ></div>
              </div>

              {/* Mobile-Specific Hover Effect - Subtle Shimmer */}
              <div className="lg:hidden absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
              </div>

              {/* Interactive Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-akiba-pink-500/5 via-transparent to-akiba-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
