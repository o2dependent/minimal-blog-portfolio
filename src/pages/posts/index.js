import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import { ArrayParam, useQueryParams } from "use-query-params"
import NavProtector from "../../components/navProtector"
import PostCard from "../../components/PostCard"
import PostTags from "../../components/PostTags"
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
            tags
          }
          slug
        }
      }
    }
  }
`

export default function Posts({ data, params }) {
  // --- variables ---
  const allPosts = data.BlogPosts.edges.map(e => {
    // scrape unneeded nesting from post object
    const node = e.node
    const { frontmatter, slug } = node
    const { preview, title, tags } = frontmatter
    return { frontmatter, slug, preview, title, tags }
  })

  // --- hooks ---
  // var and setter for query params
  const [query, setQuery] = useQueryParams({ tags: ArrayParam })
  // destructured query
  const { tags } = query
  // state for managing query search
  const [activeTags, setActiveTags] = useState(tags || [])
  // visible posts dependent on query params
  const [posts, setPosts] = useState(allPosts)

  // change search dependent variables
  useEffect(() => {
    // set query when active tags changes
    setQuery({ tags: activeTags })
    // set visible posts dependent on active tags
    if (activeTags.length !== 0) {
      // filter for posts with tags
      let newPosts = []
      newPosts = allPosts.filter(post =>
        post?.tags?.some(tag => activeTags.includes(tag))
      )
      setPosts(newPosts)
    } else {
      // set post to be all posts
      setPosts(allPosts)
    }
  }, [activeTags])

  // --- functions ---
  const handleTagToggle = tagName => {
    if (activeTags.includes(tagName)) {
      // if tag is in array remove tag from search
      const newActiveTags = activeTags.filter(tag => tag !== tagName)
      setActiveTags(newActiveTags)
    } else {
      // if tag isn't in array add to search
      setActiveTags([...activeTags, tagName])
    }
  }

  return (
    <>
      <SEO title="Blog Posts" />
      <NavProtector type="main" onClick={handleTagToggle} />
      <div className="container w-full px-4 md:px-0 mx-auto pb-15">
        <h1 className="mb-4">Posts</h1>
        <PostTags
          toggle={handleTagToggle}
          activeTags={activeTags}
          tags={["React", "CSS", "Gatsby", "Nextjs", "Node", "Git"]}
        />
        <div className="grid gap-8 md:grid-cols-auto-post-display">
          {posts.map(p => (
            <PostCard key={p.title} post={p} toPage="posts" />
          ))}
        </div>
      </div>
    </>
  )
}
