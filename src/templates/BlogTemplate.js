import { graphql } from "gatsby"
import React from "react"
import NavProtector from "../components/navProtector"
import PostTags from "../components/PostTags"
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
  // MOCK TAGS FOR A POST
  const tags = ["React"]
  return (
    <>
      <SEO title={title} description={preview} />
      <div className="container max-w-3xl mx-auto p-4 md:p-8">
        <NavProtector type="main" />
        <h1 className="mb-4">{title}</h1>
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
