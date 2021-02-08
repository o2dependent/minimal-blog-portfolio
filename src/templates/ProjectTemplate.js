import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import NavProtector from "../components/navProtector"
import PostTags from "../components/PostTags"

// --- query ---
export const query = graphql`
  query ProjectPage($id: String) {
    project: datoCmsProjectPost(id: { eq: $id }) {
      body
      link
      preview
      title
    }
  }
`

export default function BlogTemplate({
  data: {
    project: { body, title, preview, link },
  },
}) {
  // MOCK TAGS FOR A POST
  const tags = []
  return (
    <>
      <SEO title={title} description={preview} />
      <div className="container max-w-3xl mx-auto p-4 md:p-8">
        <NavProtector type="main" />
        <a className="underline" href={link}>
          <h1 className="mb-4">{title}</h1>
        </a>
        <div className="flex gap-4 mb-2 justify-start">
          <PostTags tags={tags} />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 w-full">
        <NavProtector type="accent" />
        <div
          className="content-styles container max-w-3xl mx-auto p-4 md:p-8"
          dangerouslySetInnerHTML={{ __html: `<p>${preview}</p>${body} ` }}
        />
      </div>
    </>
  )
}
