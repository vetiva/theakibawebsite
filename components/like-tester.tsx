"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LikeTester() {
  const [postId, setPostId] = useState("")
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const testLike = async () => {
    if (!postId.trim()) {
      alert("Please enter a post ID")
      return
    }

    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/test-like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId: postId.trim() })
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        error: "Network error",
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const testApiCall = async (method: 'GET' | 'POST') => {
    if (!postId.trim()) {
      alert("Please enter a post ID")
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch(`/api/likes/${postId.trim()}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()
      setResult({ apiCall: method, ...data })
    } catch (error) {
      setResult({
        error: `${method} API call failed`,
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Like Functionality Tester</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Post ID (from Sanity)
          </label>
          <Input
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            placeholder="Enter a post ID from your Sanity CMS"
            className="mb-3"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button 
            onClick={testLike} 
            disabled={isLoading}
            variant="default"
          >
            {isLoading ? "Testing..." : "Test Full Like Flow"}
          </Button>
          
          <Button 
            onClick={() => testApiCall('GET')} 
            disabled={isLoading}
            variant="outline"
          >
            Test GET API
          </Button>
          
          <Button 
            onClick={() => testApiCall('POST')} 
            disabled={isLoading}
            variant="outline"
          >
            Test POST API
          </Button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3">Test Result:</h3>
            <pre className="text-sm bg-white p-3 rounded border overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
            
            {result.success && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-green-800 font-medium">✅ Success!</p>
                <p className="text-green-700 text-sm">
                  Like functionality is working correctly.
                </p>
              </div>
            )}
            
            {result.error && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded">
                <p className="text-red-800 font-medium">❌ Error</p>
                <p className="text-red-700 text-sm">
                  {result.details || result.error}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>How to get a Post ID:</strong></p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>Go to your Sanity Studio</li>
            <li>Open any blog post</li>
            <li>Look at the URL or document ID</li>
            <li>Copy the ID (usually starts with letters/numbers)</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}