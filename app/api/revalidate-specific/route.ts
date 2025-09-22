import { revalidatePath } from 'next/cache'
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
        const { slug } = body

        console.log('Specific revalidation triggered for:', slug)

        if (slug) {
            // Comprehensive revalidation for the specific post
            revalidatePath(`/blog/${slug}`)
            revalidatePath(`/blog/${slug}`, 'layout')
            revalidatePath(`/blog/${slug}`, 'page')
            
            // Also revalidate blog listing since it might show this as featured
            revalidatePath('/blog')
            revalidatePath('/blog', 'layout')
            
            console.log(`Comprehensively revalidated: /blog/${slug}`)
        }

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            message: `Specific post revalidated: ${slug}`,
            paths: [`/blog/${slug}`, `/blog/${slug} (layout)`, `/blog/${slug} (page)`, '/blog', '/blog (layout)']
        })
    } catch (err) {
        console.error('Error revalidating specific post:', err)
        return NextResponse.json({ message: 'Error revalidating specific post' }, { status: 500 })
    }
}