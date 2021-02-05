import { graphql } from "gatsby"
import React from "react"
import NavProtector from "../components/navProtector"
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
      <div className="container mx-auto p-4 md:p-8 md:px-20">
        <NavProtector type="main" />
        <h1 className="text-red-500 dark:text-blue-400 text-center">{title}</h1>
        <p className="md:max-w-xl text-md text-gray-600 dark:text-gray-500 text-center mx-auto">
          {preview}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 w-full">
        <NavProtector type="accent" />
        <div
          className="container max-w-4xl mx-auto p-4 md:p-8 md:px-20"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  )
}
