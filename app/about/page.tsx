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
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden">
          {/* Background curved lines - positioned as in screenshot */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full opacity-40">
              <Image
                src="/images/curved-lines-vector.png"
                alt=""
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Decorative elements positioned exactly as in screenshot */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Coins - exact positions and sizes from screenshot */}
            <div className="absolute top-36 left-20 w-14 h-14 opacity-95">
              <Image
                src="/images/naira-coin.png"
                alt=""
                width={56}
                height={56}
                className="w-full h-full object-contain animate-bounce"
              />
            </div>
            <div className="absolute top-52 right-24 w-18 h-18 opacity-90">
              <Image
                src="/images/naira-coin.png"
                alt=""
                width={72}
                height={72}
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
            <div className="absolute bottom-48 left-28 w-10 h-10 opacity-85">
              <Image
                src="/images/naira-coin.png"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-contain animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </div>
            <div className="absolute bottom-32 right-20 w-22 h-22 opacity-90">
              <Image
                src="/images/naira-coin.png"
                alt=""
                width={88}
                height={88}
                className="w-full h-full object-contain animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            {/* Clouds - more visible and positioned as in screenshot */}
            <div className="absolute top-20 left-32 w-32 h-16 opacity-85">
              <Image
                src="/images/cloud-1.png"
                alt=""
                width={128}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-24 right-28 w-36 h-18 opacity-80">
              <Image
                src="/images/cloud-2.png"
                alt=""
                width={144}
                height={72}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-40 left-24 w-28 h-14 opacity-75">
              <Image
                src="/images/cloud-3.png"
                alt=""
                width={112}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-36 right-32 w-32 h-16 opacity-80">
              <Image
                src="/images/cloud-4.png"
                alt=""
                width={128}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Green money stack - retain original image, not converted to shape */}
            <div className="absolute bottom-56 left-16 w-20 h-16 opacity-80">
              <Image
                src="/images/flying-money-1.png"
                alt="Money stack"
                width={80}
                height={64}
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Hero text positioned as in screenshot */}
            <div className="max-w-3xl mx-auto mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-akiba-pink-500 animate-fade-in-up leading-tight">
                Financial literacy and Investment Opportunities at your fingertips.
              </h1>
            </div>

            {/* Central Phone Image */}
            <div className="relative max-w-sm mx-auto animate-fade-in-up delay-400">
              <Image
                src="/images/phone-welcome-back.png"
                alt="Akiba app welcome screen"
                width={280}
                height={560}
                className="transition-transform duration-500 hover:scale-105 drop-shadow-2xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Services Distribution Section */}
        <section className="bg-gray-50 py-16 md:py-24 relative">
          {/* Background curved lines */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <Image
              src="/images/curved-lines-vector.png"
              alt=""
              width={1200}
              height={800}
              className="w-full h-full object-cover transform scale-x-[-1]"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-akiba-pink-500 mb-6 leading-tight">
                  We distribute Financial Services and Products to cater to your financial needs
                </h2>
                <p className="text-lg text-gray-700">
                  At Akiba we're a community that respects and celebrates individuality, self-expression and creativity.
                </p>
              </div>

              <div className="animate-fade-in-right flex justify-center">
                {/* Light background box for illustration */}
                <div className="bg-gray-100/90 rounded-2xl p-8 shadow-sm">
                  <Image
                    src="/images/finance-services-illustration.png"
                    alt="Financial services illustration"
                    width={350}
                    height={300}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white py-16 md:py-24 relative">
          {/* Background curved lines - different direction */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <Image
              src="/images/curved-lines-vector.png"
              alt=""
              width={1200}
              height={800}
              className="w-full h-full object-cover transform rotate-180 scale-x-[-1]"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in-left flex justify-center">
                {/* Light background box for illustration */}
                <div className="bg-gray-100/90 rounded-2xl p-8 shadow-sm">
                  <Image
                    src="/images/investment-illustration.png"
                    alt="Investment growth illustration"
                    width={350}
                    height={300}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className="animate-fade-in-right">
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Our Mission is to provide you with access to investment opportunities that are aligned with your
                  financial goals. Akiba is a community of like-minded individuals eager to learn and reach success.
                </p>

                <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Play className="w-5 h-5" />
                  <span>Join Our Tribe</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
