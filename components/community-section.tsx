import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Play, Apple } from "lucide-react"
import Image from "next/image"

export function CommunitySection() {
  return (
    <section className="relative">
      {/* App Promotion Section - Back to Initial Format */}
      <div className="relative z-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-akiba-orange-500 to-akiba-pink-500 rounded-3xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
            <div className="relative h-96 p-8 md:p-12">
              {/* Background curved lines starting from hand-holding phone */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-full opacity-40">
                  <Image
                    src="/images/curved-lines-vector.png"
                    alt=""
                    width={800}
                    height={400}
                    className="w-full h-full object-cover object-bottom-right"
                  />
                </div>
              </div>

              {/* Large coin positioned very close to hand-holding phone */}
              <div className="absolute bottom-6 right-4 w-20 h-20 z-20 animate-bounce">
                <Image
                  src="/images/coin.png"
                  alt="Naira coin"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>

              {/* Green money positioned very close to hand-holding phone on the left */}
              <div className="absolute bottom-12 right-16 w-14 h-14 animate-fly-money-1 z-15">
                <Image
                  src="/images/flying-money-1.png"
                  alt="Flying money"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute bottom-20 right-20 w-12 h-12 animate-fly-money-2 z-15">
                <Image
                  src="/images/flying-money-2.png"
                  alt="Flying money"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content - Upper Area */}
              <div className="absolute top-6 left-8 right-8 text-white animate-fade-in-left z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                  At Akiba we are a community that respects and celebrates individuality, self-expression and
                  creativity.
                </h2>

                <p className="text-2xl md:text-3xl font-script mb-8 italic">Get the app</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.akiba.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                      <Play className="w-5 h-5" />
                      <span>Download on Google Play</span>
                    </Button>
                  </a>
                  <a
                    href="https://apps.apple.com/app/akiba/id123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                      <Apple className="w-5 h-5" />
                      <span>Download on App Store</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Phone Image - Bottom Right Corner with Enhanced Motion */}
              <div className="absolute -bottom-2 right-0 w-80 h-80 z-10">
                <div className="phone-container animate-zoom-in-from-inside w-full h-full">
                  <Image
                    src="/images/hand-with-phone.png"
                    alt="Hand holding phone with Akiba app"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain object-bottom-right animate-phone-pulse-hover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Tribe Section - Background Section with Overlap */}
      <div className="bg-gradient-to-br from-akiba-purple-600 to-akiba-purple-800 pt-24 pb-16 relative z-10 -mt-32">
        <div className="container mx-auto px-4 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 animate-fade-in-left">
              <div className="relative">
                <Image
                  src="/images/community-woman.png"
                  alt="Community member with headphones"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover transition-transform duration-500 hover:scale-105 w-full max-w-md mx-auto"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 text-white animate-fade-in-right">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Join the Akiba Tribe Today
              </h2>

              <p className="text-base md:text-lg mb-2">Meet your people and learn how to invest and save wisely.</p>
              <p className="text-base md:text-lg mb-8">Connect with the Akiba community today.</p>

              <form className="space-y-6">
                <div className="animate-fade-in-up delay-100">
                  <Label htmlFor="firstName" className="text-white mb-2 block">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50"
                  />
                </div>

                <div className="animate-fade-in-up delay-200">
                  <Label htmlFor="lastName" className="text-white mb-2 block">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50"
                  />
                </div>

                <div className="animate-fade-in-up delay-300">
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@domain.com"
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50"
                  />
                </div>

                <div className="animate-fade-in-up delay-400">
                  <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 py-3 rounded-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg">
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
