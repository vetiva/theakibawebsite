"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Simple client-side authentication for demonstration purposes
    // In a real application, this would involve API calls to a secure backend
    const defaultUsername = "admin_akiba"
    const defaultPassword = "Akibatribequest@2025"

    if (username === defaultUsername && password === defaultPassword) {
      // Simulate successful login
      console.log("Login successful!")
      router.push("/admin/blog")
    } else {
      setError("Invalid username or password.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-akiba-pink-500">Admin Login</CardTitle>
          <p className="text-gray-600">Access the Akiba Blog CMS</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="admin_akiba"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Akibatribequest@2025"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button type="submit" className="w-full bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
