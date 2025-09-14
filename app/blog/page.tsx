import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPosts, urlFor } from "@/lib/sanity"
import { fallbackBlogPosts, POSTS_PER_PAGE, formatDate, type BlogPost } from "@/lib/blog-data"

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Await the searchParams promise first
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  
  let allPosts: BlogPost[] = []
  let featuredPost: BlogPost | null = null
  let posts: BlogPost[] = []
  let totalPages = 1
  let hasNextPage = false
  let hasPrevPage = false

  try {
    const sanityPosts = await getBlogPosts()
    allPosts = sanityPosts?.length > 0 ? sanityPosts : fallbackBlogPosts
  } catch (error) {
    console.error("Error fetching posts:", error)
    allPosts = fallbackBlogPosts
  }

  // Sort posts by date (newest first)
  const sortedPosts = [...allPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  // Set featured post (only used on first page) - always the latest post
  featuredPost = currentPage === 1 ? sortedPosts[0] || null : null

  // Get posts for current page - different logic for page 1 vs other pages
  let postsToDisplay: BlogPost[] = []
  let actualPostsPerPage = POSTS_PER_PAGE

  if (currentPage === 1) {
    // Page 1: Show featured post + up to 6 grid posts
    postsToDisplay = sortedPosts.slice(1) // Remove featured post for grid
    actualPostsPerPage = 6 // Show 6 grid posts on page 1
  } else {
    // Other pages: Show regular posts
    postsToDisplay = [...sortedPosts]
    actualPostsPerPage = 6 // Show 6 posts on other pages
  }

  totalPages = Math.ceil((currentPage === 1 ? sortedPosts.length - 1 : sortedPosts.length) / actualPostsPerPage)
  const startIndex = (currentPage - 1) * actualPostsPerPage
  const endIndex = startIndex + actualPostsPerPage
  posts = postsToDisplay.slice(startIndex, endIndex)

  hasNextPage = currentPage < totalPages
  hasPrevPage = currentPage > 1

  const getExcerpt = (post: BlogPost, maxSentences = 2) => {
    if (post.excerpt?.trim()) return post.excerpt.trim()
    
    if (post.body) {
      const text = typeof post.body === "string" 
        ? post.body 
        : post.body.map((b: any) => b.children?.map((c: any) => c.text).join(" ")).join(" ")
      return text
        .replace(/[#*`]/g, "")
        .trim()
        .split(/(?<=[.?!])\s+/)
        .slice(0, maxSentences)
        .join(" ")
    }
    return ""
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-akiba-pink-500 mb-6">
              Akiba Finance Blog
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Smart insights for smarter financial decisions. Discover expert advice, 
              market trends, and practical tips for your financial journey.
            </p>
          </div>
        </section>

        {/* Featured Post (Only on Page 1) - Latest post */}
        {currentPage === 1 && featuredPost && (
          <section className="bg-white py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <Card className="bg-gray-800 text-white rounded-2xl overflow-hidden shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
                      <div className="p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          {featuredPost.categories?.[0]?.title && (
                            <span className="text-akiba-pink-500 text-sm font-medium uppercase tracking-wide mb-4 block">
                              {featuredPost.categories[0].title}
                            </span>
                          )}
                          <Link href={`/blog/${featuredPost.slug.current}`}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight hover:text-akiba-pink-100 transition-colors">
                              {featuredPost.title}
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                              {getExcerpt(featuredPost)}
                            </p>
                          </Link>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-400 text-sm">
                            {formatDate(featuredPost.publishedAt)}
                          </p>
                          <Button asChild variant="link" className="text-akiba-pink-500 hover:text-akiba-pink-600 p-0 h-auto">
                            <Link href={`/blog/${featuredPost.slug.current}`}>
                              Read More →
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <div className="relative min-h-[300px] md:min-h-[400px]">
                        <Link href={`/blog/${featuredPost.slug.current}`}>
                          <Image
                            src={featuredPost.mainImage 
                              ? urlFor(featuredPost.mainImage).width(600).height(400).url() 
                              : "/images/blog-financial-abstract.png"}
                            alt={featuredPost.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post, index) => (
                    <Card 
                      key={post._id} 
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] border-0 h-full flex flex-col"
                    >
                      <div className="aspect-video relative flex-shrink-0">
                        <Link href={`/blog/${post.slug.current}`}>
                          <Image
                            src={post.mainImage 
                              ? urlFor(post.mainImage).width(400).height(225).url()
                              : `/images/blog-${(index % 6) + 1}.png`}
                            alt={post.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                      </div>
                      <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <Link href={`/blog/${post.slug.current}`}>
                            <h3 className="text-xl md:text-2xl font-bold text-akiba-pink-500 mb-4 leading-tight hover:text-akiba-pink-600 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed line-clamp-3">
                              {getExcerpt(post)}
                            </p>
                          </Link>
                        </div>
                        <div className="flex justify-between items-center mt-auto pt-4">
                          <p className="text-gray-400 text-sm">
                            {formatDate(post.publishedAt)}
                          </p>
                          <Button asChild variant="link" className="text-akiba-pink-500 hover:text-akiba-pink-600 p-0 h-auto">
                            <Link href={`/blog/${post.slug.current}`}>
                              Read More →
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No posts found</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="bg-white py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                <nav className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 shadow-sm">
                  <Link href={hasPrevPage ? `/blog?page=${currentPage - 1}` : "#"} passHref>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-10 h-10 p-0 rounded-md ${
                        !hasPrevPage ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-akiba-pink-500"
                      }`}
                      disabled={!hasPrevPage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                  </Link>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Link key={i} href={`/blog?page=${i + 1}`} passHref>
                      <Button
                        size="sm"
                        className={`w-10 h-10 p-0 rounded-md text-sm font-medium ${
                          currentPage === i + 1
                            ? "bg-akiba-pink-500 text-white shadow-sm"
                            : "bg-white text-gray-700 hover:bg-gray-200 border"
                        }`}
                      >
                        {i + 1}
                      </Button>
                    </Link>
                  ))}
                  
                  <Link href={hasNextPage ? `/blog?page=${currentPage + 1}` : "#"} passHref>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-10 h-10 p-0 rounded-md ${
                        !hasNextPage ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-akiba-pink-500"
                      }`}
                      disabled={!hasNextPage}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </nav>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}