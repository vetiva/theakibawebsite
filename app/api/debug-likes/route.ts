import { NextRequest, NextResponse } from "next/server"
import { client } from "@/lib/sanity"

export async function GET(request: NextRequest) {
  const debugInfo: any = {
    timestamp: new Date().toISOString(),
    tests: {}
  }

  try {
    // Test 1: Basic Sanity connection
    debugInfo.tests.connection = { status: 'testing' }
    try {
      const connectionTest = await client.fetch(`*[_type == "post"][0]._id`)
      debugInfo.tests.connection = {
        status: 'success',
        result: !!connectionTest,
        samplePostId: connectionTest
      }
    } catch (error) {
      debugInfo.tests.connection = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }

    // Test 2: Check if likeCount field exists in posts
    debugInfo.tests.likeCountField = { status: 'testing' }
    try {
      const likeCountTest = await client.fetch(`*[_type == "post"][0]{ _id, title, likeCount }`)
      debugInfo.tests.likeCountField = {
        status: 'success',
        hasField: typeof likeCountTest?.likeCount !== 'undefined',
        sampleData: likeCountTest
      }
    } catch (error) {
      debugInfo.tests.likeCountField = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }

    // Test 3: Check if postLike schema exists
    debugInfo.tests.postLikeSchema = { status: 'testing' }
    try {
      const postLikeTest = await client.fetch(`*[_type == "postLike"][0]`)
      debugInfo.tests.postLikeSchema = {
        status: 'success',
        schemaExists: !!postLikeTest || postLikeTest === null, // null means schema exists but no documents
        sampleData: postLikeTest
      }
    } catch (error) {
      debugInfo.tests.postLikeSchema = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
        likely: 'Schema does not exist'
      }
    }

    // Test 4: Try to create a test postLike document
    debugInfo.tests.createPostLike = { status: 'testing' }
    try {
      const testUserId = 'debug-test-user'
      const testPostId = debugInfo.tests.connection.samplePostId || 'test-post-id'
      
      const createResult = await client.create({
        _type: 'postLike',
        postId: testPostId,
        userId: testUserId,
        likedAt: new Date().toISOString()
      })
      
      debugInfo.tests.createPostLike = {
        status: 'success',
        created: true,
        documentId: createResult._id
      }

      // Clean up test document
      await client.delete(createResult._id)
      debugInfo.tests.createPostLike.cleanedUp = true

    } catch (error) {
      debugInfo.tests.createPostLike = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }

    // Test 5: Try to update a post's likeCount
    debugInfo.tests.updateLikeCount = { status: 'testing' }
    try {
      const testPostId = debugInfo.tests.connection.samplePostId
      if (testPostId) {
        // Get current count
        const currentPost = await client.fetch(`*[_type == "post" && _id == $id][0]{ likeCount }`, { id: testPostId })
        const currentCount = currentPost?.likeCount || 0
        
        // Try to update
        const updateResult = await client
          .patch(testPostId)
          .set({ likeCount: currentCount + 1 })
          .commit()
        
        debugInfo.tests.updateLikeCount = {
          status: 'success',
          updated: true,
          previousCount: currentCount,
          newCount: currentCount + 1,
          updateResult: updateResult._id
        }

        // Restore original count
        await client
          .patch(testPostId)
          .set({ likeCount: currentCount })
          .commit()
        
        debugInfo.tests.updateLikeCount.restored = true
      } else {
        debugInfo.tests.updateLikeCount = {
          status: 'skipped',
          reason: 'No test post ID available'
        }
      }
    } catch (error) {
      debugInfo.tests.updateLikeCount = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }

    // Test 6: Check token permissions
    debugInfo.tests.tokenPermissions = { status: 'testing' }
    try {
      // Try to get dataset info (requires read permissions)
      const datasets = await client.fetch(`*[_type == "sanity.imageAsset"][0]._id`)
      debugInfo.tests.tokenPermissions = {
        status: 'success',
        canRead: true,
        canWrite: debugInfo.tests.createPostLike.status === 'success'
      }
    } catch (error) {
      debugInfo.tests.tokenPermissions = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }

    // Summary
    debugInfo.summary = {
      allTestsPassed: Object.values(debugInfo.tests).every((test: any) => 
        test.status === 'success' || test.status === 'skipped'
      ),
      criticalIssues: Object.entries(debugInfo.tests)
        .filter(([_, test]: [string, any]) => test.status === 'error')
        .map(([name, test]: [string, any]) => ({ test: name, error: test.error }))
    }

    return NextResponse.json(debugInfo, { status: 200 })

  } catch (error) {
    debugInfo.globalError = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(debugInfo, { status: 500 })
  }
}