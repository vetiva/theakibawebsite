"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface PersistentLikeButtonProps {
  postId: string
  className?: string
}

export function PersistentLikeButton({ postId, className }: PersistentLikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  // Load like state from API on mount
  useEffect(() => {
    const fetchLikeData = async () => {
      try {
        const response = await fetch(`/api/likes/${postId}`)
        if (response.ok) {
          const data = await response.json()
          setIsLiked(data.hasLiked)
          setLikeCount(data.likeCount)
        }
      } catch (error) {
        console.error("Error fetching like data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLikeData()
  }, [postId])

  const handleLike = async () => {
    if (isLoading) return

    setIsLoading(true)
    setIsAnimating(true)

    try {
      const response = await fetch(`/api/likes/${postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setIsLiked(data.hasLiked)
        setLikeCount(data.likeCount)
      } else {
        console.error("Failed to toggle like")
      }
    } catch (error) {
      console.error("Error toggling like:", error)
    } finally {
      setIsLoading(false)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  if (isLoading) {
    return (
      <Button
        variant="outline"
        size="sm"
        disabled
        className={cn("gap-2", className)}
      >
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-sm">Loading...</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLike}
      disabled={isLoading}
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