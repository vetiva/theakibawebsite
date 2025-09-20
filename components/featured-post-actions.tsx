"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Copy, 
  Check,
  Heart
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HybridLikeButton } from "./hybrid-like-button"
import { cn } from "@/lib/utils"
import { useSiteUrl } from "@/hooks/use-site-url"

interface FeaturedPostActionsProps {
  postId: string
  title: string
  slug: string
  description?: string
  initialLikeCount?: number
}

export function FeaturedPostActions({ postId, title, slug, description, initialLikeCount }: FeaturedPostActionsProps) {
  const [copied, setCopied] = useState(false)
  const siteUrl = useSiteUrl()
  const url = `${siteUrl}/blog/${slug}`

  const shareData = {
    title,
    url,
    text: description || title,
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log("Error sharing:", error)
      }
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.log("Error copying to clipboard:", error)
    }
  }

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <HybridLikeButton 
        postId={postId} 
        initialCount={initialLikeCount}
        className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-gray-500" 
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-gray-500"
          >
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {navigator.share && (
            <DropdownMenuItem onClick={handleNativeShare} className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </DropdownMenuItem>
          )}
          <DropdownMenuItem asChild>
            <a
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={shareUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCopyLink} className="gap-2">
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Link
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}