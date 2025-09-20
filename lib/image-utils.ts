import { urlFor } from "./sanity"

export function getImageUrl(image: any, width = 800, height = 450, quality = 80) {
  if (!image) return null
  
  try {
    // Handle different image formats from Sanity
    if (image.asset) {
      return urlFor(image).width(width).height(height).quality(quality).url()
    }
    
    if (image._ref || image._id) {
      return urlFor(image).width(width).height(height).quality(quality).url()
    }
    
    // If it's already a URL string
    if (typeof image === 'string' && image.startsWith('http')) {
      return image
    }
    
    return null
  } catch (error) {
    console.error('Error generating image URL:', error)
    return null
  }
}

export function getImageBlurUrl(image: any) {
  if (!image) return null
  
  try {
    if (image.asset) {
      return urlFor(image).width(20).height(11).quality(30).url()
    }
    
    if (image._ref || image._id) {
      return urlFor(image).width(20).height(11).quality(30).url()
    }
    
    return null
  } catch (error) {
    console.error('Error generating blur URL:', error)
    return null
  }
}