import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Triangle, CreditCard, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServicesSection() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-akiba-pink-500 mb-3 sm:mb-4 md:mb-5 leading-tight">
            Take your pick
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">What do you need to do to be a success?</p>
        </div>

        {/* Enhanced Top 3 Cards - Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Save Card */}
          <Card className="overflow-hidden card-interactive animate-fade-in-up delay-100 bg-white border-2 border-black hover:border-akiba-pink-500 transition-all duration-300 h-full flex flex-col">
            <CardContent className="p-5 sm:p-6 md:p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-3 sm:mb-4 md:mb-5">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-500 animate-coin-bounce" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Save</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow text-sm sm:text-sm md:text-base leading-relaxed">
                Easy to use, built to grow your money, and designed with features that suit everyone.
              </p>

              {/* Learn More Button */}
              <Link href="/services/save" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group text-sm sm:text-sm md:text-base transition-all duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Enhanced Border */}
              <div className="mt-4 sm:mt-5 md:mt-6 -mx-5 sm:-mx-6 md:-mx-8 -mb-5 sm:-mb-6 md:-mb-8 h-40 sm:h-44 md:h-52 lg:h-56 border-2 border-black overflow-hidden">
                <Image
                  src="/images/save-piggy-tile.png"
                  alt="Save illustration"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 will-change-transform"
                  priority={false}
                />
              </div>
            </CardContent>
          </Card>

          {/* Invest Card */}
          <Card className="overflow-hidden card-interactive animate-fade-in-up delay-200 bg-white border-2 border-black hover:border-akiba-pink-500 transition-all duration-300 h-full flex flex-col">
            <CardContent className="p-5 sm:p-6 md:p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-3 sm:mb-4 md:mb-5">
                <Triangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 animate-cube-rotate" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Invest</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow text-sm sm:text-sm md:text-base leading-relaxed">
                Watch your savings grow faster with high-yield returns. A smart financial move that works for you.
              </p>

              {/* Learn More Button */}
              <Link href="/services/invest" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group text-sm sm:text-sm md:text-base transition-all duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Enhanced Border */}
              <div className="mt-4 sm:mt-5 md:mt-6 -mx-5 sm:-mx-6 md:-mx-8 -mb-5 sm:-mb-6 md:-mb-8 h-40 sm:h-44 md:h-52 lg:h-56 border-2 border-black overflow-hidden">
                <Image
                  src="/images/invest-cube-tile.png"
                  alt="Invest illustration"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 will-change-transform"
                  priority={false}
                />
              </div>
            </CardContent>
          </Card>

          {/* Pay Bills Card */}
          <Card className="overflow-hidden card-interactive animate-fade-in-up delay-300 bg-white border-2 border-black hover:border-akiba-pink-500 transition-all duration-300 h-full flex flex-col md:col-span-2 lg:col-span-1">
            <CardContent className="p-5 sm:p-6 md:p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-3 sm:mb-4 md:mb-5">
                <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500 animate-card-wiggle" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Pay Bills</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow text-sm sm:text-sm md:text-base leading-relaxed">
                Get quick, flexible loans with fair rates that'll help boost your business—no hidden fees, no long
                waits.
              </p>

              {/* Learn More Button */}
              <Link href="/services/pay-bills" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group text-sm sm:text-sm md:text-base transition-all duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Enhanced Border */}
              <div className="mt-4 sm:mt-5 md:mt-6 -mx-5 sm:-mx-6 md:-mx-8 -mb-5 sm:-mb-6 md:-mb-8 h-40 sm:h-44 md:h-52 lg:h-56 border-2 border-black overflow-hidden">
                <Image
                  src="/images/pay-bills-tile.png"
                  alt="Pay Bills illustration"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 will-change-transform"
                  priority={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Bottom 2 Cards - Better responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in-up delay-400">
          {/* Meet Card */}
          <Card className="overflow-hidden card-interactive bg-white border-2 border-black hover:border-akiba-pink-500 transition-all duration-300 h-full flex flex-col">
            <CardContent className="p-5 sm:p-6 md:p-7 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-3 sm:mb-4 md:mb-5">
                <Users className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-500 animate-handshake-pulse" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Meet</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow text-sm sm:text-sm md:text-base leading-relaxed">
                Join a vibrant community of innovators, supporters, and go-getters—built to inspire, connect, and help
                you thrive.
              </p>

              {/* Learn More Button */}
              <Link href="/services/meet" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group text-sm sm:text-sm md:text-base transition-all duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Enhanced Border */}
              <div className="mt-4 sm:mt-5 md:mt-6 -mx-5 sm:-mx-6 md:-mx-7 -mb-5 sm:-mb-6 md:-mb-7 h-36 sm:h-40 md:h-44 lg:h-48 border-2 border-black overflow-hidden">
                <Image
                  src="/images/handshake-tile.png"
                  alt="Meet community illustration"
                  width={350}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 will-change-transform"
                  priority={false}
                />
              </div>
            </CardContent>
          </Card>

          {/* Learn More Card */}
          <Card className="overflow-hidden card-interactive bg-white border-2 border-black hover:border-akiba-pink-500 transition-all duration-300 h-full flex flex-col">
            <CardContent className="p-5 sm:p-6 md:p-7 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-3 sm:mb-4 md:mb-5">
                <BookOpen className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-500 animate-phone-glow" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Learn More</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow text-sm sm:text-sm md:text-base leading-relaxed">
                Learn how money works, chat with an Akiba Brand Ambassador— We're ready to answer your questions.
              </p>

              {/* Learn More Button */}
              <Link href="/services/learn" className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-akiba-pink-500 font-semibold p-0 h-auto justify-start group text-sm sm:text-sm md:text-base transition-all duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom Image with Enhanced Border */}
              <div className="mt-4 sm:mt-5 md:mt-6 -mx-5 sm:-mx-6 md:-mx-7 -mb-5 sm:-mb-6 md:-mb-7 h-36 sm:h-40 md:h-44 lg:h-48 border-2 border-black overflow-hidden">
                <Image
                  src="/images/phone-akiba-tile.png"
                  alt="Learn more illustration"
                  width={350}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 will-change-transform"
                  priority={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}