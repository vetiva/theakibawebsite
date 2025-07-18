"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import { getAllBlogPosts, type BlogPost } from "@/lib/blog-data"
import Link from "next/link"

export default function BlogAdminPage() {
  const [posts] = useState<BlogPost[]>(getAllBlogPosts())
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    featuredImage: "",
    additionalImages: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save to a database
    console.log("New blog post:", formData)
    setIsCreating(false)
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      featuredImage: "",
      additionalImages: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
              <Button
                onClick={() => setIsCreating(true)}
                className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New Post
              </Button>
            </div>

            {/* Create/Edit Form */}
            {isCreating && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Create New Blog Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          placeholder="Enter blog post title"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="insight">Insight</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="excerpt">Excerpt *</Label>
                      <Textarea
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) => handleInputChange("excerpt", e.target.value)}
                        placeholder="Brief description of the blog post"
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => handleInputChange("content", e.target.value)}
                        placeholder="Write your blog post content here..."
                        rows={10}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="featuredImage">Featured Image URL *</Label>
                      <Input
                        id="featuredImage"
                        value={formData.featuredImage}
                        onChange={(e) => handleInputChange("featuredImage", e.target.value)}
                        placeholder="/images/your-image.png"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalImages">Additional Images (comma-separated URLs)</Label>
                      <Input
                        id="additionalImages"
                        value={formData.additionalImages}
                        onChange={(e) => handleInputChange("additionalImages", e.target.value)}
                        placeholder="/images/image1.png, /images/image2.png"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <Button type="submit" className="bg-akiba-pink-500 hover:bg-akiba-pink-600 text-white">
                        Create Post
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsCreating(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Posts List */}
            <Card>
              <CardHeader>
                <CardTitle>All Blog Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{post.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>{post.publishedAt}</span>
                          <span>•</span>
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
