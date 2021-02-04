import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"

// --- query ---
export const query = graphql`
  query BlogPage($id: String) {
    post: datoCmsBlogPost(id: { eq: $id }) {
      body
      title
      preview
    }
  }
`

export default function BlogTemplate({
  data: {
    post: { body, title, preview },
  },
}) {
  return (
    <>
      <SEO title={title} description={preview} />
      <div className="container mx-auto">
        <h1>{title}</h1>
        <p className="text-md">{preview}</p>
      </div>
      <div className="w-full p-4">
        <div
          className="container mx-auto"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  )
}
