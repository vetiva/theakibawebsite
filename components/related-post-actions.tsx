"use client"

import { HybridLikeButton } from "./hybrid-like-button"
import { SocialShare } from "./social-share"
import { useSiteUrl } from "@/hooks/use-site-url"

interface RelatedPostActionsProps {
  postId: string
  title: string
  slug: string
  description?: string
  initialLikeCount?: number
}

export function RelatedPostActions({ postId, title, slug, description, initialLikeCount }: RelatedPostActionsProps) {
  const siteUrl = useSiteUrl()
  const url = `${siteUrl}/blog/${slug}`
  
  return (
    <div className="mt-3 pt-3 border-t border-gray-100">
      <div className="flex items-center justify-between gap-2">
        <HybridLikeButton postId={postId} initialCount={initialLikeCount} className="text-xs h-7" />
        <SocialShare 
          title={title}
          url={url}
          description={description}
        />
      </div>
    </div>
  )
}