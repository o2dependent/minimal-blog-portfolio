import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"

// --- query ---
export const query = graphql`
  query ProjectPage($id: String) {
    project: datoCmsProjectPost(id: { eq: $id }) {
      body
      link
      preview
      title
      thumbnail {
        fluid(
          forceBlurhash: false
          imgixParams: { fm: "jpg", auto: "compress" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default function BlogTemplate({
  data: {
    project: {
      body,
      title,
      preview,
      thumbnail: { fluid },
      link,
    },
  },
}) {
  return (
    <>
      <SEO title={title} description={preview} />
      <h1>{title}</h1>
      <sub>{preview}</sub>
      <div className="w-full p-4">
        <div
          className="container mx-auto"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  )
}
