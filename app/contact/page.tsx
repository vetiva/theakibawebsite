import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Phone, Apple, Play, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Contact Section with Pink Background - Much Reduced Height */}
        <section className="bg-gradient-to-br from-akiba-pink-500 to-pink-600 py-4 md:py-6 relative overflow-hidden h-48 md:h-56">
          {/* Decorative cloud elements positioned in the smaller pink section */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top clouds - positioned closer to top */}
            <div className="absolute top-2 left-8 w-20 h-10 opacity-90">
              <Image src="/images/cloud-1.png" alt="" width={80} height={40} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-1 right-12 w-24 h-12 opacity-85">
              <Image src="/images/cloud-2.png" alt="" width={96} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-3 left-1/4 w-16 h-8 opacity-80">
              <Image src="/images/cloud-3.png" alt="" width={64} height={32} className="w-full h-full object-contain" />
            </div>

            {/* Side clouds - positioned in middle area */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-14 h-7 opacity-75">
              <Image src="/images/cloud-4.png" alt="" width={56} height={28} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-20 h-10 opacity-80">
              <Image src="/images/cloud-1.png" alt="" width={80} height={40} className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* White Background Section with Floating Form */}
        <section className="bg-white py-8 relative -mt-32 md:-mt-40">
          <div className="container mx-auto px-4 relative z-10">
            {/* Contact Form Card - Now Floating */}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border-4 border-black shadow-2xl overflow-hidden animate-fade-in-up">
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-akiba-pink-500 mb-8">Email Us</h1>

                <form className="space-y-6">
                  {/* Top Row - Name, Email, Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="relative">
                      <Label htmlFor="name" className="sr-only">
                        Your Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="name"
                          placeholder="Your Name"
                          className="pl-10 py-4 bg-gray-100 border-0 rounded-lg text-base focus:ring-2 focus:ring-akiba-pink-500 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="email" className="sr-only">
                        Your Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your Email Address"
                          className="pl-10 py-4 bg-gray-100 border-0 rounded-lg text-base focus:ring-2 focus:ring-akiba-pink-500 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="phone" className="sr-only">
                        Your Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your Phone Number"
                          className="pl-10 py-4 bg-gray-100 border-0 rounded-lg text-base focus:ring-2 focus:ring-akiba-pink-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown - Matching Screenshot Style */}
                  <div>
                    <Select>
                      <SelectTrigger className="w-full py-4 bg-gray-700 text-white border-0 rounded-lg text-base focus:ring-2 focus:ring-akiba-pink-500 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>General Enquiries</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">SELECT</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Enquiries</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="business">Business Enquiries</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media Enquiries</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <Label htmlFor="message" className="sr-only">
                      Type a message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Type a message..."
                      rows={8}
                      className="w-full bg-gray-100 border-0 rounded-lg text-base resize-none focus:ring-2 focus:ring-akiba-pink-500 transition-all duration-300"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-start">
                    <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Submit message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section - Two Side-by-Side Boxes */}
        <section className="bg-white py-8 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Left Box - Join the Akiba Tribe */}
              <Card className="bg-gray-800 text-white rounded-2xl overflow-hidden">
                <CardContent className="p-8 relative h-80">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">Join the Akiba Tribe</h2>

                  {/* App Download Buttons */}
                  <div className="space-y-4 mb-8">
                    <Button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg w-full flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105">
                      <Apple className="w-5 h-5" />
                      <span className="font-semibold">Download on App Store</span>
                    </Button>

                    <Button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg w-full flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105">
                      <Play className="w-5 h-5" />
                      <span className="font-semibold">Download on Google Play</span>
                    </Button>
                  </div>

                  {/* Decorative Background Element - Bottom Right */}
                  <div className="absolute bottom-0 right-0 w-48 h-32 opacity-80">
                    <Image
                      src="/images/solar-star-decoration.png"
                      alt=""
                      width={192}
                      height={128}
                      className="w-full h-full object-contain object-bottom-right"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Right Box - Community Image */}
              <Card className="rounded-2xl overflow-hidden">
                <CardContent className="p-0 h-80">
                  <Image
                    src="/images/contact-community.png"
                    alt="Akiba community members"
                    width={500}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
