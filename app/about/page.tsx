import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Optimized images */}
        <section className="bg-white py-12 md:py-24 relative overflow-hidden">
          {/* Background curved lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 md:opacity-40">
              <Image
                src="/images/curved-lines-vector.png"
                alt="Decorative background lines"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Decorative elements with optimized images */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Coins - optimized images */}
            <div className="absolute top-16 left-4 w-10 h-10 opacity-95 md:top-36 md:left-20 md:w-14 md:h-14">
              <Image
                src="/images/naira-coin.png"
                alt="Decorative coin"
                width={56}
                height={56}
                className="w-full h-full object-contain animate-bounce"
                loading="lazy"
              />
            </div>
            <div className="absolute top-28 right-4 w-12 h-12 opacity-90 md:top-52 md:right-24 md:w-18 md:h-18">
              <Image
                src="/images/naira-coin.png"
                alt="Decorative coin"
                width={72}
                height={72}
                className="w-full h-full object-contain animate-pulse"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-32 left-6 w-8 h-8 opacity-85 md:bottom-48 md:left-28 md:w-10 md:h-10">
              <Image
                src="/images/naira-coin.png"
                alt="Decorative coin"
                width={40}
                height={40}
                className="w-full h-full object-contain animate-bounce"
                style={{ animationDelay: "1s" }}
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-24 right-6 w-14 h-14 opacity-90 md:bottom-32 md:right-20 md:w-22 md:h-22">
              <Image
                src="/images/naira-coin.png"
                alt="Decorative coin"
                width={88}
                height={88}
                className="w-full h-full object-contain animate-pulse"
                style={{ animationDelay: "0.5s" }}
                loading="lazy"
              />
            </div>

            {/* Clouds - optimized images */}
            <div className="absolute top-12 left-8 w-20 h-10 opacity-85 md:top-20 md:left-32 md:w-32 md:h-16">
              <Image
                src="/images/cloud-1.png"
                alt="Decorative cloud"
                width={128}
                height={64}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="absolute top-16 right-6 w-24 h-12 opacity-80 md:top-24 md:right-28 md:w-36 md:h-18">
              <Image
                src="/images/cloud-2.png"
                alt="Decorative cloud"
                width={144}
                height={72}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-36 left-6 w-18 h-9 opacity-75 md:bottom-40 md:left-24 md:w-28 md:h-14">
              <Image
                src="/images/cloud-3.png"
                alt="Decorative cloud"
                width={112}
                height={56}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-32 right-8 w-20 h-10 opacity-80 md:bottom-36 md:right-32 md:w-32 md:h-16">
              <Image
                src="/images/cloud-4.png"
                alt="Decorative cloud"
                width={128}
                height={64}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Green money stack - optimized image */}
            <div className="absolute bottom-40 left-4 w-14 h-11 opacity-80 md:bottom-56 md:left-16 md:w-20 md:h-16">
              <Image
                src="/images/flying-money-1.png"
                alt="Flying money illustration"
                width={80}
                height={64}
                className="w-full h-full object-contain animate-float"
                loading="lazy"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Hero text */}
            <div className="max-w-3xl mx-auto mb-6 md:mb-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-akiba-pink-500 leading-tight">
                Financial literacy and Investment Opportunities at your fingertips.
              </h1>
            </div>

            {/* Central Phone Image - optimized */}
            <div className="relative max-w-xs md:max-w-sm mx-auto">
              <Image
                src="/images/phone-welcome-back.png"
                alt="Akiba app welcome screen"
                width={280}
                height={560}
                className="w-full h-auto drop-shadow-xl md:drop-shadow-2xl mx-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Services Distribution Section - Optimized images */}
        <section className="bg-gray-50 py-12 md:py-24 relative">
          {/* Background curved lines */}
          <div className="absolute inset-0 pointer-events-none opacity-15 md:opacity-25">
            <Image
              src="/images/curved-lines-vector.png"
              alt="Decorative background lines"
              width={1200}
              height={800}
              className="w-full h-full object-cover transform scale-x-[-1]"
              loading="lazy"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-xl md:text-4xl font-bold text-akiba-pink-500 mb-4 md:mb-6 leading-tight">
                  We distribute Financial Services and Products to cater to your financial needs
                </h2>
                <p className="text-sm md:text-lg text-gray-700">
                  At Akiba we're a community that respects and celebrates individuality, self-expression and creativity.
                </p>
              </div>

              <div className="flex justify-center">
                {/* Light background box for illustration */}
                <div className="bg-gray-100/90 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm">
                  <Image
                    src="/images/finance-services-illustration.png"
                    alt="Financial services illustration"
                    width={350}
                    height={300}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - Correct order for mobile */}
        <section className="bg-white py-12 md:py-24 relative">
          {/* Background curved lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10 md:opacity-20">
            <Image
              src="/images/curved-lines-vector.png"
              alt="Decorative background lines"
              width={1200}
              height={800}
              className="w-full h-full object-cover transform rotate-180 scale-x-[-1]"
              loading="lazy"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
              {/* Text content - first on mobile, second on desktop */}
              <div className="order-2 md:order-2">
                <p className="text-sm md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                  Our Mission is to provide you with access to investment opportunities that are aligned with your
                  financial goals. Akiba is a community of like-minded individuals eager to learn and reach success.
                </p>

                <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 w-full md:w-auto justify-center">
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">Join Our Tribe</span>
                </Button>
              </div>

              {/* Image - second on mobile, first on desktop */}
              <div className="order-1 md:order-1 flex justify-center">
                {/* Light background box for illustration */}
                <div className="bg-gray-100/90 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm">
                  <Image
                    src="/images/investment-illustration.png"
                    alt="Investment growth illustration"
                    width={350}
                    height={300}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}