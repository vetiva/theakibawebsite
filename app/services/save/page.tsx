import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, Shield, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SavePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16 md:py-24">
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
                  <Star className="w-8 h-8 text-orange-500" />
                  <span className="text-orange-500 font-semibold text-lg">SAVE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Easy to use, built to grow your money
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Designed with features that suit everyone. Start your savings journey with Akiba and watch your money
                  grow with competitive interest rates and flexible saving options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 py-3">
                    Start Saving Today
                  </Button>
                  <Button
                    variant="outline"
                    className="border-akiba-pink-500 text-akiba-pink-500 hover:bg-akiba-pink-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/save-card.png"
                  alt="Save with Akiba"
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Akiba Save?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Protected</h3>
                <p className="text-gray-600">
                  Your savings are protected with bank-level security and insurance coverage.
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Returns</h3>
                <p className="text-gray-600">Earn higher interest rates compared to traditional savings accounts.</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Support</h3>
                <p className="text-gray-600">Join a community of savers and get tips to reach your financial goals.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
