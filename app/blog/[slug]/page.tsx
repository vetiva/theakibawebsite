import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Blog Post Header */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-akiba-pink-500 hover:text-akiba-pink-600 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-akiba-pink-500 mb-6 leading-tight animate-fade-in-up">
                {post.title}
              </h1>

              <div className="flex items-center space-x-4 text-gray-600 mb-8 animate-fade-in-up delay-200">
                <span className="text-sm font-medium">{post.author}</span>
                <span className="text-sm">•</span>
                <span className="text-sm">{post.publishedAt}</span>
                <span className="text-sm">•</span>
                <span className="text-sm bg-akiba-pink-100 text-akiba-pink-600 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-lg animate-fade-in-up delay-300">
                <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none animate-fade-in-up delay-400">
                {post.content.split("\n\n").map((paragraph, index) => {
                  // Insert image after certain paragraphs if available
                  const shouldInsertImage = index === 2 && post.images && post.images.length > 0

                  return (
                    <div key={index}>
                      <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">{paragraph}</p>

                      {shouldInsertImage && (
                        <div className="my-12">
                          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src={post.images[0] || "/placeholder.svg"}
                              alt="Blog illustration"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Related Blogs Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-akiba-pink-500 mb-8 animate-fade-in-up">
                Related Blogs
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Card
                    key={relatedPost.id}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-${(index + 1) * 100}`}
                  >
                    <CardContent className="p-0">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <div className="aspect-video relative">
                          <Image
                            src={relatedPost.featuredImage || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:p-8">
                          <h3 className="text-xl md:text-2xl font-bold text-akiba-pink-500 mb-4 leading-tight hover:text-akiba-pink-600 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                            {relatedPost.excerpt}
                          </p>
                          <p className="text-gray-400 text-sm">{relatedPost.publishedAt}</p>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
