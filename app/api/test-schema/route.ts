import { NextResponse } from "next/server"
import { client } from "@/lib/sanity"

export async function GET() {
  try {
    // Test if likeCount field exists in post schema
    const result = await client.fetch(`*[_type == "post"][0]{ _id, likeCount }`)
    
    const hasLikeCount = result && typeof result.likeCount !== 'undefined'
    
    return NextResponse.json({
      success: true,
      hasLikeCount,
      message: hasLikeCount 
        ? "Schema has likeCount field" 
        : "Schema missing likeCount field - please add it to your Sanity post schema",
      sampleData: result
    })
  } catch (error) {
    console.error("Schema test failed:", error)
    return NextResponse.json(
      { 
        success: false, 
        hasLikeCount: false,
        message: "Schema test failed",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}