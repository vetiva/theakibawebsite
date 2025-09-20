// Update your existing post schema to include likeCount field
// Add this field to your post schema:

{
  name: 'likeCount',
  title: 'Like Count',
  type: 'number',
  initialValue: 0,
  validation: Rule => Rule.min(0)
}