import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getPaginatedPosts, getFeaturedPost } from "@/lib/blog-data"

interface BlogPageProps {
  searchParams: { page?: string }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1
  const featuredPost = getFeaturedPost()
  const { posts, totalPages, hasNextPage, hasPrevPage } = getPaginatedPosts(currentPage)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section with Clouds */}
        <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative cloud elements positioned as in screenshot */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top clouds */}
            <div className="absolute top-8 left-8 w-32 h-16 opacity-70">
              <Image
                src="/images/cloud-1.png"
                alt=""
                width={128}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-4 right-12 w-36 h-18 opacity-65">
              <Image
                src="/images/cloud-2.png"
                alt=""
                width={144}
                height={72}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-12 left-1/4 w-28 h-14 opacity-60">
              <Image
                src="/images/cloud-3.png"
                alt=""
                width={112}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-16 right-1/4 w-32 h-16 opacity-75">
              <Image
                src="/images/cloud-4.png"
                alt=""
                width={128}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom clouds */}
            <div className="absolute bottom-8 left-16 w-24 h-12 opacity-65">
              <Image src="/images/cloud-1.png" alt="" width={96} height={48} className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-12 right-20 w-28 h-14 opacity-70">
              <Image
                src="/images/cloud-2.png"
                alt=""
                width={112}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-16 left-1/3 w-20 h-10 opacity-55">
              <Image src="/images/cloud-3.png" alt="" width={80} height={40} className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-4 right-1/3 w-24 h-12 opacity-80">
              <Image src="/images/cloud-4.png" alt="" width={96} height={48} className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-akiba-pink-500 mb-6 animate-fade-in-up">
              Blog
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-gray-800 text-white rounded-2xl border-2 border-black overflow-hidden shadow-2xl animate-fade-in-up">
                <CardContent className="p-0">
                  <Link href={`/blog/${featuredPost?.slug}`}>
                    <div className="grid md:grid-cols-2 gap-0 min-h-[400px] cursor-pointer group">
                      {/* Left Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <span className="text-akiba-pink-500 text-sm font-semibold uppercase tracking-wide mb-4 block">
                            {featuredPost?.category}
                          </span>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight group-hover:text-akiba-pink-100 transition-colors">
                            {featuredPost?.title}
                          </h2>
                          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                            {featuredPost?.excerpt}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{featuredPost?.publishedAt}</p>
                        </div>
                      </div>

                      {/* Right Image */}
                      <div className="relative min-h-[300px] md:min-h-[400px]">
                        <Image
                          src={featuredPost?.featuredImage || "/placeholder.svg"}
                          alt={featuredPost?.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.map((post, index) => (
                    <Card
                      key={post.id}
                      className={`bg-white rounded-2xl border-2 border-black overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-${(index + 1) * 100}`}
                    >
                      <CardContent className="p-0">
                        <Link href={`/blog/${post.slug}`}>
                          <div className="aspect-video relative">
                            <Image
                              src={post.featuredImage || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-akiba-pink-500 mb-4 leading-tight hover:text-akiba-pink-600 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">{post.excerpt}</p>
                            <p className="text-gray-400 text-sm">{post.publishedAt}</p>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No posts found on this page.</p>
                  <Link href="/blog">
                    <Button className="mt-4 bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white">
                      Back to First Page
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pagination Section - Replace the existing one */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <Link href={hasPrevPage ? `/blog?page=${currentPage - 1}` : "#"}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-8 h-8 p-0 ${!hasPrevPage ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-gray-600"}`}
                    disabled={!hasPrevPage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </Link>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <Link key={pageNum} href={`/blog?page=${pageNum}`}>
                    <Button
                      size="sm"
                      className={`w-8 h-8 p-0 border border-black ${
                        currentPage === pageNum
                          ? "bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white border-black"
                          : "bg-transparent text-gray-600 hover:text-akiba-pink-500 hover:bg-akiba-pink-50 border-black"
                      }`}
                    >
                      {pageNum}
                    </Button>
                  </Link>
                ))}

                {/* Next Button */}
                <Link href={hasNextPage ? `/blog?page=${currentPage + 1}` : "#"}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-8 h-8 p-0 ${!hasNextPage ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-gray-600"}`}
                    disabled={!hasNextPage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Page Info */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                Page {currentPage} of {totalPages} • Showing {posts.length} posts
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
