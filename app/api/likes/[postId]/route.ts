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
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
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
    
    const hasLiked = await hasUserLiked(postId, userId)
    
    let newLikeCount: number
    
    if (hasLiked) {
      // Unlike the post
      await removeUserLike(postId, userId)
      newLikeCount = await decrementLike(postId)
    } else {
      // Like the post
      await recordUserLike(postId, userId)
      newLikeCount = await incrementLike(postId)
    }
    
    return NextResponse.json({
      likeCount: newLikeCount,
      hasLiked: !hasLiked,
      success: true
    })
  } catch (error) {
    console.error("Error in POST /api/likes:", error)
    return NextResponse.json(
      { error: "Failed to toggle like", success: false },
      { status: 500 }
    )
  }
}