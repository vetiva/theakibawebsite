import { NextRequest, NextResponse } from "next/server"
import { client } from "@/lib/sanity"

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json()
    
    if (!postId) {
      return NextResponse.json({ error: "postId is required" }, { status: 400 })
    }

    console.log('Testing like functionality for postId:', postId)

    // Step 1: Check if post exists
    const post = await client.fetch(`*[_type == "post" && _id == $postId][0]{ _id, title, likeCount }`, { postId })
    
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    console.log('Found post:', post)

    // Step 2: Try to create a postLike document
    const userId = 'test-user-' + Date.now()
    
    try {
      const likeDoc = await client.create({
        _type: 'postLike',
        postId: postId,
        userId: userId,
        likedAt: new Date().toISOString()
      })
      
      console.log('Created postLike document:', likeDoc._id)

      // Step 3: Update the post's like count
      const currentCount = post.likeCount || 0
      const newCount = currentCount + 1
      
      const updatedPost = await client
        .patch(postId)
        .set({ likeCount: newCount })
        .commit()
      
      console.log('Updated post like count:', updatedPost)

      return NextResponse.json({
        success: true,
        message: "Like functionality working correctly",
        data: {
          post: updatedPost,
          likeDocument: likeDoc._id,
          previousCount: currentCount,
          newCount: newCount
        }
      })

    } catch (createError) {
      console.error('Error creating postLike or updating count:', createError)
      return NextResponse.json({
        error: "Failed to create like or update count",
        details: createError instanceof Error ? createError.message : 'Unknown error',
        post: post
      }, { status: 500 })
    }

  } catch (error) {
    console.error('Test like error:', error)
    return NextResponse.json({
      error: "Test failed",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}