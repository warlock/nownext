import { Fragment } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Index = ({ data: { loading, error, posts } }) => {
  if (error) return <p>Error loading posts...</p>
  if (posts)
    return (
      <Fragment>
        {posts.map(post => (
          <div key={post.id}>
            {post.user.username}
            {post.message}
          </div>
        ))}
      </Fragment>
    )
  if (loading) return <div>Loading...</div>
  return <div>Wait...</div>
}

const POSTS = gql`
  query POSTS {
    posts {
      id
      message
      images
      created_at
      user {
        username
        image
      }
    }
  }
`

export default graphql(POSTS, {
  props: ({ data }) => ({ data })
})(Index)
