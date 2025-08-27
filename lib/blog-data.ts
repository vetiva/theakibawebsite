export interface BlogPost {
  _id: string
  title: string
  excerpt: string
  content?: string
  body?: any[] // Sanity block content
  mainImage?: any
  categories?: { title: string }[]
  author?: {
    name: string
    image?: any
  }
  publishedAt: string
  slug: {
    current: string
  }
}

// Fallback data for when Sanity is not available
export const fallbackBlogPosts: BlogPost[] = [
  {
    _id: "1",
    title: "Negotiate Away and Save Money!",
    excerpt:
      "With AkibaPay, you can now easily pay for the following services, renew your subscriptions, get data and so much more!",
    content: `With AkibaPay, you can now easily pay for the following services, renew your subscriptions, get data and so much more! Our platform revolutionizes how you handle digital payments by providing a seamless, secure, and efficient way to manage all your financial transactions in one place. Gone are the days of juggling multiple payment platforms or worrying about security breaches.

AkibaPay offers bank-level security with end-to-end encryption, ensuring your financial information remains protected at all times. Whether you're paying utility bills, purchasing airtime, or subscribing to your favorite streaming services, AkibaPay makes it incredibly simple. Our user-friendly interface allows you to complete transactions in just a few taps, saving you valuable time and effort.

The platform also offers competitive rates and exclusive deals with partner merchants, helping you save money on every transaction. Plus, with our detailed transaction history and spending analytics, you can better track your expenses and make informed financial decisions. Join thousands of satisfied users who have already made the switch to smarter digital payments.`,
    categories: [{ title: "Insight" }],
    author: { name: "Akiba Team" },
    publishedAt: "2024-12-15T10:00:00Z",
    slug: { current: "negotiate-away-save-money" },
  },
  {
    _id: "2",
    title: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.`,
    categories: [{ title: "Finance" }],
    author: { name: "Akiba Team" },
    publishedAt: "2024-12-18T14:30:00Z",
    slug: { current: "quis-nostrud-exercitation-ullamco" },
  },
  {
    _id: "3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    excerpt:
      "dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    content: `dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.

Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.`,
    categories: [{ title: "Technology" }],
    author: { name: "Akiba Team" },
    publishedAt: "2024-12-20T09:15:00Z",
    slug: { current: "lorem-ipsum-dolor-sit-amet" },
  },
  {
    _id: "4",
    title: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`,
    categories: [{ title: "Investment" }],
    author: { name: "Akiba Team" },
    publishedAt: "2024-12-22T16:45:00Z",
    slug: { current: "quis-nostrud-exercitation-second" },
  },
  {
    _id: "5",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    excerpt:
      "dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
    content: `dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    categories: [{ title: "Lifestyle" }],
    author: { name: "Akiba Team" },
    publishedAt: "2024-12-25T11:20:00Z",
    slug: { current: "lorem-ipsum-second" },
  },
]

export const POSTS_PER_PAGE = 4

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return "December 15, 2024"
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch (error) {
    return "December 15, 2024"
  }
}
