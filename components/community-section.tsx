'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Play, Apple } from "lucide-react"
import Image from "next/image"

export function CommunitySection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/myzdyere', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          _subject: `Join the Tribe Submission from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      {/* Enhanced App Promotion Section */}
      <div className="relative z-20 pb-6 sm:pb-8">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-akiba-orange-500 to-akiba-pink-500 rounded-2xl sm:rounded-3xl border-2 border-black shadow-2xl max-w-6xl mx-auto overflow-hidden">
            <div className="relative h-80 sm:h-96 lg:h-[28rem] p-4 sm:p-6 lg:p-8 xl:p-12">
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
              <div className="absolute bottom-4 sm:bottom-6 right-2 sm:right-4 w-14 sm:w-20 lg:w-24 h-14 sm:h-20 lg:h-24 z-20 animate-bounce">
                <Image
                  src="/images/coin.png"
                  alt="Naira coin"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain drop-shadow-lg will-change-transform"
                />
              </div>

              {/* Enhanced flying money elements */}
              <div className="absolute bottom-8 sm:bottom-12 right-10 sm:right-16 w-8 sm:w-14 h-8 sm:h-14 animate-fly-money-1 z-15">
                <Image
                  src="/images/flying-money-1.png"
                  alt="Flying money"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain will-change-transform"
                />
              </div>

              <div className="absolute bottom-14 sm:bottom-20 right-14 sm:right-20 w-6 sm:w-12 h-6 sm:h-12 animate-fly-money-2 z-15">
                <Image
                  src="/images/flying-money-2.png"
                  alt="Flying money"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain will-change-transform"
                />
              </div>

              {/* Enhanced text content */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 text-white animate-fade-in-left z-10">
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  At Akiba we are a community that respects and celebrates individuality, self-expression and
                  creativity.
                </h2>

                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-script mb-3 sm:mb-4 lg:mb-6 italic">
                  Get the app
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.akiba.by_vetiva2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="btn-enhanced bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-black flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-xs sm:text-sm">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Google Play</span>
                    </Button>
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/akiba-app/id6471265552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="btn-enhanced bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-black flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-xs sm:text-sm">
                      <Apple className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>App Store</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Enhanced phone image - positioned to appear emanating from the bottom */}
              <div className="absolute right-0 bottom-0 w-48 sm:w-64 lg:w-80 xl:w-96 h-auto z-10">
                <div className="phone-container w-full h-full flex items-end">
                  <Image
                    src="/images/hand-with-phone.png"
                    alt="Hand holding phone with Akiba app"
                    width={384}
                    height={384}
                    className="w-full h-auto object-contain object-bottom animate-phone-pulse-hover will-change-transform"
                    style={{ transform: 'translateY(15%)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Join Tribe Section - Mobile Optimized */}
      <div className="bg-gradient-to-br from-akiba-purple-600 to-akiba-purple-800 section-padding-sm relative z-10 -mt-20 sm:-mt-28 lg:-mt-32">
        <div className="container-responsive pt-16 sm:pt-20 lg:pt-24 xl:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <div className="relative">
                <Image
                  src="/images/community-woman.png"
                  alt="Community member with headphones"
                  width={500}
                  height={600}
                  className="rounded-xl sm:rounded-2xl object-cover transition-transform duration-700 hover:scale-105 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto shadow-2xl will-change-transform"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 text-white animate-fade-in-right px-2 sm:px-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Join the Akiba Tribe Today
              </h2>

              <div className="mb-4 sm:mb-6 lg:mb-8 space-y-2">
                <p className="text-sm sm:text-base lg:text-lg">
                  Meet your people and learn how to invest and save wisely.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">Connect with the Akiba community today.</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-4 p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm sm:text-base">
                  Thank you for joining the tribe! We'll be in touch soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm sm:text-base">
                  There was an error submitting your form. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="animate-fade-in-up delay-100">
                  <Label htmlFor="firstName" className="text-white mb-1 sm:mb-2 block text-xs sm:text-sm">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50 h-9 sm:h-10 lg:h-12 text-xs sm:text-sm focus-enhanced"
                  />
                </div>

                <div className="animate-fade-in-up delay-200">
                  <Label htmlFor="lastName" className="text-white mb-1 sm:mb-2 block text-xs sm:text-sm">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50 h-9 sm:h-10 lg:h-12 text-xs sm:text-sm focus-enhanced"
                  />
                </div>

                <div className="animate-fade-in-up delay-300">
                  <Label htmlFor="email" className="text-white mb-1 sm:mb-2 block text-xs sm:text-sm">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white transition-all duration-300 hover:border-white/50 h-9 sm:h-10 lg:h-12 text-xs sm:text-sm focus-enhanced"
                  />
                </div>

                <div className="animate-fade-in-up delay-400 pt-1 sm:pt-2">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-enhanced bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 lg:py-4 rounded-lg border-2 border-black w-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs sm:text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Join the Tribe'}
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