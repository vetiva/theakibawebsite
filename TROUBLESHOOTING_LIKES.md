# Troubleshooting Like Functionality

## Common Issues and Solutions

### 1. **Likes not recording in Sanity CMS**

#### Check 1: Sanity Token Permissions
Your Sanity token needs **Editor** or **Admin** permissions to create and update documents.

1. Go to your Sanity project dashboard: https://sanity.io/manage
2. Navigate to **API** → **Tokens**
3. Check your token permissions
4. If needed, create a new token with **Editor** permissions

#### Check 2: Schema Setup
Make sure both schemas are properly set up in your Sanity Studio:

**Post Schema Update:**
```javascript
// Add this field to your existing post schema
{
  name: 'likeCount',
  title: 'Like Count',
  type: 'number',
  initialValue: 0,
  validation: Rule => Rule.min(0)
}
```

**PostLike Schema:**
```javascript
// Create a new file: schemas/postLike.js
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
  ]
}
```

**Add to sanity.config.js:**
```javascript
import postLike from './schemas/postLike'

export default defineConfig({
  // ... other config
  schema: {
    types: [
      // ... other schemas
      postLike, // Add this line
    ],
  },
})
```

#### Check 3: Deploy Schema Changes
After updating your schemas:
1. Run `sanity deploy` in your Sanity Studio project
2. Or if using Sanity Studio v3, changes should apply automatically

### 2. **Testing the Setup**

#### Option 1: Use the Debug Page
Visit `/setup-likes` on your website to run comprehensive tests.

#### Option 2: Manual API Testing
Test the API directly:

```bash
# Test getting like count
curl https://your-domain.com/api/likes/YOUR_POST_ID

# Test adding a like
curl -X POST https://your-domain.com/api/likes/YOUR_POST_ID
```

#### Option 3: Check Browser Console
1. Open browser developer tools
2. Go to Console tab
3. Click a like button
4. Look for error messages or API responses

### 3. **Common Error Messages**

#### "Document not found"
- The post ID doesn't exist in Sanity
- Check that you're using the correct post `_id`

#### "Schema validation failed"
- The postLike schema isn't properly set up
- Make sure all required fields are defined

#### "Insufficient permissions"
- Your Sanity token doesn't have write permissions
- Update token permissions in Sanity dashboard

#### "Network error" or "Failed to fetch"
- API routes aren't working
- Check that your Next.js app is running
- Verify API routes exist in `app/api/likes/[postId]/route.ts`

### 4. **Debugging Steps**

1. **Check Sanity Connection:**
   ```javascript
   // Test in browser console
   fetch('/api/test-sanity').then(r => r.json()).then(console.log)
   ```

2. **Test Schema:**
   ```javascript
   // Test in browser console
   fetch('/api/test-schema').then(r => r.json()).then(console.log)
   ```

3. **Debug Full System:**
   ```javascript
   // Test in browser console
   fetch('/api/debug-likes').then(r => r.json()).then(console.log)
   ```

4. **Manual Like Test:**
   ```javascript
   // Replace 'POST_ID' with actual post ID
   fetch('/api/test-like', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ postId: 'POST_ID' })
   }).then(r => r.json()).then(console.log)
   ```

### 5. **Verification Checklist**

- [ ] Sanity token has Editor/Admin permissions
- [ ] `likeCount` field added to post schema
- [ ] `postLike` schema created and deployed
- [ ] Schema changes deployed to Sanity
- [ ] API routes exist and are accessible
- [ ] No console errors when clicking like buttons
- [ ] Debug tests pass at `/setup-likes`

### 6. **Still Not Working?**

If likes still aren't recording:

1. Check the browser Network tab when clicking like buttons
2. Look for failed API requests
3. Check server logs for error messages
4. Verify your Sanity project ID and dataset in `.env.local`
5. Try creating a postLike document manually in Sanity Studio

### 7. **Fallback Mode**

The system will automatically fall back to localStorage if:
- Sanity schemas aren't set up
- API requests fail
- Token permissions are insufficient

You'll see "(local)" indicator next to like counts in fallback mode.