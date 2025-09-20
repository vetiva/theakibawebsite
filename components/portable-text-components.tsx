import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { getImageUrl, getImageBlurUrl } from "@/lib/image-utils"

export const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-base md:text-lg">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-akiba-pink-500 mb-4 md:mb-6 mt-8 md:mt-10">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-akiba-pink-500 mb-3 md:mb-4 mt-6 md:mt-8">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 md:mb-3 mt-4 md:mt-6">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 md:mb-3 mt-3 md:mt-4">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-2 mt-3">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-xs md:text-sm lg:text-base font-semibold text-gray-900 mb-2 mt-3">{children}</h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-akiba-pink-500 pl-4 md:pl-6 py-2 md:py-3 my-4 md:my-6 bg-gray-50 italic text-gray-700 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 md:mb-6 space-y-1 md:space-y-2 text-gray-700 ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 md:mb-6 space-y-1 md:space-y-2 text-gray-700 ml-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-2">{children}</li>,
    number: ({ children }: any) => <li className="ml-2">{children}</li>,
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
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-akiba-pink-600 px-1 py-0.5 rounded text-sm font-mono">
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
        >
          {children}
        </a>
      )
    },
    highlight: ({ children }: any) => (
      <mark className="bg-yellow-200 px-1 py-0.5 rounded">{children}</mark>
    ),
  },
}