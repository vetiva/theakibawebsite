// lib/queries.ts
import groq from 'groq'

export const getAllPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    author-> {
      name,
      image {
        asset-> {
          url
        }
      }
    }
  }
`
