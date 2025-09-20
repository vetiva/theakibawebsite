"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface HybridLikeButtonProps {
  postId: string
  initialCount?: number
  className?: string
}

export function HybridLikeButton({ postId, initialCount = 0, className }: HybridLikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(initialCount)
  const [isLoading, setIsLoading] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [useApi, setUseApi] = useState(true)

  // Load initial state
  useEffect(() => {
    const loadInitialState = async () => {
      try {
        // Try API first
        const response = await fetch(`/api/likes/${postId}`)
        if (response.ok) {
          const data = await response.json()
          setIsLiked(data.hasLiked)
          setLikeCount(data.likeCount)
          setUseApi(true)
        } else {
          throw new Error('API not available')
        }
      } catch (error) {
        // Fallback to localStorage
        console.log("API not available, using localStorage")
        setUseApi(false)
        const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}")
        const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}")
        
        setIsLiked(!!likedPosts[postId])
        setLikeCount(likeCounts[postId] || initialCount)
      }
    }

    loadInitialState()
  }, [postId, initialCount])

  const handleApiLike = async () => {
    try {
      const response = await fetch(`/api/likes/${postId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        const data = await response.json()
        setIsLiked(data.hasLiked)
        setLikeCount(data.likeCount)
        return true
      }
      return false
    } catch (error) {
      console.error("API like failed:", error)
      return false
    }
  }

  const handleLocalStorageLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}")
    const likeCounts = JSON.parse(localStorage.getItem("likeCounts") || "{}")
    
    const newIsLiked = !isLiked
    const currentCount = likeCounts[postId] || initialCount
    const newCount = newIsLiked ? currentCount + 1 : Math.max(0, currentCount - 1)
    
    setIsLiked(newIsLiked)
    setLikeCount(newCount)
    
    if (newIsLiked) {
      likedPosts[postId] = true
    } else {
      delete likedPosts[postId]
    }
    
    likeCounts[postId] = newCount
    
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
    localStorage.setItem("likeCounts", JSON.stringify(likeCounts))
  }

  const handleLike = async () => {
    if (isLoading) return

    setIsLoading(true)
    setIsAnimating(true)

    if (useApi) {
      const success = await handleApiLike()
      if (!success) {
        // Fallback to localStorage
        setUseApi(false)
        handleLocalStorageLike()
      }
    } else {
      handleLocalStorageLike()
    }

    setIsLoading(false)
    setTimeout(() => setIsAnimating(false), 300)
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
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Heart 
          className={cn(
            "w-4 h-4 transition-all duration-200",
            isLiked ? "fill-red-500 text-red-500" : "",
            isAnimating ? "scale-125" : "scale-100"
          )} 
        />
      )}
      <span className="text-sm">
        {likeCount > 0 ? likeCount : "Like"}
        {!useApi && (
          <span className="text-xs opacity-60 ml-1">(local)</span>
        )}
      </span>
    </Button>
  )
}