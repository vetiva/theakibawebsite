import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Pacifico } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Akiba - Digital Financial Community",
  description:
    "A digital community that brings you Financial literacy and lifestyle related content. We are here to teach, connect and deliver on all things saving and investing.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${pacifico.variable}`}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
