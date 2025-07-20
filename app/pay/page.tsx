"use client" // This page needs to be a client component to use useRouter

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CreditCard, ArrowRightLeft, Play, Apple } from "lucide-react" // Import Apple icon
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

          {/* Decorative cloud elements - precisely positioned */}
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

            {/* Enhanced Service Buttons with Optimized Overlapping */}
            <div className="relative max-w-4xl mx-auto mb-8 animate-fade-in-up delay-400">
              {/* Mobile Layout - Stacked */}
              <div className="block md:hidden space-y-4">
                {/* Airtime Top Up - Behind on mobile */}
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full border-2 border-black text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3 w-full max-w-xs mx-auto shadow-lg">
                  <Phone className="w-5 h-5" />
                  <span>Airtime Top Up</span>
                </Button>

                {/* Bill Payment */}
                <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 py-4 rounded-full border-2 border-black text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3 w-full max-w-xs mx-auto shadow-lg">
                  <CreditCard className="w-5 h-5" />
                  <span>Bill Payment</span>
                </Button>

                {/* Easy Transfer */}
                <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full border-2 border-black text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3 w-full max-w-xs mx-auto shadow-lg">
                  <ArrowRightLeft className="w-5 h-5" />
                  <span>Easy Transfer</span>
                </Button>
              </div>

              {/* Desktop Layout - Overlapping */}
              <div className="hidden md:block relative h-32 lg:h-36">
                {/* Airtime Top Up - Behind (lowest z-index) */}
                <Button className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full border-2 border-black text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-3 z-10 shadow-lg">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span>Airtime Top Up</span>
                </Button>

                {/* Bill Payment - Front left (higher z-index) */}
                <Button className="absolute top-8 lg:top-12 left-8 lg:left-16 bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full border-2 border-black text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-3 z-30 shadow-xl">
                  <CreditCard className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span>Bill Payment</span>
                </Button>

                {/* Easy Transfer - Front right (higher z-index) */}
                <Button className="absolute top-8 lg:top-12 right-8 lg:right-16 bg-purple-500 hover:bg-purple-600 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-full border-2 border-black text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-3 z-20 shadow-xl">
                  <ArrowRightLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span>Easy Transfer</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Main Content Section with Optimized Typography */}
        <section className="bg-white py-12 md:py-16 lg:py-20 relative">
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
            <div className="max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
              {/* Enhanced Typography for "We bring to you..." */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6 leading-tight font-jakarta-extrabold">
                We bring to you the ease of{" "}
                <span className="text-akiba-pink-500 relative">
                  payments
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-akiba-pink-500 to-akiba-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </span>
                .
              </h2>

              {/* Enhanced Paragraph Typography */}
              <div className="space-y-1 sm:space-y-2 lg:space-y-3 mb-8 sm:mb-10 lg:mb-12">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 leading-tight font-jakarta-medium">
                  From paying for your utility bills to airtime top up.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 leading-tight font-jakarta-medium">
                  We make payments easy through access to
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 leading-tight font-jakarta-medium">
                  different Merchant payment channels.
                </p>
              </div>

              {/* Download Buttons for Akiba Pay Page */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.akiba.by_vetiva2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="btn-enhanced bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-black flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base font-medium">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>Download on Google Play</span>
                  </Button>
                </a>
                <a
                  href="https://apps.apple.com/us/app/akiba-app/id6471265552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="btn-enhanced bg-akiba-purple-600 hover:bg-akiba-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-black flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base font-medium">
                    <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>Download on App Store</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section with Optimized Typography */}
        <section className="bg-gray-50 py-16 md:py-20 lg:py-24 relative">
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
            {/* Enhanced Services Header Typography */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-akiba-pink-500 mb-2 sm:mb-3 lg:mb-4 leading-tight font-jakarta-extrabold">
                With AkibaPay, you can now easily pay for
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-akiba-pink-500 mb-2 sm:mb-3 lg:mb-4 leading-tight font-jakarta-bold">
                the following services, renew your
              </h3>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-akiba-pink-500 mb-8 sm:mb-10 lg:mb-12 leading-tight font-jakarta-bold">
                subscriptions, get data and so much more!
              </h3>

              {/* Enhanced Subtitle */}
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-jakarta-medium">
                  With AkibaPay, you can now easily pay for the following services,
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-jakarta-medium">
                  renew your subscriptions, get data and so much more!
                </p>
              </div>
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
