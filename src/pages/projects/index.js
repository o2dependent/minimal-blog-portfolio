import React, { useEffect, useState } from "react"
import { ArrayParam, useQueryParams } from "use-query-params"
import NavProtector from "../../components/navProtector"
import PostCard from "../../components/PostCard"
import PostTags from "../../components/PostTags"
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
            tags
          }
          slug
        }
      }
    }
  }
`

export default function Projects({ data }) {
  const allProjects = data.Projects.edges.map(e => {
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
  // visible projects dependent on query params
  const [projects, setProjects] = useState(allProjects)

  // change search dependent variables
  useEffect(() => {
    // set query when active tags changes
    setQuery({ tags: activeTags })
    // set visible projects dependent on active tags
    if (activeTags.length !== 0) {
      // filter for projects with tags
      let newProjects = []
      newProjects = allProjects.filter(project =>
        project?.tags?.some(tag => activeTags.includes(tag))
      )
      setProjects(newProjects)
    } else {
      // set post to be all projects
      setProjects(allProjects)
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
      <SEO title="Projects" />
      <NavProtector type="main" />
      <div className="container w-full px-4 md:px-0 mx-auto pb-15">
        <h1 className="mb-4">Projects</h1>
        <PostTags
          toggle={handleTagToggle}
          activeTags={activeTags}
          tags={["React", "CSS", "Gatsby", "Nextjs", "Node", "Git"]}
        />
        <div className="grid gap-8 md:grid-cols-auto-post-display">
          {projects.map(p => (
            <PostCard key={p.title} post={p} toPage="projects" />
          ))}
        </div>
      </div>
    </>
  )
}
