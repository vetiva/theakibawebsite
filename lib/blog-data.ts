export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  author: string
  publishedAt: string
  slug: string
  images?: string[]
}

// Add more sample blog posts to demonstrate pagination
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    content: `In today's cluttered marketplace, where thousands of brands fight for consumer attention, blending in is not an option. To truly stand out, you have to "zag" while everyone else is "zigging".

This means taking the less conventional route—using creative, bold, and often counterintuitive strategies to capture attention, connect with audiences, and differentiate your brand from the competition. Zagging isn't about being different for the sake of it; it's but standing apart in ways that are memorable and impactful.

Brands that zag refuse to follow traditional paths. They break the mold, think outside the box, and deliver messages in unexpected ways that resonate with consumers. This approach has led to some iconic and successful advertising campaigns.

Let's explore some notable examples...

In today's cluttered marketplace, where thousands of brands fight for consumer attention, blending in is not an option. To truly stand out, you have to "zag" while everyone else is "zigging".

This means taking the less conventional route—using creative, bold, and often counterintuitive strategies to capture attention, connect with audiences, and differentiate your brand from the competition. Zagging isn't about being different for the sake of it; it's but standing apart in ways that are memorable and impactful.

Brands that zag refuse to follow traditional paths. They break the mold, think outside the box, and deliver messages in unexpected ways that resonate with consumers. This approach has led to some iconic and successful advertising campaigns.

Let's explore some notable examples...`,
    featuredImage: "/images/blog-isometric-detailed.png",
    category: "Marketing",
    author: "Akiba Team",
    publishedAt: "March 23, 2025",
    slug: "negotiate-away-save-money",
    images: ["/images/blog-analytics-dashboard.png"],
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    excerpt:
      "dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    featuredImage: "/images/blog-growth-chart.png",
    category: "Finance",
    author: "Akiba Team",
    publishedAt: "March 28, 2025",
    slug: "lorem-ipsum-dolor-sit-amet",
  },
  {
    id: "3",
    title: "Negotiate Away and Save Money!",
    excerpt:
      "With AkibaPay, you can now easily pay for the following services, renew your subscriptions, get data and so much more!",
    content: `With AkibaPay, you can now easily pay for the following services, renew your subscriptions, get data and so much more!

In today's digital age, managing your finances has never been easier. AkibaPay provides a comprehensive solution for all your payment needs, from utility bills to subscription services.

Our platform offers secure, fast, and reliable payment processing that you can trust. Whether you're paying for electricity, internet, or your favorite streaming service, AkibaPay has got you covered.`,
    featuredImage: "/images/blog-financial-abstract.png",
    category: "Insight",
    author: "Akiba Team",
    publishedAt: "March 23, 2025",
    slug: "negotiate-away-and-save-money",
  },
  // Add more posts to demonstrate pagination
  {
    id: "4",
    title: "Understanding Investment Fundamentals",
    excerpt:
      "Learn the basics of investing and how to build a diversified portfolio that works for your financial goals.",
    content: `Investment fundamentals are the cornerstone of building wealth over time. Understanding these principles can help you make informed decisions about your financial future.

Diversification is key to managing risk while maximizing potential returns. By spreading your investments across different asset classes, you can protect your portfolio from market volatility.

Start with understanding your risk tolerance and investment timeline. These factors will guide your investment strategy and help you choose the right mix of assets for your portfolio.`,
    featuredImage: "/images/blog-isometric-finance.png",
    category: "Finance",
    author: "Akiba Team",
    publishedAt: "March 20, 2025",
    slug: "understanding-investment-fundamentals",
  },
  {
    id: "5",
    title: "Digital Banking Revolution in Africa",
    excerpt:
      "How mobile banking is transforming financial services across the African continent and creating new opportunities.",
    content: `The digital banking revolution is reshaping the financial landscape across Africa. Mobile money services have become the backbone of financial inclusion in many African countries.

From Kenya's M-Pesa to Nigeria's growing fintech ecosystem, digital banking solutions are providing access to financial services for millions of previously unbanked individuals.

This transformation is not just about convenience—it's about economic empowerment and creating pathways to financial stability for entire communities.`,
    featuredImage: "/images/blog-tech-illustration.png",
    category: "Technology",
    author: "Akiba Team",
    publishedAt: "March 18, 2025",
    slug: "digital-banking-revolution-africa",
  },
  {
    id: "6",
    title: "Building Wealth Through Smart Saving Habits",
    excerpt:
      "Discover practical strategies for developing saving habits that will help you build long-term wealth and financial security.",
    content: `Building wealth starts with developing smart saving habits. It's not about how much you earn, but how much you keep and grow over time.

The key is to automate your savings and treat it as a non-negotiable expense. Pay yourself first before any other expenses, and watch your wealth grow consistently.

Small, consistent actions compound over time to create significant results. Start with saving just 10% of your income and gradually increase as your financial discipline improves.`,
    featuredImage: "/images/blog-hero-card.png",
    category: "Finance",
    author: "Akiba Team",
    publishedAt: "March 15, 2025",
    slug: "building-wealth-smart-saving-habits",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}

// Add pagination helper functions at the end of the file

export const POSTS_PER_PAGE = 4 // Show 4 posts per page (excluding featured post)

export function getPaginatedPosts(page = 1): {
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
} {
  const allPosts = getAllBlogPosts()
  const featuredPost = allPosts[0] // First post is always featured
  const otherPosts = allPosts.slice(1) // Rest are paginated

  const totalPosts = otherPosts.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE

  const paginatedPosts = otherPosts.slice(startIndex, endIndex)

  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}

export function getFeaturedPost(): BlogPost {
  return getAllBlogPosts()[0]
}
