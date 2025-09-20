"use client"

import { SocialShare } from "./social-share"
import { HybridLikeButton } from "./hybrid-like-button"
import { useSiteUrl } from "@/hooks/use-site-url"

interface BlogPostActionsProps {
  postId: string
  title: string
  slug: string
  description?: string
  initialLikeCount?: number
}

export function BlogPostActions({ postId, title, slug, description, initialLikeCount }: BlogPostActionsProps) {
  const siteUrl = useSiteUrl()
  const url = `${siteUrl}/blog/${slug}`
  
  return (
    <div className="flex items-center justify-between gap-4 p-4 md:p-6 bg-gray-50 rounded-xl border">
      <div className="flex items-center gap-3">
        <HybridLikeButton postId={postId} initialCount={initialLikeCount} />
        <SocialShare 
          title={title}
          url={url}
          description={description}
        />
      </div>
      <div className="text-sm text-gray-500 hidden sm:block">
        Share this post with your network
      </div>
    </div>
  )
}