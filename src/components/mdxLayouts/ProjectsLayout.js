import React from "react"
import NavProtector from "../../components/navProtector"
import PostTags from "../../components/PostTags"
import SEO from "../../components/seo"

export default function PostsLayout({ children, pathContext }) {
  const { date, preview, tags, title, link } = pathContext.frontmatter
  const newDate = new Date(date).toDateString()
  return (
    <>
      <SEO title={title} description={preview} />
      <div className="container max-w-3xl mx-auto px-4 md:px-8 pb-4 md:pb-8">
        <NavProtector type="main" />
        <a className="w-max" href={link}>
          <h1 className="project-link mb-4 w-max">{title}</h1>
        </a>
        <div className="flex justify-between">
          <sub className="opacity-70 text-base">by Ethan Olsen</sub>
          <sub className="opacity-70 text-base">{newDate}</sub>
        </div>
        {tags && <PostTags to="projects" tags={tags} />}
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
