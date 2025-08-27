import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function TribePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24 pb-24 md:pb-32 relative overflow-hidden">
          {/* Decorative cloud elements - strategically positioned */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top left clouds */}
            <div className="absolute top-8 left-8 w-32 h-16 opacity-60">
              <Image
                src="/images/cloud-decoration-1.png"
                alt=""
                width={128}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-16 left-24 w-28 h-14 opacity-50">
              <Image
                src="/images/cloud-decoration-2.png"
                alt=""
                width={112}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Top right clouds */}
            <div className="absolute top-12 right-12 w-36 h-18 opacity-65">
              <Image
                src="/images/cloud-decoration-1.png"
                alt=""
                width={144}
                height={72}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-20 right-28 w-24 h-12 opacity-55">
              <Image
                src="/images/cloud-decoration-3.png"
                alt=""
                width={96}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom clouds around the group photo */}
            <div className="absolute bottom-32 left-16 w-28 h-14 opacity-60">
              <Image
                src="/images/cloud-decoration-2.png"
                alt=""
                width={112}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-40 right-20 w-32 h-16 opacity-55">
              <Image
                src="/images/cloud-decoration-3.png"
                alt=""
                width={128}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Hero Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-akiba-pink-500 mb-6 animate-fade-in-up">
              Welcome to the Tribe
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 mb-12 md:mb-16 max-w-2xl mx-auto animate-fade-in-up delay-200">
              We are an open community that thrives on connecting like minded individuals to bring their passions to
              life.
            </p>

            {/* Hero Image - Group Photo - positioned to integrate with the wave design below */}
            <div className="relative max-w-4xl mx-auto animate-fade-in-up delay-400 mt-4 md:mt-8">
              <Image
                src="/images/tribe-hero-group.png"
                alt="Akiba Tribe community members"
                width={800}
                height={400}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Content Cards Section with Dark Purple Background and 6 Wavy Contours with 3px Black Border */}
        <section className="relative -mt-48 md:-mt-56">
          {/* Dark Purple section with 6 waves and 3px black border covering whole bottom of group picture */}
          <div className="relative">
            {/* 6 wavy contours with shorter gaps, less depth, and taller section */}
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 650"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                {/* Black border outline - 3px stroke with 6 waves, shorter gaps, less depth */}
                <path
                  d="M0 60C50 40 150 40 200 60C250 80 350 80 400 60C450 40 550 40 600 60C650 80 750 80 800 60C850 40 950 40 1000 60C1050 80 1150 80 1200 60V650H0V60Z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="3"
                />

                {/* Solid dark purple fill with 6 waves */}
                <path
                  d="M0 60C50 40 150 40 200 60C250 80 350 80 400 60C450 40 550 40 600 60C650 80 750 80 800 60C850 40 950 40 1000 60C1050 80 1150 80 1200 60V650H0V60Z"
                  fill="#4A3B5C"
                  className="drop-shadow-lg"
                />
              </svg>
            </div>

            {/* Content area with cards positioned appropriately */}
            <div className="relative z-20 pt-32 md:pt-40 pb-16 md:pb-24">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Blog Card */}
                  <Card className="bg-white rounded-2xl border-2 border-black shadow-xl overflow-hidden animate-fade-in-up delay-100 hover:transform hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Blog</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                        Everything you need to know to improve your financial literacy
                      </p>

                      {/* Blog Illustration */}
                      <div className="mb-4 md:mb-6 bg-gray-50 rounded-xl p-3 md:p-4">
                        <Image
                          src="/images/blog-city-illustration.png"
                          alt="Blog illustration"
                          width={300}
                          height={200}
                          className="w-full h-auto transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <Link href="/blog">
                        <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-4 md:px-6 py-2 rounded-full w-auto transition-all duration-300 hover:shadow-lg text-sm md:text-base">
                          Explore
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Lifestyle Card */}
                  <Card className="bg-white rounded-2xl border-2 border-black shadow-xl overflow-hidden animate-fade-in-up delay-200 hover:transform hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Lifestyle</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                        Your stop shop for all social happenings
                      </p>

                      {/* Lifestyle Illustration */}
                      <div className="mb-4 md:mb-6 bg-gray-50 rounded-xl p-3 md:p-4">
                        <Image
                          src="/images/lifestyle-hands-illustration.png"
                          alt="Lifestyle illustration"
                          width={300}
                          height={200}
                          className="w-full h-auto transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <Link href="/lifestyle">
                        <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-4 md:px-6 py-2 rounded-full w-auto transition-all duration-300 hover:shadow-lg text-sm md:text-base">
                          Explore
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Research Card */}
                  <Card className="bg-white rounded-2xl border-2 border-black shadow-xl overflow-hidden animate-fade-in-up delay-300 hover:transform hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Research</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Business news and highlights</p>

                      {/* Research Illustration */}
                      <div className="mb-4 md:mb-6 bg-gray-50 rounded-xl p-3 md:p-4">
                        <Image
                          src="/images/research-brain-illustration.png"
                          alt="Research illustration"
                          width={300}
                          height={200}
                          className="w-full h-auto transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <Link href="/research">
                        <Button className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white px-4 md:px-6 py-2 rounded-full w-auto transition-all duration-300 hover:shadow-lg text-sm md:text-base">
                          Explore
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
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