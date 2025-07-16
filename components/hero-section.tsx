import { Button } from "@/components/ui/button"
import { Play, Apple } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Cloud decorative elements positioned very close to Welcome to Akiba text - Really Visible */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-8 w-48 h-24 opacity-80">
          <Image src="/images/cloud-1.png" alt="" width={192} height={96} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-8 right-12 w-44 h-22 opacity-75">
          <Image src="/images/cloud-2.png" alt="" width={176} height={88} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-12 left-16 w-40 h-20 opacity-70">
          <Image src="/images/cloud-3.png" alt="" width={160} height={80} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-16 right-20 w-52 h-26 opacity-85">
          <Image src="/images/cloud-4.png" alt="" width={208} height={104} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-20 left-1/4 w-36 h-18 opacity-65">
          <Image src="/images/cloud-1.png" alt="" width={144} height={72} className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-24 right-1/4 w-40 h-20 opacity-75">
          <Image src="/images/cloud-3.png" alt="" width={160} height={80} className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-500 mb-6 animate-fade-in-up">Welcome to Akiba</h1>

        <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            A digital community that brings you Financial literacy and lifestyle related content.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            We are here to teach, connect and deliver on all things saving and investing.
          </p>
        </div>

        {/* App Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-400">
          <a
            href="https://play.google.com/store/apps/details?id=com.akiba.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
              <Play className="w-5 h-5" />
              <span>Download on Google Play</span>
            </Button>
          </a>
          <a
            href="https://apps.apple.com/app/akiba/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
              <Apple className="w-5 h-5" />
              <span>Download on App Store</span>
            </Button>
          </a>
        </div>

        {/* Community Showcase - More Engaging */}
        <div className="relative max-w-6xl mx-auto animate-fade-in-up delay-600">
          <div className="flex justify-center">
            <div className="relative group">
              <Image
                src="/images/community-collage.png"
                alt="Akiba community members"
                width={1200}
                height={400}
                className="rounded-2xl shadow-2xl w-full max-w-5xl transition-all duration-500 hover:scale-105 hover:shadow-3xl bg-transparent"
              />
              {/* Engaging overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
