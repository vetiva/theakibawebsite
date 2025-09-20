"use client"

import { useEffect, useState } from "react"

export function useSiteUrl() {
  const [siteUrl, setSiteUrl] = useState("https://akiba.finance")

  useEffect(() => {
    // Get the current origin in the browser
    if (typeof window !== "undefined") {
      setSiteUrl(window.location.origin)
    }
  }, [])

  return siteUrl
}