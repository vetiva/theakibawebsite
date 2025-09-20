import { NextRequest, NextResponse } from "next/server"
import { 
  getLikeCount, 
  incrementLike, 
  decrementLike, 
  hasUserLiked, 
  recordUserLike, 
  removeUserLike 
} from "@/lib/likes-api"

// Generate a simple user ID based on IP and User-Agent
function generateUserId(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const ip = forwarded?.split(',')[0] || realIp || 'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'
  return Buffer.from(`${ip}-${userAgent}`).toString('base64').slice(0, 16)
}

// GET - Get like count and user like status
export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const postId = params.postId
    const userId = generateUserId(request)
    
    const [likeCount, hasLiked] = await Promise.all([
      getLikeCount(postId),
      hasUserLiked(postId, userId)
    ])
    
    return NextResponse.json({
      likeCount,
      hasLiked,
      success: true
    })
  } catch (error) {
    console.error("Error in GET /api/likes:", error)
    return NextResponse.json(
      { error: "Failed to fetch like data", success: false },
      { status: 500 }
    )
  }
}

// POST - Toggle like (like or unlike)
export async function POST(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const postId = params.postId
    const userId = generateUserId(request)
    
    console.log('POST /api/likes - postId:', postId, 'userId:', userId)
    
    const hasLiked = await hasUserLiked(postId, userId)
    console.log('User has liked:', hasLiked)
    
    let newLikeCount: number
    
    if (hasLiked) {
      // Unlike the post
      console.log('Removing like...')
      await removeUserLike(postId, userId)
      newLikeCount = await decrementLike(postId)
    } else {
      // Like the post
      console.log('Adding like...')
      await recordUserLike(postId, userId)
      newLikeCount = await incrementLike(postId)
    }
    
    console.log('New like count:', newLikeCount)
    
    return NextResponse.json({
      likeCount: newLikeCount,
      hasLiked: !hasLiked,
      success: true
    })
  } catch (error) {
    console.error("Error in POST /api/likes:", error)
    console.error("Error details:", error instanceof Error ? error.stack : error)
    return NextResponse.json(
      { 
        error: "Failed to toggle like", 
        success: false,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}