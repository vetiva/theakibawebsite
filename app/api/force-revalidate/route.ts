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

        console.log('Force revalidation triggered')

        // Force revalidate all blog-related pages
        revalidatePath('/blog', 'layout')
        revalidatePath('/blog')
        revalidatePath('/blog/[slug]', 'page')
        revalidatePath('/', 'layout')
        revalidatePath('/')

        console.log('All paths force revalidated')

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            message: 'All blog paths force revalidated',
            paths: ['/blog (layout)', '/blog', '/blog/[slug] (page)', '/ (layout)', '/']
        })
    } catch (err) {
        console.error('Error force revalidating:', err)
        return NextResponse.json({ message: 'Error force revalidating' }, { status: 500 })
    }
}