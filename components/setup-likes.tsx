"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export function SetupLikes() {
  const [testResults, setTestResults] = useState<{
    sanityConnection: 'pending' | 'success' | 'error'
    apiRoutes: 'pending' | 'success' | 'error'
    schemaUpdate: 'pending' | 'success' | 'error'
  }>({
    sanityConnection: 'pending',
    apiRoutes: 'pending',
    schemaUpdate: 'pending'
  })

  const [isRunning, setIsRunning] = useState(false)

  const runTests = async () => {
    setIsRunning(true)
    
    // Test 1: Sanity Connection
    try {
      const response = await fetch('/api/test-sanity')
      setTestResults(prev => ({
        ...prev,
        sanityConnection: response.ok ? 'success' : 'error'
      }))
    } catch (error) {
      setTestResults(prev => ({
        ...prev,
        sanityConnection: 'error'
      }))
    }

    // Test 2: API Routes
    try {
      const response = await fetch('/api/likes/test-post-id')
      setTestResults(prev => ({
        ...prev,
        apiRoutes: response.ok ? 'success' : 'error'
      }))
    } catch (error) {
      setTestResults(prev => ({
        ...prev,
        apiRoutes: 'error'
      }))
    }

    // Test 3: Schema Update (try to fetch a post with likeCount)
    try {
      const posts = await fetch('/api/test-schema')
      const data = await posts.json()
      setTestResults(prev => ({
        ...prev,
        schemaUpdate: data.hasLikeCount ? 'success' : 'error'
      }))
    } catch (error) {
      setTestResults(prev => ({
        ...prev,
        schemaUpdate: 'error'
      }))
    }

    setIsRunning(false)
  }

  const getIcon = (status: 'pending' | 'success' | 'error') => {
    switch (status) {
      case 'pending':
        return <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Like Functionality Setup</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {getIcon(testResults.sanityConnection)}
            <span>Sanity Connection</span>
          </div>
          
          <div className="flex items-center gap-3">
            {getIcon(testResults.apiRoutes)}
            <span>API Routes</span>
          </div>
          
          <div className="flex items-center gap-3">
            {getIcon(testResults.schemaUpdate)}
            <span>Schema Update (likeCount field)</span>
          </div>
        </div>

        <Button 
          onClick={runTests} 
          disabled={isRunning}
          className="w-full"
        >
          {isRunning ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Testing...
            </>
          ) : (
            'Test Like Setup'
          )}
        </Button>

        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>Next Steps:</strong></p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Add the <code>likeCount</code> field to your Sanity post schema</li>
            <li>Create the <code>postLike</code> schema in Sanity</li>
            <li>Deploy your Sanity schema changes</li>
            <li>Test the like functionality on your blog posts</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}