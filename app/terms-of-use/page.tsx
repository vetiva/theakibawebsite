"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Scale, Shield, FileText, Clock, BookOpen } from "lucide-react"

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Professional Hero Section with reduced padding */}
        <section className="bg-gradient-to-br from-gray-50 to-akiba-pink-50 py-10 md:py-16 relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-akiba-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-akiba-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-jakarta-extrabold">
                Akiba Terms of Use
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed font-jakarta-medium">
                Understanding our agreement for using Akiba services
              </p>

              {/* Last Updated */}
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                <Clock className="w-4 h-4 text-akiba-pink-500 mr-2" />
                <span className="text-sm font-jakarta-medium text-gray-700">Last Updated: October 1, 2023</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section with minimal top padding */}
        <section className="bg-white pt-6 pb-16 md:pt-8 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Terms Content */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  {[
                    {
                      id: "acceptance",
                      title: "Acceptance of Terms",
                      content: "By accessing or using Akiba (the \"Platform\"), you agree to comply with and be bound by these Terms of Use (\"Terms\"). If you do not agree with these Terms, please do not use the Platform."
                    },
                    {
                      id: "eligibility",
                      title: "Eligibility",
                      content: "You must be at least 18 years old and capable of forming a legally binding contract to use the Platform. By using the Platform, you represent and warrant that you meet these requirements."
                    },
                    {
                      id: "usage",
                      title: "Use of the Platform",
                      content: "You agree to use the Platform only for lawful and authorized purposes. You may not use the Platform in any way that violates applicable laws or regulations, infringes on the rights of others, or harms the security and integrity of the Platform."
                    },
                    {
                      id: "privacy",
                      title: "Privacy",
                      content: "Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review the Privacy Policy to understand how we collect, use, and disclose your personal information."
                    },
                    {
                      id: "accounts",
                      title: "User Accounts",
                      content: "To access certain features of the Platform, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and all activities under your account."
                    },
                    {
                      id: "transactions",
                      title: "Transactions",
                      content: "The Platform may allow you to conduct financial transactions. Any financial transactions are subject to additional terms and conditions. By using the Platform for financial transactions, you agree to comply with these additional terms."
                    },
                    {
                      id: "property",
                      title: "Intellectual Property",
                      content: "The content, design, and all materials on the Platform are owned by us or our licensors and are protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content from the Platform without our prior written consent."
                    },
                    {
                      id: "disclaimers",
                      title: "Disclaimers",
                      content: "The Platform is provided \"as is\" and \"as available\" without any warranties. We do not guarantee that the Platform will be error-free, secure, or free from viruses. You use the Platform at your own risk."
                    },
                    {
                      id: "liability",
                      title: "Limitation of Liability",
                      content: "To the extent permitted by applicable law, we shall not be liable for any indirect, incidental, consequential, or punitive damages, or for any loss of profits or revenue, whether incurred directly or indirectly."
                    },
                    {
                      id: "termination",
                      title: "Termination",
                      content: "We reserve the right to suspend, restrict, or terminate your access to the Platform at our discretion, with or without cause, and with or without notice."
                    },
                    {
                      id: "changes",
                      title: "Changes to Terms",
                      content: "We may revise these Terms at any time by updating this page. You are bound by the most current version of these Terms, so we encourage you to review them periodically."
                    },
                    {
                      id: "governance",
                      title: "Governing Law",
                      content: "These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Lagos, Nigeria for the resolution of any disputes."
                    }
                  ].map((item, index) => (
                    <div key={item.id} id={item.id} className="mb-8 last:mb-0">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-akiba-pink-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-akiba-pink-600 font-jakarta-semibold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-jakarta-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 font-jakarta-regular ml-14">{item.content}</p>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="mt-10 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-akiba-pink-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-akiba-pink-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-jakarta-semibold text-gray-900 mb-2">Need Help?</h4>
                      <p className="text-gray-700 font-jakarta-regular">
                        If you have any questions about these Terms, please contact us at{" "}
                        <a 
                          href="mailto:info@akibatribe.com" 
                          className="text-akiba-pink-600 hover:text-akiba-pink-700 font-jakarta-semibold transition-colors duration-300"
                        >
                          info@akibatribe.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Effective Date */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 font-jakarta-regular">
                    <strong>Effective Date:</strong> October 1, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}