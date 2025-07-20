import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, MessageCircle, Calendar, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MeetPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 md:py-24">
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
                  <Users className="w-8 h-8 text-purple-500" />
                  <span className="text-purple-500 font-semibold text-lg">MEET</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join a vibrant community</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Of innovators, supporters, and go-getters—built to inspire, connect, and help you thrive. Network with
                  like-minded individuals and grow together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 py-3">
                    Join Community
                  </Button>
                  <Button
                    variant="outline"
                    className="border-akiba-pink-500 text-akiba-pink-500 hover:bg-akiba-pink-50 bg-transparent"
                  >
                    Browse Events
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/meet-learn-cards.png"
                  alt="Meet the Akiba Community"
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Connect & Grow Together</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discussion Forums</h3>
                <p className="text-gray-600">Engage in meaningful conversations about finance, business, and life.</p>
              </div>
              <div className="text-center">
                <Calendar className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Events</h3>
                <p className="text-gray-600">Attend workshops, webinars, and networking events with fellow members.</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-akiba-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Peer Support</h3>
                <p className="text-gray-600">
                  Get support and encouragement from a community that cares about your success.
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
