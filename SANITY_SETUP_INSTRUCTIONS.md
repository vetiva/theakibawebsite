# Adding Like Functionality to Your Sanity Schema

## Step 1: Update Your Post Schema

In your Sanity Studio project, find your `post.js` or `post.ts` schema file and add this field:

```javascript
// Add this field to your existing post schema
{
  name: 'likeCount',
  title: 'Like Count',
  type: 'number',
  initialValue: 0,
  validation: Rule => Rule.min(0),
  description: 'Number of likes this post has received'
}
```

## Step 2: Create a New PostLike Schema

Create a new file called `postLike.js` in your Sanity schemas folder:

```javascript
export default {
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
  ],
  preview: {
    select: {
      postId: 'postId',
      userId: 'userId',
      likedAt: 'likedAt'
    },
    prepare(selection) {
      const {postId, userId, likedAt} = selection
      return {
        title: `Like by ${userId.slice(0, 8)}...`,
        subtitle: `Post: ${postId.slice(0, 8)}... on ${new Date(likedAt).toLocaleDateString()}`
      }
    }
  }
}
```

## Step 3: Add the Schema to Your Sanity Config

In your `sanity.config.js` or `sanity.config.ts` file, add the new schema:

```javascript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

// Import your schemas
import post from './schemas/post'
import postLike from './schemas/postLike' // Add this line

export default defineConfig({
  // ... your existing config
  schema: {
    types: [
      post,
      postLike, // Add this line
      // ... your other schemas
    ],
  },
})
```

## Step 4: Deploy Your Schema Changes

1. Run `sanity deploy` in your Sanity Studio project
2. Or if using Sanity Studio v3, the changes should be applied automatically

## Step 5: Update Your Sanity Token Permissions

Make sure your Sanity token (in your .env.local) has write permissions:
- Go to your Sanity project dashboard
- Navigate to API → Tokens
- Ensure your token has "Editor" or "Admin" permissions

## Alternative: Quick Setup Without Separate Schemas

If you don't want to create separate schemas, you can use a simpler approach by just adding the `likeCount` field to your post schema and storing likes in localStorage as a fallback.

The API routes I created will handle both scenarios gracefully.