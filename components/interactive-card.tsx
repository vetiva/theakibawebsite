"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface InteractiveCardProps {
  title: string
  description: string
  href: string
  image: React.ReactNode
  animationClass: string
  delay?: number
}

export function InteractiveCard({ title, description, href, image, animationClass, delay = 0 }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`overflow-hidden card-interactive animate-fade-in-up delay-${delay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 relative group">
        <div
          className={`card-illustration ${animationClass} ${isHovered ? "animation-play-state-running" : "animation-play-state-paused"}`}
        >
          {image}
        </div>

        {/* Interactive Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {title}
            </h3>
            <p className="text-white/90 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
              {description}
            </p>
            <Link href={href}>
              <Button className="bg-white/95 hover:bg-white text-gray-800 hover:text-akiba-pink-500 font-semibold w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Access Learn More */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300">
          <Link href={href}>
            <span className="text-white font-semibold text-xs bg-akiba-pink-500/90 px-2 py-1 rounded-full hover:bg-akiba-pink-600 transition-colors cursor-pointer backdrop-blur-sm">
              Learn More →
            </span>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
