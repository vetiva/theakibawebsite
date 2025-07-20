import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Video, Award, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LearnPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16 md:py-24">
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
                  <BookOpen className="w-8 h-8 text-indigo-500" />
                  <span className="text-indigo-500 font-semibold text-lg">LEARN MORE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Learn how money works</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Chat with an Akiba Brand Ambassador— We're ready to answer your questions. Access comprehensive
                  financial education resources and expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 py-3">
                    Start Learning
                  </Button>
                  <Button
                    variant="outline"
                    className="border-akiba-pink-500 text-akiba-pink-500 hover:bg-akiba-pink-50 bg-transparent"
                  >
                    Chat with Ambassador
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/meet-learn-cards.png"
                  alt="Learn with Akiba"
                  width={400}
                  height={300}
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
              Comprehensive Financial Education
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Video className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
                <p className="text-gray-600">
                  Learn through engaging video content covering all aspects of personal finance.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certification Programs</h3>
                <p className="text-gray-600">Earn certificates in financial literacy and investment fundamentals.</p>
              </div>
              <div className="text-center">
                <Lightbulb className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Insights</h3>
                <p className="text-gray-600">
                  Get tips and strategies from financial experts and successful investors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
