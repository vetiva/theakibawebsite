import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CreditCard, ArrowRightLeft, Play } from "lucide-react"
import Image from "next/image"

export default function AkibaPayPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-20 md:py-28 relative overflow-hidden">
          {/* Curved Line Vector Background */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/images/curved-line-vector.png"
                alt=""
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Decorative cloud elements positioned exactly as in screenshot */}
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute top-16 left-16 w-24 h-12">
              <Image src="/images/cloud-1.png" alt="" width={96} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-12 right-20 w-28 h-14">
              <Image
                src="/images/cloud-2.png"
                alt=""
                width={112}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-32 left-32 w-20 h-10">
              <Image src="/images/cloud-3.png" alt="" width={80} height={40} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-24 right-32 w-24 h-12">
              <Image src="/images/cloud-4.png" alt="" width={96} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-40 left-24 w-32 h-16">
              <Image
                src="/images/cloud-1.png"
                alt=""
                width={128}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-32 right-28 w-28 h-14">
              <Image
                src="/images/cloud-2.png"
                alt=""
                width={112}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-48 left-40 w-24 h-12">
              <Image src="/images/cloud-3.png" alt="" width={96} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-44 right-40 w-30 h-15">
              <Image
                src="/images/cloud-4.png"
                alt=""
                width={120}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* AkibaPay Logo */}
            <div className="mb-12 animate-fade-in-up">
              <Image
                src="/images/akibapay-logo.png"
                alt="AkibaPay"
                width={400}
                height={100}
                className="mx-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Hero Text */}
            <div className="max-w-md mx-auto mb-12 animate-fade-in-up delay-200">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                The easiest way to make and accept
                <br />
                payments for merchants
                <br />
                everywhere
              </p>
            </div>

            {/* Service Buttons - Larger and overlapping with orange box behind */}
            <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in-up delay-400 h-40">
              {/* Airtime Top Up - Top center, BEHIND the overlap (lowest z-index) */}
              <Button className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-3 z-5 shadow-lg">
                <Phone className="w-6 h-6" />
                <span>Airtime Top Up</span>
              </Button>

              {/* Bill Payment - Bottom left, on top (higher z-index) */}
              <Button className="absolute top-16 left-12 bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-3 z-30 shadow-lg">
                <CreditCard className="w-6 h-6" />
                <span>Bill Payment</span>
              </Button>

              {/* Easy Transfer - Bottom right, on top (higher z-index) */}
              <Button className="absolute top-16 right-12 bg-purple-500 hover:bg-purple-600 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-3 z-20 shadow-lg">
                <ArrowRightLeft className="w-6 h-6" />
                <span>Easy Transfer</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Section - Moved closer to hero section */}
        <section className="bg-white py-8 md:py-12 relative">
          {/* Curved Line Vector Background - Different orientation */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-full h-full">
              <Image
                src="/images/curved-line-vector.png"
                alt=""
                width={800}
                height={600}
                className="w-full h-full object-cover transform scale-x-[-1] rotate-180"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                We bring to you the <span className="text-akiba-pink-500">ease of payments</span>.
                <br />
                From paying for your utility bills to airtime top up.
                <br />
                We make payments easy through access to
                <br />
                different Merchant payment channels.
              </h2>
              <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 mx-auto">
                <Play className="w-5 h-5" />
                <span>Get Started</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section - Full Width Layout */}
        <section className="bg-gray-50 py-16 md:py-20 relative">
          {/* Curved Line Vector Background - Another orientation */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute bottom-0 left-0 w-full h-full">
              <Image
                src="/images/curved-line-vector.png"
                alt=""
                width={800}
                height={600}
                className="w-full h-full object-cover transform rotate-90"
              />
            </div>
          </div>

          <div className="w-full px-4 md:px-8 relative z-10">
            {/* Services Header */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-akiba-pink-500 mb-4 leading-tight">
                With AkibaPay, you can now easily pay for
                <br />
                the following services, renew your
                <br />
                subscriptions, get data and so much more!
              </h2>
              <p className="text-base text-gray-600 max-w-xl mx-auto">
                With AkibaPay, you can now easily pay for the following services,
                <br />
                renew your subscriptions, get data and so much more!
              </p>
            </div>

            {/* Services Grid with Side Images - Full Width Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-0 w-full max-w-none">
              {/* Left Image - Starts from edge */}
              <div className="hidden xl:block xl:col-span-2 animate-fade-in-left">
                <div className="h-full flex items-center">
                  <Image
                    src="/images/akibapay-man-new.png"
                    alt="Man using AkibaPay"
                    width={300}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Services Grid - 2x4 Layout with optimized height */}
              <div className="xl:col-span-8 animate-fade-in-up delay-200 px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
                  {/* Row 1 */}
                  <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CardContent className="p-6 text-center relative h-36 flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-left">Cable TV</h3>
                      <div className="absolute bottom-6 right-6 w-20 h-20">
                        <Image
                          src="/images/tv-icon.png"
                          alt=""
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CardContent className="p-6 text-center relative h-36 flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-left">Electricity Bill</h3>
                      <div className="absolute bottom-6 right-6 w-20 h-20">
                        <Image
                          src="/images/plug-icon.png"
                          alt=""
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CardContent className="p-6 text-center relative h-36 flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-left">Insurance</h3>
                      <div className="absolute bottom-6 right-6 w-20 h-20">
                        <Image
                          src="/images/shield-icon.png"
                          alt=""
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CardContent className="p-6 text-center relative h-36 flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-left">Visa Fee</h3>
                      <div className="absolute bottom-6 right-6 w-20 h-20">
                        <Image
                          src="/images/plane-icon.png"
                          alt=""
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Row 2 */}
                  <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CardContent className="p-6 text-center relative h-36 flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-left">Travel Ticket</h3>
                      <div className="absolute bottom-6 right-6 w-20 h-20">
                        <Image
                          src="/images/suitcase-icon.png"
                          alt=""
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CardContent className="p-6 text-center relative h-36 flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-left">Church Payments</h3>
                      <div className="absolute bottom-6 right-6 w-20 h-20">
                        <Image
                          src="/images/bishop-icon.png"
                          alt=""
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CardContent className="p-6 text-center relative h-36 flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-left">Internet Service</h3>
                      <div className="absolute bottom-6 right-6 w-20 h-20">
                        <Image
                          src="/images/wifi-icon.png"
                          alt=""
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <CardContent className="p-6 text-center relative h-36 flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-left">Events Ticket</h3>
                      <div className="absolute bottom-6 right-6 w-20 h-20">
                        <Image
                          src="/images/ticket-icon.png"
                          alt=""
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Image - Extends to edge */}
              <div className="hidden xl:block xl:col-span-2 animate-fade-in-right">
                <div className="h-full flex items-center">
                  <Image
                    src="/images/akibapay-woman.png"
                    alt="Woman using AkibaPay"
                    width={300}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Images - Visible only on mobile/tablet */}
            <div className="xl:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="animate-fade-in-up delay-300">
                <Image
                  src="/images/akibapay-man-new.png"
                  alt="Man using AkibaPay"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="animate-fade-in-up delay-400">
                <Image
                  src="/images/akibapay-woman.png"
                  alt="Woman using AkibaPay"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
