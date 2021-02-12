import React from "react"
import NavProtector from "../../components/navProtector"
import PostCard from "../../components/PostCard"
import SEO from "../../components/seo"

// --- query ---
export const query = graphql`
  query ProjectsPage {
    Projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/pages/projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            preview
            date
          }
          slug
        }
      }
    }
  }
`

export default function projects({ data }) {
  const projects = data.Projects.edges.map(e => {
    const node = e.node
    const { frontmatter, slug } = node
    const { preview, title } = frontmatter
    return { frontmatter, slug, preview, title }
  })

  return (
    <>
      <SEO title="Projects" />
      <NavProtector type="main" />
      <div className="container w-full px-4 md:px-0 mx-auto pb-15">
        <h1 className="mb-8">Projects</h1>
        <div className="grid gap-8 md:grid-cols-auto-post-display">
          {projects.map(p => (
            <PostCard key={p.title} post={p} toPage="projects" />
          ))}
        </div>
      </div>
    </>
  )
}
