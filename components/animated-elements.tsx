"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"

export function FloatingMoney() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Multiple flying money elements with different timings */}
      <div className="absolute top-16 left-8 w-8 h-8 animate-fly-money-1 opacity-80">
        <Image
          src="/images/flying-money-1.png"
          alt="Flying money"
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-24 left-16 w-6 h-6 animate-fly-money-2 opacity-70">
        <Image
          src="/images/flying-money-2.png"
          alt="Flying money"
          width={24}
          height={24}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-32 left-4 w-10 h-10 animate-fly-money-1 opacity-60" style={{ animationDelay: "1s" }}>
        <Image
          src="/images/flying-money-1.png"
          alt="Flying money"
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>
    </>
  )
}

export function AnimatedServiceCard({ children, animationType }: { children: React.ReactNode; animationType: string }) {
  return <div className={`card-illustration ${animationType} transition-all duration-300`}>{children}</div>
}
