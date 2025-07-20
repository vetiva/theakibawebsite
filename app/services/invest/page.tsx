import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Triangle, BarChart3, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InvestPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link
              href="/"
              className="inline-flex items-center text-akiba-pink-500 hover:text-akiba-pink-600 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Triangle className="w-8 h-8 text-blue-500" />
                  <span className="text-blue-500 font-semibold text-lg">INVEST</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Watch your savings grow faster</h1>
                <p className="text-xl text-gray-600 mb-8">
                  With high-yield returns. A smart financial move that works for you. Diversify your portfolio with our
                  carefully curated investment options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 py-3">
                    Start Investing
                  </Button>
                  <Button
                    variant="outline"
                    className="border-akiba-pink-500 text-akiba-pink-500 hover:bg-akiba-pink-50 bg-transparent"
                  >
                    View Portfolio Options
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/invest-card.png"
                  alt="Invest with Akiba"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Smart Investment Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Diversified Portfolio</h3>
                <p className="text-gray-600">Access to a wide range of investment options to spread your risk.</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Goal-Based Investing</h3>
                <p className="text-gray-600">Set specific financial goals and let us help you achieve them.</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Updates</h3>
                <p className="text-gray-600">Track your investments with real-time market data and insights.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
