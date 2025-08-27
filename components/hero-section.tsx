import { Button } from "@/components/ui/button"
import { Play, Apple } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      {/* Simplified cloud decorative elements for better mobile performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-4 w-24 h-12 opacity-60 md:top-4 md:left-8 md:w-40 md:h-20 lg:w-48 lg:h-24 md:opacity-80">
          <Image src="/images/cloud-1.png" alt="" width={192} height={96} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-4 right-6 w-20 h-10 opacity-55 md:top-8 md:right-12 md:w-36 md:h-18 lg:w-44 lg:h-22 md:opacity-75">
          <Image src="/images/cloud-2.png" alt="" width={176} height={88} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-8 left-8 w-16 h-8 opacity-50 md:top-12 md:left-16 md:w-32 md:h-16 lg:w-40 lg:h-20 md:opacity-70">
          <Image src="/images/cloud-3.png" alt="" width={160} height={80} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-12 right-10 w-24 h-12 opacity-65 md:top-16 md:right-20 md:w-44 md:h-22 lg:w-52 lg:h-26 md:opacity-85">
          <Image src="/images/cloud-4.png" alt="" width={208} height={104} className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="container-responsive text-center relative z-10">
        {/* Adjusted font sizes for mobile */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-akiba-pink-500 mb-4 sm:mb-6 md:mb-8 lg:mb-10 animate-fade-in-up leading-tight">
          Welcome to Akiba
        </h1>

        {/* Single line write-up text with adjusted spacing */}
        <div className="max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in-up delay-200">
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
            A digital community that brings you Financial literacy and lifestyle related content. We are here to teach,
            connect and deliver on all things saving and investing.
          </p>
        </div>

        {/* Download Buttons with consistent sizing across all screens */}
        <div
          id="download-buttons"
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in-up delay-400"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.akiba.by_vetiva2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-enhanced bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white w-64 sm:w-60 md:w-72 h-14 md:h-16 rounded-2xl border-2 border-black flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm md:text-base font-bold shadow-xl">
              <Play className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span>Download on Google Play</span>
            </Button>
          </a>
          <a
            href="https://apps.apple.com/us/app/akiba-app/id6471265552"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-enhanced bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white w-64 sm:w-60 md:w-72 h-14 md:h-16 rounded-2xl border-2 border-black flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm md:text-base font-bold shadow-xl">
              <Apple className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span>Download on App Store</span>
            </Button>
          </a>
        </div>

        {/* Enhanced Community Showcase with larger mobile image */}
        <div className="relative max-w-4xl sm:max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto animate-fade-in-up delay-600">
          <div className="flex justify-center">
            <div className="relative group w-full overflow-hidden rounded-lg md:rounded-xl">
              <Image
                src="/images/community-collage.png"
                alt="Akiba community members"
                width={1400}
                height={600}
                className="w-full h-auto transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-105 will-change-transform"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
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
                    height={600}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
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