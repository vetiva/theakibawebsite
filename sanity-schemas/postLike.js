// Add this to your Sanity schema files
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