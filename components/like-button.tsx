"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface LikeButtonProps {
  postId: string
  className?: string
}

export function LikeButton({ postId, className }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Load like state and count from localStorage on mount
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}")
    const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}")
    
    setIsLiked(!!likedPosts[postId])
    setLikeCount(likeCounts[postId] || 0)
  }, [postId])

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}")
    const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}")
    
    const newIsLiked = !isLiked
    const currentCount = likeCounts[postId] || 0
    const newCount = newIsLiked ? currentCount + 1 : Math.max(0, currentCount - 1)
    
    // Update state
    setIsLiked(newIsLiked)
    setLikeCount(newCount)
    setIsAnimating(true)
    
    // Update localStorage
    if (newIsLiked) {
      likedPosts[postId] = true
    } else {
      delete likedPosts[postId]
    }
    
    likeCounts[postId] = newCount
    
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
    localStorage.setItem("likeCounts", JSON.stringify(likeCounts))
    
    // Reset animation
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLike}
      className={cn(
        "gap-2 transition-all duration-200",
        isLiked 
          ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100" 
          : "hover:bg-akiba-pink-50 hover:border-akiba-pink-200 hover:text-akiba-pink-600",
        className
      )}
    >
      <Heart 
        className={cn(
          "w-4 h-4 transition-all duration-200",
          isLiked ? "fill-red-500 text-red-500" : "",
          isAnimating ? "scale-125" : "scale-100"
        )} 
      />
      <span className="text-sm">
        {likeCount > 0 ? likeCount : "Like"}
      </span>
    </Button>
  )
}