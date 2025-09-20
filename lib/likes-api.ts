import { client } from "./sanity"

// Get like count for a specific post
export async function getLikeCount(postId: string): Promise<number> {
  try {
    const result = await client.fetch(
      `*[_type == "post" && _id == $postId][0].likeCount`,
      { postId }
    )
    return result || 0
  } catch (error) {
    console.error("Error fetching like count:", error)
    return 0
  }
}

// Increment like count for a post
export async function incrementLike(postId: string): Promise<number> {
  try {
    // First get current count
    const currentCount = await getLikeCount(postId)
    const newCount = currentCount + 1
    
    console.log('Updating like count:', { postId, currentCount, newCount })
    
    // Update the post with new like count
    const result = await client
      .patch(postId)
      .set({ likeCount: newCount })
      .commit()
    
    console.log('Updated post:', result._id, 'new count:', newCount)
    
    return newCount
  } catch (error) {
    console.error("Error incrementing like:", error)
    console.error("Error details:", error instanceof Error ? error.message : error)
    throw error
  }
}

// Decrement like count for a post
export async function decrementLike(postId: string): Promise<number> {
  try {
    // First get current count
    const currentCount = await getLikeCount(postId)
    const newCount = Math.max(0, currentCount - 1)
    
    // Update the post with new like count
    await client
      .patch(postId)
      .set({ likeCount: newCount })
      .commit()
    
    return newCount
  } catch (error) {
    console.error("Error decrementing like:", error)
    throw error
  }
}

// Check if user has liked a post (using IP or session)
export async function hasUserLiked(postId: string, userId: string): Promise<boolean> {
  try {
    const result = await client.fetch(
      `*[_type == "postLike" && postId == $postId && userId == $userId][0]`,
      { postId, userId }
    )
    return !!result
  } catch (error) {
    console.error("Error checking user like status:", error)
    return false
  }
}

// Record user like
export async function recordUserLike(postId: string, userId: string): Promise<void> {
  try {
    console.log('Creating postLike document:', { postId, userId })
    const result = await client.create({
      _type: 'postLike',
      postId,
      userId,
      likedAt: new Date().toISOString()
    })
    console.log('Created postLike document:', result._id)
  } catch (error) {
    console.error("Error recording user like:", error)
    console.error("Error details:", error instanceof Error ? error.message : error)
    throw error
  }
}

// Remove user like
export async function removeUserLike(postId: string, userId: string): Promise<void> {
  try {
    const likeRecord = await client.fetch(
      `*[_type == "postLike" && postId == $postId && userId == $userId][0]._id`,
      { postId, userId }
    )
    
    if (likeRecord) {
      await client.delete(likeRecord)
    }
  } catch (error) {
    console.error("Error removing user like:", error)
    throw error
  }
}