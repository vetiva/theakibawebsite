import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Get the secret from environment variables
    const secret = process.env.REVALIDATION_SECRET
    
    // Check for secret to confirm this is a valid request
    const authHeader = request.headers.get('authorization')
    if (!secret || authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    const body = await request.json()
    const { _type, slug } = body

    // Revalidate based on the document type
    if (_type === 'post') {
      // Revalidate the specific blog post
      if (slug?.current) {
        revalidatePath(`/blog/${slug.current}`)
        console.log(`Revalidated blog post: /blog/${slug.current}`)
      }
      
      // Revalidate the blog listing page
      revalidatePath('/blog')
      console.log('Revalidated blog listing page')
      
      // Revalidate the home page if it shows blog posts
      revalidatePath('/')
      console.log('Revalidated home page')
    }

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      paths: _type === 'post' ? ['/blog', slug?.current ? `/blog/${slug.current}` : null, '/'].filter(Boolean) : []
    })
  } catch (err) {
    console.error('Error revalidating:', err)
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}