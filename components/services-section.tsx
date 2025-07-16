import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Triangle, CreditCard, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-akiba-pink-500 mb-4">Take your pick</h2>
          <p className="text-lg md:text-xl text-gray-700">What do you need to do to be a success?</p>
        </div>

        {/* Top 3 Cards - Larger with increased height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-8">
          {/* Save Card */}
          <Card className="overflow-hidden card-interactive animate-fade-in-up delay-100 bg-white border-2 border-black hover:border-black transition-all duration-300 h-[600px]">
            <CardContent className="p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-6">
                <Star className="w-8 h-8 text-orange-500 animate-coin-bounce" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Save</h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 flex-grow">
                Easy to use, built to grow your money, and designed with features that suit everyone.
              </p>

              {/* Learn More Button */}
              <Link href="/services/save" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Black Border - Increased height */}
              <div className="mt-8 -mx-8 -mb-8 h-64 border-2 border-black">
                <Image
                  src="/images/save-piggy-tile.png"
                  alt="Save illustration"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>

          {/* Invest Card */}
          <Card className="overflow-hidden card-interactive animate-fade-in-up delay-200 bg-white border-2 border-black hover:border-black transition-all duration-300 h-[600px]">
            <CardContent className="p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-6">
                <Triangle className="w-8 h-8 text-blue-500 animate-cube-rotate" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Invest</h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 flex-grow">
                Watch your savings grow faster with high-yield returns. A smart financial move that works for you.
              </p>

              {/* Learn More Button */}
              <Link href="/services/invest" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Black Border - Increased height */}
              <div className="mt-8 -mx-8 -mb-8 h-64 border-2 border-black">
                <Image
                  src="/images/invest-cube-tile.png"
                  alt="Invest illustration"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>

          {/* Pay Bills Card */}
          <Card className="overflow-hidden card-interactive animate-fade-in-up delay-300 bg-white border-2 border-black hover:border-black transition-all duration-300 h-[600px]">
            <CardContent className="p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-6">
                <CreditCard className="w-8 h-8 text-green-500 animate-card-wiggle" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay Bills</h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 flex-grow">
                Get quick, flexible loans with fair rates that'll help boost your business—no hidden fees, no long
                waits.
              </p>

              {/* Learn More Button */}
              <Link href="/services/pay-bills" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Black Border - Increased height */}
              <div className="mt-8 -mx-8 -mb-8 h-64 border-2 border-black">
                <Image
                  src="/images/pay-bills-tile.png"
                  alt="Pay Bills illustration"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom 2 Cards - Smaller and Centered with increased height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-400">
          {/* Meet Card */}
          <Card className="overflow-hidden card-interactive bg-white border-2 border-black hover:border-black transition-all duration-300 h-[500px]">
            <CardContent className="p-6 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-4">
                <Users className="w-7 h-7 text-purple-500 animate-handshake-pulse" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meet</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                Join a vibrant community of innovators, supporters, and go-getters—built to inspire, connect, and help
                you thrive.
              </p>

              {/* Learn More Button */}
              <Link href="/services/meet" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Black Border - Increased height */}
              <div className="mt-6 -mx-6 -mb-6 h-48 border-2 border-black">
                <Image
                  src="/images/handshake-tile.png"
                  alt="Meet community illustration"
                  width={350}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>

          {/* Learn More Card */}
          <Card className="overflow-hidden card-interactive bg-white border-2 border-black hover:border-black transition-all duration-300 h-[500px]">
            <CardContent className="p-6 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-4">
                <BookOpen className="w-7 h-7 text-indigo-500 animate-phone-glow" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learn More</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 flex-grow text-sm">
                Learn how money works, chat with an Akiba Brand Ambassador— We're ready to answer your questions.
              </p>

              {/* Learn More Button */}
              <Link href="/services/learn" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Black Border - Increased height */}
              <div className="mt-6 -mx-6 -mb-6 h-48 border-2 border-black">
                <Image
                  src="/images/phone-akiba-tile.png"
                  alt="Learn more illustration"
                  width={350}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
