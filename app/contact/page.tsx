"use client"

import type React from "react"
import { useState } from "react" 
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

interface FormData {
  name: string
  email: string
  phone: string
  enquiryType: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/xrblblal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          enquiryType: formData.enquiryType,
          message: formData.message,
          _subject: `Contact Form Submission - ${formData.enquiryType || "General Enquiry"}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiryType: "",
          message: "",
        })
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Contact Section with Pink Background - Reduced Height */}
        <section className="bg-gradient-to-br from-akiba-pink-500 to-pink-600 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem]">
          {/* Decorative cloud elements - Strategically overlapping */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Back layer - Large base clouds */}
            <div className="absolute top-4 sm:top-8 left-8 sm:left-16 w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 md:h-24 lg:h-28 opacity-70 animate-float z-10">
              <Image
                src="/images/cloud-1.png"
                alt=""
                width={224}
                height={112}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            <div className="absolute top-8 sm:top-12 right-4 sm:right-12 w-28 sm:w-36 md:w-44 lg:w-52 h-14 sm:h-18 md:h-22 lg:h-26 opacity-65 animate-float-delayed z-10">
              <Image
                src="/images/cloud-2.png"
                alt=""
                width={208}
                height={104}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* Middle layer - Overlapping clouds */}
            <div className="absolute top-12 sm:top-16 left-20 sm:left-28 md:left-36 w-24 sm:w-32 md:w-40 lg:w-48 h-12 sm:h-16 md:h-20 lg:h-24 opacity-85 animate-float-slow z-20">
              <Image
                src="/images/cloud-3.png"
                alt=""
                width={192}
                height={96}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            <div className="absolute top-6 sm:top-10 right-16 sm:right-24 md:right-32 w-26 sm:w-34 md:w-42 lg:w-50 h-13 sm:h-17 md:h-21 lg:h-25 opacity-80 animate-float z-20">
              <Image
                src="/images/cloud-4.png"
                alt=""
                width={200}
                height={100}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Front layer - Small accent clouds overlapping others */}
            <div className="absolute top-16 sm:top-20 left-32 sm:left-44 md:left-56 w-18 sm:w-24 md:w-32 lg:w-40 h-9 sm:h-12 md:h-16 lg:h-20 opacity-90 animate-float-delayed z-30">
              <Image
                src="/images/cloud-1.png"
                alt=""
                width={160}
                height={80}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            <div className="absolute top-14 sm:top-18 right-28 sm:right-40 md:right-52 w-20 sm:w-28 md:w-36 lg:w-44 h-10 sm:h-14 md:h-18 lg:h-22 opacity-95 animate-float-slow z-30">
              <Image
                src="/images/cloud-2.png"
                alt=""
                width={176}
                height={88}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* White Background Section with Floating Form - Adjusted overlap */}
        <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 relative -mt-40 sm:-mt-48 md:-mt-56 lg:-mt-64 xl:-mt-72">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Contact Form Card - Responsive sizing and spacing */}
            <div className="max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border-2 sm:border-3 md:border-4 border-black shadow-xl sm:shadow-2xl overflow-hidden animate-fade-in-up min-h-[32rem] sm:min-h-[36rem] md:min-h-[40rem] lg:min-h-[44rem]">
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
                {/* Responsive heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-akiba-pink-500 mb-6 sm:mb-8 text-center sm:text-left">
                  Email Us
                </h1>

                {/* Success/Error Messages - Responsive */}
                {submitStatus === "success" && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm sm:text-base">
                    <strong>Message sent successfully!</strong> Thank you for contacting us. We'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm sm:text-base">
                    There was an error processing your request. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Top Row - Better mobile stacking */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    <div className="relative md:col-span-2 xl:col-span-1">
                      <Label htmlFor="name" className="sr-only">
                        Your Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="pl-10 sm:pl-12 py-4 sm:py-5 bg-gray-100 border-0 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-akiba-pink-500 transition-all duration-300 w-full"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative md:col-span-2 xl:col-span-1">
                      <Label htmlFor="email" className="sr-only">
                        Your Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your Email Address"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pl-10 sm:pl-12 py-4 sm:py-5 bg-gray-100 border-0 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-akiba-pink-500 transition-all duration-300 w-full"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative md:col-span-2 xl:col-span-1">
                      <Label htmlFor="phone" className="sr-only">
                        Your Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="pl-10 sm:pl-12 py-4 sm:py-5 bg-gray-100 border-0 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-akiba-pink-500 transition-all duration-300 w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown - Better mobile sizing */}
                  <div>
                    <Select onValueChange={(value) => handleInputChange("enquiryType", value)}>
                      <SelectTrigger className="w-full py-4 sm:py-5 bg-gray-700 text-white border-0 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-akiba-pink-500 flex items-center justify-between">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-500 rounded-full"></div>
                          <span className="truncate">{formData.enquiryType || "General Enquiries"}</span>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                          <span className="text-sm sm:text-base font-medium hidden sm:inline">SELECT</span>
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
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

                  {/* Message Textarea - Better mobile sizing */}
                  <div>
                    <Label htmlFor="message" className="sr-only">
                      Type a message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Type a message..."
                      rows={8}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full bg-gray-100 border-0 rounded-lg text-base sm:text-lg resize-none focus:ring-2 focus:ring-akiba-pink-500 transition-all duration-300 min-h-[160px] sm:min-h-[200px] md:min-h-[240px]"
                      required
                    />
                  </div>

                  {/* Submit Button - Better mobile sizing */}
                  <div className="flex justify-center sm:justify-start pt-2 sm:pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-lg border-2 border-black text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto min-w-[200px] sm:min-w-[240px]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section - Responsive grid and spacing */}
        <section className="bg-white py-6 sm:py-8 md:py-12 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
              {/* Left Box - Join the Akiba Tribe - Responsive */}
              <Card className="bg-gray-800 text-white rounded-xl sm:rounded-2xl border-2 border-black overflow-hidden relative">
                <CardContent className="p-4 sm:p-6 md:p-8 relative h-96 sm:h-112 md:h-128 lg:h-144 xl:h-160">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                    Join the Akiba Tribe
                  </h2>

                  {/* App Download Buttons - Left Aligned */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
                    <a
                      href="https://apps.apple.com/us/app/akiba-app/id6471265552"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="bg-white hover:bg-gray-100 text-gray-800 px-1 sm:px-2 py-1.5 sm:py-2 rounded-lg border-2 border-black w-auto flex items-center justify-center space-x-1 transition-all duration-300 hover:scale-105 text-xs sm:text-sm">
                        <Apple className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="font-semibold whitespace-nowrap">Download on App Store</span>
                      </Button>
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.akiba.by_vetiva2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="bg-white hover:bg-gray-100 text-gray-800 px-1 sm:px-2 py-1.5 sm:py-2 rounded-lg border-2 border-black w-auto flex items-center justify-center space-x-1 transition-all duration-300 hover:scale-105 text-xs sm:text-sm">
                        <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="font-semibold whitespace-nowrap">Download on Google Play</span>
                      </Button>
                    </a>
                  </div>

                  {/* Decorative Background Element - Star touching right edge */}
                  <div className="absolute bottom-0 right-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 opacity-90">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/solar-star-decoration.png"
                        alt=""
                        width={320}
                        height={208}
                        className="w-full h-full object-contain object-right-bottom"
                        style={{
                          transform: 'translate(5%, 5%)'
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Box - Community Image - Responsive */}
              <Card className="rounded-xl sm:rounded-2xl overflow-hidden">
                <CardContent className="p-0 h-96 sm:h-112 md:h-128 lg:h-144 xl:h-160">
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