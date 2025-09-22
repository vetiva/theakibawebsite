import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { getImageUrl, getImageBlurUrl } from "@/lib/image-utils"

export const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg text-justify-force" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 400, textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-akiba-pink-500 mb-4 mt-8 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 700 }}>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl md:text-2xl lg:text-3xl text-akiba-pink-500 mb-3 mt-6 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 700 }}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-2 mt-5 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 600 }}>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-base md:text-lg lg:text-xl text-gray-900 mb-2 mt-4 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 600 }}>{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-sm md:text-base lg:text-lg text-gray-900 mb-2 mt-3 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 500 }}>{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-xs md:text-sm lg:text-base text-gray-900 mb-2 mt-3 leading-tight" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 500 }}>{children}</h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-akiba-pink-500 pl-6 py-3 my-4 bg-gray-50 italic text-gray-700 rounded-r-lg text-justify-force" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 400, textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700 ml-4 text-base md:text-lg" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 400 }}>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700 ml-4 text-base md:text-lg" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 400 }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-2 leading-relaxed text-justify-force" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>{children}</li>,
    number: ({ children }: any) => <li className="ml-2 leading-relaxed text-justify-force" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>{children}</li>,
  },
  types: {
    image: ({ value }: any) => {
      const imageUrl = getImageUrl(value, 800, 450, 80)
      const blurUrl = getImageBlurUrl(value)
      
      if (!imageUrl) {
        return null
      }
      
      return (
        <figure className="my-6 md:my-8">
          <div className="relative w-full rounded-lg md:rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={imageUrl}
              alt={value.alt || value.caption || 'Blog post image'}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              placeholder={blurUrl ? "blur" : "empty"}
              blurDataURL={blurUrl || undefined}
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-gray-500 text-center mt-2 md:mt-3 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    code: ({ value }: any) => (
      <div className="my-6 md:my-8">
        <pre className="bg-gray-900 text-gray-100 p-4 md:p-6 rounded-lg overflow-x-auto">
          <code className="text-sm md:text-base font-mono">
            {value.code}
          </code>
        </pre>
        {value.filename && (
          <p className="text-xs text-gray-500 mt-2 text-right">
            {value.filename}
          </p>
        )}
      </div>
    ),
    // Handle PostLike or any other like-related types
    postLike: () => null, // Don't render PostLike in blog content
    likeCount: () => null, // Don't render likeCount in blog content
    likes: () => null, // Don't render likes in blog content
    reference: () => null, // Don't render references in blog content
    // Fallback for any unknown types
    unknown: ({ value }: any) => {
      console.warn('Unknown block type:', value._type, value)
      return null
    },
  },
  // Add unknown type handler
  unknownType: ({ value }: any) => {
    console.warn('Unknown content type:', value._type, value)
    return null
  },
  marks: {
    strong: ({ children }: any) => <strong className="text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 600 }}>{children}</strong>,
    em: ({ children }: any) => <em className="italic" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 400 }}>{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-akiba-pink-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => {
      const isExternal = value?.href?.startsWith('http')
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-akiba-pink-500 hover:text-akiba-pink-600 underline transition-colors"
          style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 500 }}
        >
          {children}
        </a>
      )
    },
    highlight: ({ children }: any) => (
      <mark className="bg-yellow-200 px-1 py-0.5 rounded" style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 500 }}>{children}</mark>
    ),
  },
}