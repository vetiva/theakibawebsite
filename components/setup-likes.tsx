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

  const [debugInfo, setDebugInfo] = useState<any>(null)
  const [isRunning, setIsRunning] = useState(false)

  const runTests = async () => {
    setIsRunning(true)
    setDebugInfo(null)
    
    try {
      // Run comprehensive debug test
      const debugResponse = await fetch('/api/debug-likes')
      const debugData = await debugResponse.json()
      setDebugInfo(debugData)
      
      // Update test results based on debug info
      setTestResults({
        sanityConnection: debugData.tests?.connection?.status === 'success' ? 'success' : 'error',
        apiRoutes: debugData.tests?.createPostLike?.status === 'success' ? 'success' : 'error',
        schemaUpdate: debugData.tests?.likeCountField?.hasField ? 'success' : 'error'
      })
    } catch (error) {
      console.error('Debug test failed:', error)
      setTestResults({
        sanityConnection: 'error',
        apiRoutes: 'error',
        schemaUpdate: 'error'
      })
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

        {debugInfo && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3">Debug Information</h3>
            <div className="space-y-3 text-sm">
              {debugInfo.tests && Object.entries(debugInfo.tests).map(([testName, result]: [string, any]) => (
                <div key={testName} className="border-l-2 border-gray-300 pl-3">
                  <div className="flex items-center gap-2">
                    {getIcon(result.status === 'success' ? 'success' : result.status === 'error' ? 'error' : 'pending')}
                    <span className="font-medium capitalize">{testName.replace(/([A-Z])/g, ' $1')}</span>
                  </div>
                  {result.error && (
                    <p className="text-red-600 text-xs mt-1">Error: {result.error}</p>
                  )}
                  {result.likely && (
                    <p className="text-orange-600 text-xs mt-1">Likely issue: {result.likely}</p>
                  )}
                </div>
              ))}
            </div>
            
            {debugInfo.summary?.criticalIssues?.length > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                <h4 className="font-semibold text-red-800 mb-2">Critical Issues Found:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  {debugInfo.summary.criticalIssues.map((issue: any, index: number) => (
                    <li key={index}>• {issue.test}: {issue.error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

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