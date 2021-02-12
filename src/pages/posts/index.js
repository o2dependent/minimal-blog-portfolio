import React from "react"
import NavProtector from "../../components/navProtector"
import PostCard from "../../components/PostCard"
import SEO from "../../components/seo"

// --- data ---
export const query = graphql`
  query BlogPostPreview {
    BlogPosts: allMdx(
      filter: { fileAbsolutePath: { regex: "/pages/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            preview
          }
          slug
        }
      }
    }
  }
`

export default function posts({ data }) {
  // --- variables ---
  const posts = data.BlogPosts.edges.map(e => {
    const node = e.node
    const { frontmatter, slug } = node
    const { preview, title } = frontmatter
    return { frontmatter, slug, preview, title }
  })

  return (
    <>
      <SEO title="Blog Posts" />
      <NavProtector type="main" />
      <div className="container w-full px-4 md:px-0 mx-auto pb-15">
        <h1 className="mb-8">Posts</h1>
        <div className="grid gap-8 md:grid-cols-auto-post-display">
          {posts.map(p => (
            <PostCard key={p.title} post={p} toPage="posts" />
          ))}
        </div>
      </div>
    </>
  )
}
