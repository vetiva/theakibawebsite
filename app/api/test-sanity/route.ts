import { NextResponse } from "next/server"
import { client } from "@/lib/sanity"

export async function GET() {
  try {
    // Test basic Sanity connection
    const result = await client.fetch(`*[_type == "post"][0]._id`)
    
    return NextResponse.json({
      success: true,
      connected: !!result,
      message: "Sanity connection successful"
    })
  } catch (error) {
    console.error("Sanity connection test failed:", error)
    return NextResponse.json(
      { 
        success: false, 
        connected: false,
        message: "Sanity connection failed",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}