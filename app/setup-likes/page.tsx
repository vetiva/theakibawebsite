import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SetupLikes } from "@/components/setup-likes"
import { LikeTester } from "@/components/like-tester"

export default function SetupLikesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-akiba-pink-500 mb-4">
                Like Functionality Setup
              </h1>
              <p className="text-gray-600 text-lg">
                Test and configure the like functionality for your blog posts
              </p>
            </div>
            
            <SetupLikes />
            
            <div className="mt-12">
              <LikeTester />
            </div>
            
            <div className="mt-12 prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-akiba-pink-500 mb-4">
                How to Add Like Functionality to Your Sanity Schema
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">Step 1: Update Your Post Schema</h3>
                <p className="mb-3">In your Sanity Studio, add this field to your post schema:</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  name: 'likeCount',
  title: 'Like Count',
  type: 'number',
  initialValue: 0,
  validation: Rule => Rule.min(0)
}`}
                </pre>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">Step 2: Create PostLike Schema</h3>
                <p className="mb-3">Create a new schema file for tracking user likes:</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`export default {
  name: 'postLike',
  title: 'Post Like',
  type: 'document',
  fields: [
    {
      name: 'postId',
      title: 'Post ID',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'userId',
      title: 'User ID',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'likedAt',
      title: 'Liked At',
      type: 'datetime',
      validation: Rule => Rule.required()
    }
  ]
}`}
                </pre>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Good News!</h4>
                <p className="text-blue-700">
                  The like functionality will work even without the Sanity schema changes! 
                  It will automatically fall back to localStorage until you update your schema.
                  Once you add the schema fields, likes will become persistent and visible to all users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}