import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPost, getRelatedPosts, urlFor, getBlogPosts } from "@/lib/sanity"
import { fallbackBlogPosts, formatDate, type BlogPost } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { BlogPostActions } from "@/components/blog-post-actions"
import { RelatedPostActions } from "@/components/related-post-actions"
import { portableTextComponents } from "@/components/portable-text-components"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Enhanced related posts algorithm
const getEnhancedRelatedPosts = (currentPost: BlogPost, allPosts: BlogPost[], limit = 3) => {
  const currentCategories = currentPost.categories?.map(cat => cat.title) || []
  
  return allPosts
    .filter(post => post._id !== currentPost._id)
    .sort((a, b) => {
      const aCategories = a.categories?.map(cat => cat.title) || []
      const bCategories = b.categories?.map(cat => cat.title) || []
      
      // Count category matches
      const aMatch = aCategories.filter(cat => currentCategories.includes(cat)).length
      const bMatch = bCategories.filter(cat => currentCategories.includes(cat)).length
      
      // If same category match count, sort by date (newest first)
      if (bMatch === aMatch) {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
      
      return bMatch - aMatch
    })
    .slice(0, limit)
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params promise first
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  let post: BlogPost | null = null
  let relatedPosts: BlogPost[] = []
  let allPosts: BlogPost[] = []

  try {
    // Try to fetch from Sanity first
    post = await getBlogPost(slug)
    
    // Fetch all posts for enhanced related posts
    const sanityPosts = await getBlogPosts()
    allPosts = sanityPosts?.length > 0 ? sanityPosts : fallbackBlogPosts

    if (post) {
      // Use enhanced related posts algorithm
      relatedPosts = getEnhancedRelatedPosts(post, allPosts, 3)
    } else {
      // If no post found in Sanity, try fallback data
      post = fallbackBlogPosts.find((p) => p.slug.current === slug) || null
      if (post) {
        relatedPosts = getEnhancedRelatedPosts(post, fallbackBlogPosts, 3)
      }
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    // Fallback to static data
    post = fallbackBlogPosts.find((p) => p.slug.current === slug) || null
    allPosts = fallbackBlogPosts
    if (post) {
      relatedPosts = getEnhancedRelatedPosts(post, fallbackBlogPosts, 3)
    }
  }

  if (!post) {
    notFound()
  }



  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-x-hidden">
        {/* Blog Post Header */}
        <section className="bg-gray-50 py-6 md:py-8 lg:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-akiba-pink-500 hover:text-akiba-pink-600 mb-6 md:mb-8 transition-colors text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-akiba-pink-500 mb-4 md:mb-6 leading-tight animate-fade-in-up">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-gray-600 mb-6 md:mb-8 animate-fade-in-up delay-200 text-sm md:text-base">
                <span className="font-medium">{post.author?.name || "Akiba Team"}</span>
                <span className="hidden md:inline">•</span>
                <span>{formatDate(post.publishedAt)}</span>
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    {post.categories.map((category, index) => (
                      <span
                        key={category._id || index}
                        className="bg-akiba-pink-100 text-akiba-pink-600 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.mainImage && (
          <section className="bg-white py-6 md:py-8">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video md:aspect-[16/9] relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg animate-fade-in-up delay-300">
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(675).quality(80).url() || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                    placeholder="blur"
                    blurDataURL={urlFor(post.mainImage).width(20).height(11).quality(30).url() || "/placeholder.svg"}
                  />
                </div>
                {post.mainImage.attribution && (
                  <div className="mt-2 text-xs text-gray-500 text-right">
                    {post.mainImage.attribution}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Blog Content */}
        <section className="bg-white py-6 md:py-8 lg:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="max-w-none animate-fade-in-up delay-400 font-jakarta-regular leading-relaxed blog-content">
                {post.body ? (
                  <PortableText value={post.body} components={portableTextComponents} />
                ) : post.excerpt ? (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg font-semibold text-justify">
                      {post.excerpt}
                    </p>
                    {post.content?.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </>
                ) : (
                  post.content?.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg text-justify">
                      {paragraph}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Post Actions - Social Share & Like */}
        <section className="bg-white py-6 md:py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <BlogPostActions
                postId={post._id}
                title={post.title}
                slug={post.slug.current}
                description={post.excerpt}
                initialLikeCount={post.likeCount}
              />
            </div>
          </div>
        </section>

        {/* Related Blogs Section - Enhanced */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-akiba-pink-500 mb-6 md:mb-8 text-center animate-fade-in-up">
                  You Might Also Like
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <Card
                      key={relatedPost._id}
                      className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 h-full flex flex-col animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        <Link href={`/blog/${relatedPost.slug.current}`} className="flex flex-col h-full">
                          <div className="aspect-video relative flex-shrink-0">
                            <Image
                              src={
                                relatedPost.mainImage
                                  ? urlFor(relatedPost.mainImage).width(600).height(338).quality(70).url()
                                  : "/images/blog-tech-illustration.png"
                              }
                              alt={relatedPost.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              placeholder="blur"
                              blurDataURL={
                                relatedPost.mainImage
                                  ? urlFor(relatedPost.mainImage).width(60).height(34).quality(30).url()
                                  : "/images/blog-tech-illustration.png"
                              }
                            />
                          </div>
                          <div className="p-4 md:p-6 lg:p-8 flex flex-col flex-grow">
                            <div className="flex-grow">
                              <h3 className="text-lg md:text-xl font-bold text-akiba-pink-500 mb-3 md:mb-4 leading-tight hover:text-akiba-pink-600 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h3>
                              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed line-clamp-3">
                                {relatedPost.excerpt || "Read more about this topic..."}
                              </p>
                            </div>
                            <div className="flex justify-between items-center mt-auto pt-2 md:pt-4">
                              <p className="text-gray-400 text-xs md:text-sm">
                                {formatDate(relatedPost.publishedAt)}
                              </p>
                              <span className="text-akiba-pink-500 hover:text-akiba-pink-600 text-xs md:text-sm font-medium transition-colors">
                                Read More →
                              </span>
                            </div>
                            <RelatedPostActions
                              postId={relatedPost._id}
                              title={relatedPost.title}
                              slug={relatedPost.slug.current}
                              description={relatedPost.excerpt}
                              initialLikeCount={relatedPost.likeCount}
                            />
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

// Generate static params for better performance
export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    const slugs = posts?.map((post) => ({
      slug: post.slug.current,
    })) || []
    
    return slugs
  } catch (error) {
    console.error("Error generating static params:", error)
    return fallbackBlogPosts.map((post) => ({
      slug: post.slug.current,
    }))
  }
}

// Add revalidation to ensure content updates
export const revalidate = 60 // Revalidate every 60 seconds

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  // Await the params promise first
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  let post: BlogPost | null = null
  
  try {
    post = await getBlogPost(slug) || fallbackBlogPosts.find(p => p.slug.current === slug) || null
  } catch (error) {
    post = fallbackBlogPosts.find(p => p.slug.current === slug) || null
  }

  if (!post) {
    return {
      title: "Post Not Found - Akiba Finance Blog",
    }
  }

  return {
    title: `${post.title} - Akiba Finance Blog`,
    description: post.excerpt || "Discover insights and tips from Akiba Finance",
    openGraph: {
      title: post.title,
      description: post.excerpt || "Discover insights and tips from Akiba Finance",
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).quality(80).url()] : [],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}