"use client"

import { SocialShare } from "./social-share"
import { HybridLikeButton } from "./hybrid-like-button"
import { useSiteUrl } from "@/hooks/use-site-url"

interface BlogCardActionsProps {
  postId: string
  title: string
  slug: string
  description?: string
  initialLikeCount?: number
}

export function BlogCardActions({ postId, title, slug, description, initialLikeCount }: BlogCardActionsProps) {
  const siteUrl = useSiteUrl()
  const url = `${siteUrl}/blog/${slug}`
  
  return (
    <div className="flex items-center justify-between gap-2 mt-4 pt-4 border-t border-gray-100">
      <HybridLikeButton postId={postId} initialCount={initialLikeCount} className="text-xs" />
      <SocialShare 
        title={title}
        url={url}
        description={description}
      />
    </div>
  )
}