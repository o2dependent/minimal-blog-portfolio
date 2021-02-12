import React from "react"
import NavProtector from "../../components/navProtector"
import PostTags from "../../components/PostTags"
import SEO from "../../components/seo"

export default function PostsLayout({ children, pathContext }) {
  const { date, preview, tags, title } = pathContext.frontmatter
  const newDate = new Date(date).toDateString()
  return (
    <>
      <SEO title={title} description={preview} />
      <div className="container max-w-3xl mx-auto px-4 md:px-8 pb-4 md:pb-8">
        <NavProtector type="main" />
        <h1 className="mb-4">{title}</h1>
        <div className="flex justify-between">
          <sub className="opacity-70 text-base">by Ethan Olsen</sub>
          <sub className="opacity-70 text-base">{newDate}</sub>
        </div>
        {tags && (
          <div className="flex gap-4 mt-4 justify-start">
            <PostTags tags={tags} />
          </div>
        )}
      </div>
      <div className="bg-white dark:bg-gray-800 w-full flex-grow">
        <NavProtector type="accent" />
        <article className="content-styles container max-w-3xl mx-auto p-4 md:p-8">
          <p>{preview}</p>
          {children}
        </article>
      </div>
    </>
  )
}
