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

        console.log('Webhook received:', { _type, slug: slug?.current })

        // Revalidate based on the document type
        if (_type === 'post') {
            // Add a small delay to ensure Sanity CDN is updated
            await new Promise(resolve => setTimeout(resolve, 2000))
            
            // Revalidate the specific blog post
            if (slug?.current) {
                revalidatePath(`/blog/${slug.current}`)
                console.log(`Revalidated blog post: /blog/${slug.current}`)
                
                // Also revalidate with layout type for thorough refresh
                revalidatePath(`/blog/${slug.current}`, 'layout')
                console.log(`Revalidated blog post layout: /blog/${slug.current}`)
            }

            // Revalidate the blog listing page (both page and layout)
            revalidatePath('/blog')
            revalidatePath('/blog', 'layout')
            console.log('Revalidated blog listing page and layout')

            // Revalidate the home page if it shows blog posts
            revalidatePath('/')
            revalidatePath('/', 'layout')
            console.log('Revalidated home page and layout')
            
            // Force revalidation of all blog pages
            revalidatePath('/blog/[slug]', 'page')
            revalidatePath('/blog/[slug]', 'layout')
            console.log('Revalidated all blog pages and layouts')
        }

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            paths: _type === 'post' ? ['/blog', slug?.current ? `/blog/${slug.current}` : null, '/', '/blog/[slug]'].filter(Boolean) : [],
            delay: '2000ms added for CDN sync'
        })
    } catch (err) {
        console.error('Error revalidating:', err)
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
    }
}