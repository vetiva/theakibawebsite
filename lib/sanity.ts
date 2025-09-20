import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: "o2hvr3xi",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "skjeKxpTuA6jXtKpFG80EqWOOWkXeOIqy16NHgJuGWsiBVlOL629W5RisqZuflHS8HvEqKZWRE75DQPqIdw5WfpLh4GBqRROpIzH0ohZbyIL1T1gibcGQjiFkco1dtSJUntKgVThTSsjT3lANnIgGkrqYgBmQe5OiaZY2CUkuh7BC7lNIxPY",
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Blog post queries
export async function getBlogPosts() {
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        author->{
          name,
          image
        },
        categories[]->{
          title
        },
        mainImage,
        likeCount,
        body[]{
          ...,
          _type == "image" => {
            ...,
            asset->
          }
        }
      }
    `)
  } catch (error) {
    console.error("Error fetching blog posts from Sanity:", error)
    return []
  }
}

export async function getBlogPost(slug: string) {
  try {
    return await client.fetch(
      `
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        author->{
          name,
          image
        },
        categories[]->{
          title
        },
        mainImage,
        likeCount,
        body[]{
          ...,
          _type == "image" => {
            ...,
            asset->
          }
        }
      }
    `,
      { slug },
    )
  } catch (error) {
    console.error("Error fetching blog post from Sanity:", error)
    return null
  }
}

export async function getRelatedPosts(currentSlug: string, categories: string[], limit = 3) {
  try {
    // First try to get posts with matching categories
    const categoryMatches = await client.fetch(
      `
      *[_type == "post" && slug.current != $currentSlug && count((categories[]->title)[@ in $categories]) > 0] | order(publishedAt desc) [0...$limit] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        author->{
          name,
          image
        },
        categories[]->{
          title
        },
        mainImage,
        likeCount,
        body[]{
          ...,
          _type == "image" => {
            ...,
            asset->
          }
        }
      }
    `,
      { currentSlug, categories, limit },
    )

    // If we don't have enough category matches, get the latest posts
    if (categoryMatches.length < limit) {
      const remaining = limit - categoryMatches.length
      const latestPosts = await client.fetch(
        `
        *[_type == "post" && slug.current != $currentSlug && !(_id in $existingIds)] | order(publishedAt desc) [0...$remaining] {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          author->{
            name,
            image
          },
          categories[]->{
            title
          },
          mainImage,
          likeCount,
          body[]{
            ...,
            _type == "image" => {
              ...,
              asset->
            }
          }
        }
      `,
        {
          currentSlug,
          remaining,
          existingIds: categoryMatches.map((post: any) => post._id)
        },
      )

      return [...categoryMatches, ...latestPosts]
    }

    return categoryMatches
  } catch (error) {
    console.error("Error fetching related posts from Sanity:", error)

    // Fallback: get latest posts
    try {
      return await client.fetch(
        `
        *[_type == "post" && slug.current != $currentSlug] | order(publishedAt desc) [0...$limit] {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          author->{
            name,
            image
          },
          categories[]->{
            title
          },
          mainImage,
          likeCount,
          body[]{
            ...,
            _type == "image" => {
              ...,
              asset->
            }
          }
        }
      `,
        { currentSlug, limit },
      )
    } catch (fallbackError) {
      console.error("Error in fallback related posts fetch:", fallbackError)
      return []
    }
  }
}

// New function to get all posts for client-side related posts calculation
export async function getAllBlogPosts() {
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        author->{
          name,
          image
        },
        categories[]->{
          title
        },
        mainImage,
        likeCount,
        body[]{
          ...,
          _type == "image" => {
            ...,
            asset->
          }
        }
      }
    `)
  } catch (error) {
    console.error("Error fetching all blog posts from Sanity:", error)
    return []
  }
}