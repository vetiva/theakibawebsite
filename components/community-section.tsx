import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Play, Apple } from "lucide-react"
import Image from "next/image"

export function CommunitySection() {
  return (
    <section className="relative">
      {/* Enhanced App Promotion Section */}
      <div className="relative z-20 pb-6 sm:pb-8">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-akiba-orange-500 to-akiba-pink-500 rounded-2xl sm:rounded-3xl border-2 border-black shadow-2xl max-w-6xl mx-auto overflow-hidden">
            <div className="relative h-80 sm:h-96 lg:h-[28rem] p-6 sm:p-8 lg:p-12">
              {/* Enhanced background curved lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-full opacity-30 sm:opacity-40">
                  <Image
                    src="/images/curved-lines-vector.png"
                    alt=""
                    width={800}
                    height={400}
                    className="w-full h-full object-cover object-bottom-right"
                  />
                </div>
              </div>

              {/* Enhanced coin positioning */}
              <div className="absolute bottom-4 sm:bottom-6 right-2 sm:right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 z-20 animate-bounce">
                <Image
                  src="/images/coin.png"
                  alt="Naira coin"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain drop-shadow-lg will-change-transform"
                />
              </div>

              {/* Enhanced flying money elements */}
              <div className="absolute bottom-8 sm:bottom-12 right-12 sm:right-16 w-10 sm:w-14 h-10 sm:h-14 animate-fly-money-1 z-15">
                <Image
                  src="/images/flying-money-1.png"
                  alt="Flying money"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain will-change-transform"
                />
              </div>

              <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 w-8 sm:w-12 h-8 sm:h-12 animate-fly-money-2 z-15">
                <Image
                  src="/images/flying-money-2.png"
                  alt="Flying money"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain will-change-transform"
                />
              </div>

              {/* Enhanced text content */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 text-white animate-fade-in-left z-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                  At Akiba we are a community that respects and celebrates individuality, self-expression and
                  creativity.
                </h2>

                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-script mb-4 sm:mb-6 lg:mb-8 italic">
                  Get the app
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.akiba.by_vetiva2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="btn-enhanced bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-4 sm:px-6 py-3 rounded-lg border-2 border-black flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Download on Google Play</span>
                    </Button>
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/akiba-app/id6471265552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="btn-enhanced bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-4 sm:px-6 py-3 rounded-lg border-2 border-black flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base">
                      <Apple className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Download on App Store</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Enhanced phone image with better responsive sizing */}
              <div className="absolute -bottom-1 sm:-bottom-2 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 z-10">
                <div className="phone-container animate-zoom-in-from-inside w-full h-full">
                  <Image
                    src="/images/hand-with-phone.png"
                    alt="Hand holding phone with Akiba app"
                    width={384}
                    height={384}
                    className="w-full h-full object-contain object-bottom-right animate-phone-pulse-hover will-change-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Join Tribe Section */}
      <div className="bg-gradient-to-br from-akiba-purple-600 to-akiba-purple-800 section-padding-sm relative z-10 -mt-24 sm:-mt-32">
        <div className="container-responsive pt-20 sm:pt-24 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <div className="relative">
                <Image
                  src="/images/community-woman.png"
                  alt="Community member with headphones"
                  width={500}
                  height={600}
                  className="rounded-xl sm:rounded-2xl object-cover transition-transform duration-700 hover:scale-105 w-full max-w-md lg:max-w-lg mx-auto shadow-2xl will-change-transform"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 text-white animate-fade-in-right">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Join the Akiba Tribe Today
              </h2>

              <div className="mb-6 sm:mb-8 lg:mb-10 space-y-2">
                <p className="text-base sm:text-lg lg:text-xl">
                  Meet your people and learn how to invest and save wisely.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">Connect with the Akiba community today.</p>
              </div>

              <form className="space-y-4 sm:space-y-6">
                <div className="animate-fade-in-up delay-100">
                  <Label htmlFor="firstName" className="text-white mb-2 block text-sm sm:text-base">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50 h-10 sm:h-12 text-sm sm:text-base focus-enhanced"
                  />
                </div>

                <div className="animate-fade-in-up delay-200">
                  <Label htmlFor="lastName" className="text-white mb-2 block text-sm sm:text-base">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50 h-10 sm:h-12 text-sm sm:text-base focus-enhanced"
                  />
                </div>

                <div className="animate-fade-in-up delay-300">
                  <Label htmlFor="email" className="text-white mb-2 block text-sm sm:text-base">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@domain.com"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50 h-10 sm:h-12 text-sm sm:text-base focus-enhanced"
                  />
                </div>

                <div className="animate-fade-in-up delay-400">
                  <Button className="btn-enhanced bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-black w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base font-medium">
                    Join the Tribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
