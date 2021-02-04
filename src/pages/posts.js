import React from "react"
import Layout from "../components/layout"
import PostCard from "../components/PostCard"
import SEO from "../components/seo"

export default function posts() {
  const test = [
    {
      title: "The styled-components happy path",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis lacus pretium at convallis. Quis massa malesuada vulputate mi aliquet odio.",
      slug: "nothing",
    },
    {
      title: "The styled-components happy path",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis lacus pretium at convallis. Quis massa malesuada vulputate mi aliquet odio.",
      slug: "nothing",
    },
    {
      title: "The styled-components happy path",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis lacus pretium at convallis. Quis massa malesuada vulputate mi aliquet odio.",
      slug: "nothing",
    },
    {
      title: "The styled-components happy path",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis lacus pretium at convallis. Quis massa malesuada vulputate mi aliquet odio.",
      slug: "nothing",
    },
  ]

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <div className="container w-full px-4 md:px-0 mx-auto py-20">
        <h1 className="mb-8">Posts</h1>
        <div className="grid gap-8 md:grid-cols-auto-post-display">
          {test.map(t => (
            <PostCard post={t} toPage="posts" />
          ))}
        </div>
      </div>
    </Layout>
  )
}
