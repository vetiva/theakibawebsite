'use client'

import { useEffect } from 'react'

export function BlogTextJustifier() {
  useEffect(() => {
    // Force text justification after component mounts
    const justifyText = () => {
      const blogContent = document.querySelector('.blog-content')
      if (blogContent) {
        const textElements = blogContent.querySelectorAll('p, li, blockquote')
        textElements.forEach((element) => {
          const htmlElement = element as HTMLElement
          htmlElement.style.textAlign = 'justify'
          htmlElement.style.textJustify = 'inter-word'
          htmlElement.style.hyphens = 'auto'
          htmlElement.style.fontFamily = 'var(--font-plus-jakarta-sans)'
        })
      }
    }

    // Run immediately
    justifyText()
    
    // Run after a short delay to catch any late-loading content
    setTimeout(justifyText, 100)
    setTimeout(justifyText, 500)
    setTimeout(justifyText, 1000)
  }, [])

  return null
}