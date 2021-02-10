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
      tags
    }
  }
`

export default function BlogTemplate({
  data: {
    project: { body, title, preview, link, tags },
  },
}) {
  let parsedTags
  if (tags !== null) {
    parsedTags = JSON.parse(tags)
  }
  return (
    <>
      <SEO title={title} description={preview} />
      <div className="container max-w-3xl mx-auto p-4 md:p-8">
        <NavProtector type="main" />
        <a className="w-max" href={link}>
          <h1 className="project-link mb-4 w-max">{title}</h1>
        </a>
        <sub className="opacity-70 text-base">by Ethan Olsen</sub>
        {typeof parsedTags !== "undefined" && (
          <div className="flex gap-4 mt-4 justify-start">
            <PostTags tags={parsedTags} />
          </div>
        )}
      </div>
      <div className="bg-white dark:bg-gray-800 w-full flex-grow">
        <NavProtector type="accent" />
        <div
          className="content-styles container max-w-3xl mx-auto p-4 md:p-8"
          dangerouslySetInnerHTML={{ __html: `<p>${preview}</p>${body} ` }}
        />
      </div>
    </>
  )
}
