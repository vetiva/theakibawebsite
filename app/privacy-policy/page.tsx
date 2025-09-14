"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Clock } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-akiba-pink-50 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight font-jakarta-extrabold">
                Akiba Privacy Policy
              </h1>

              {/* Last Updated */}
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                <Clock className="w-4 h-4 text-akiba-pink-500 mr-2" />
                <span className="text-sm font-jakarta-medium text-gray-700">Last Updated: September 20, 2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introductory Text */}
              <div className="prose prose-lg max-w-none mb-10">
                <div className="bg-akiba-pink-50 border-l-4 border-akiba-pink-500 p-5 rounded-r-lg mb-6">
                  <p className="text-gray-700 font-jakarta-medium leading-relaxed">
                    Akiba operates the akibatribe.com website and the Akiba mobile application, 
                    jointly referred to as "the Site". This policy informs you of our practices 
                    regarding the collection, use, and disclosure of Personal Information.
                  </p>
                </div>
              </div>

              {/* Privacy Content */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                {/* Information Collection and Use */}
                <div className="mb-10">
                  <h3 className="text-xl font-jakarta-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Information Collection and Use</h3>
                  <p className="text-gray-700 font-jakarta-regular">
                    While using our Site, we may ask you to provide us with certain personal information 
                    that can be used to identify and authenticate you. Personal information may include 
                    but is not limited to your name, email address, phone number, bank and Bank account 
                    details ("Personal Information").
                  </p>
                </div>

                {/* Communications */}
                <div className="mb-10">
                  <h3 className="text-xl font-jakarta-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Communications</h3>
                  <p className="text-gray-700 font-jakarta-regular">
                    We may use your Personal Information to contact you with newsletters, marketing or 
                    promotional materials, and other information that is relevant to your savings and 
                    investments.
                  </p>
                </div>

                {/* Cookies */}
                <div className="mb-10">
                  <h3 className="text-xl font-jakarta-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Cookies</h3>
                  <p className="text-gray-700 font-jakarta-regular">
                    Cookies are files with small amount of data, which may include an anonymous unique 
                    identifier. Cookies are sent to your browser from a website and stored on your 
                    computer's hard drive. Like many sites, we use "cookies" to collect information. 
                    You can instruct your browser to refuse all cookies or to indicate when a cookie 
                    is being sent. However, if you do not accept cookies, you may not be able to use 
                    some portions of our Site.
                  </p>
                </div>

                {/* Data Retention */}
                <div className="mb-10">
                  <h3 className="text-xl font-jakarta-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Data Retention</h3>
                  <p className="text-gray-700 font-jakarta-regular">
                    Your Personal Information will not be retained for longer than is necessary for 
                    the purposes for which it was processed unless a longer retention period is 
                    required or permitted by law.
                  </p>
                </div>

                {/* Changes To This Privacy Policy */}
                <div className="mb-10">
                  <h3 className="text-xl font-jakarta-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Changes To This Privacy Policy</h3>
                  <p className="text-gray-700 font-jakarta-regular">
                    This Privacy Policy is effective as of 20th September 2021 and will remain in 
                    effect except for any changes in its provisions in the future, which will be in 
                    effect immediately after being published on this page. We reserve the right to 
                    update or change our Privacy Policy at any time, hence you should check this 
                    Privacy Policy periodically. Your continued use of the Service after any 
                    modifications to the Privacy Policy on this page will constitute your 
                    acknowledgment of the modifications and your consent to abide and be bound by 
                    the modified Privacy Policy.
                  </p>
                  <p className="text-gray-700 font-jakarta-regular mt-4">
                    If we make any material changes to this Privacy Policy, we will notify you 
                    either through the email address you have provided us or by placing a prominent 
                    notice on our website.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-10 p-5 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-akiba-pink-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-akiba-pink-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-jakarta-semibold text-gray-900 mb-2">Contact Information</h4>
                      <p className="text-gray-700 font-jakarta-regular">
                        If you have any questions about this Privacy Policy, please contact us at{" "}
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
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                    <Clock className="w-4 h-4 text-akiba-pink-500 mr-2" />
                    <p className="text-sm text-gray-500 font-jakarta-regular">
                      <strong>Effective Date:</strong> September 20, 2021
                    </p>
                  </div>
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