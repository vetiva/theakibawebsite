import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CreditCard, Clock, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PayBillsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
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
                  <CreditCard className="w-8 h-8 text-green-500" />
                  <span className="text-green-500 font-semibold text-lg">PAY BILLS</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Quick, flexible loans with fair rates
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  That'll help boost your business—no hidden fees, no long waits. Get the financial support you need
                  when you need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 py-3">
                    Apply for Loan
                  </Button>
                  <Button
                    variant="outline"
                    className="border-akiba-pink-500 text-akiba-pink-500 hover:bg-akiba-pink-50 bg-transparent"
                  >
                    Check Eligibility
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/pay-bills-card.png"
                  alt="Pay Bills with Akiba"
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
              Why Choose Our Loan Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Approval</h3>
                <p className="text-gray-600">Get approved in minutes, not days. Fast processing for urgent needs.</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fair Interest Rates</h3>
                <p className="text-gray-600">Competitive rates with no hidden fees or surprise charges.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Terms</h3>
                <p className="text-gray-600">Choose repayment terms that work for your business and cash flow.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
