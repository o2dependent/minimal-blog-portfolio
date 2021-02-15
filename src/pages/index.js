import React from "react"

import SEO from "../components/seo"
import PostCard from "../components/PostCard"
import { graphql, Link } from "gatsby"
import NavProtector from "../components/navProtector"
import SvgSwitch from "../components/SvgSwitch"

// --- query ---
export const query = graphql`
  query IndexPage {
    BlogPosts: allMdx(
      filter: { fileAbsolutePath: { regex: "/pages/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            preview
          }
          slug
        }
      }
    }
    Projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/pages/projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            preview
            date
          }
          slug
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // --- functions ---
  const getCardData = e => {
    const node = e.node
    const { frontmatter, slug } = node
    const { preview, title } = frontmatter
    return { frontmatter, slug, preview, title }
  }
  // --- variables ---
  const posts = data.BlogPosts.edges.map(getCardData)
  const projects = data.Projects.edges.map(getCardData)
  const index =
    "I am a web developer and designer with a focus on front-end animation and application development. This site is primarily a way to show what I have been working on and the benefits and struggles of the tech I have been using. If you enjoy any of the articles feel free to send me a message and start a discussion about the topic!"

  return (
    <>
      <SEO title="Home" />
      <div className="w-full">
        <NavProtector type="main" />
        {/* --- desktop --- */}
        <div className="container md:mt-15 mt-10 mx-auto">
          <svg
            className="dark:hidden hidden md:block w-full h-auto"
            viewBox="0 0 185 16"
          >
            <defs>
              <linearGradient
                id="rainbow"
                x1="0"
                x2="100%"
                y1="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FDB32D" offset="0%" />
                <stop stopColor="#FF845F" offset="50%" />
                <stop stopColor="#FF5F8A" offset="100%" />
              </linearGradient>
            </defs>
            <text
              className="hidden md:block"
              fill="url(#rainbow)"
              style={{ textAnchor: "middle" }}
              x="50%"
              y="15"
            >
              LEARN CREATE ENJOY
            </text>
          </svg>
          {/* --- mobile --- */}
          <svg
            className="dark:hidden block md:hidden w-full h-auto"
            style={{ textAnchor: "middle" }}
            viewBox="0 0 65 60"
          >
            <defs>
              <linearGradient
                id="rainbowMobile"
                x1="0"
                x2="100%"
                y1="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FDB32D" offset="0%" />
                <stop stopColor="#FF845F" offset="50%" />
                <stop stopColor="#FF5F8A" offset="100%" />
              </linearGradient>
            </defs>
            <text fill="url(#rainbowMobile)" x="50%" y="16">
              LEARN
            </text>
            <text fill="url(#rainbowMobile)" x="50%" y="32">
              CREATE
            </text>
            <text fill="url(#rainbowMobile)" x="50%" y="48">
              ENJOY
            </text>
          </svg>
          {/* --- --- DARK MODE --- --- */}
          {/* --- desktop --- */}
          <svg
            className="hidden md:dark:block w-full h-auto"
            style={{ textAnchor: "middle" }}
            viewBox="0 0 185 16"
          >
            <defs>
              <linearGradient
                id="darkRainbow"
                x1="0"
                x2="100%"
                y1="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00ECA1" offset="0%" />
                <stop stopColor="#6F84F4" offset="50%" />
                <stop stopColor="#F256CC" offset="100%" />
              </linearGradient>
            </defs>
            <text
              className="hidden md:block"
              fill="url(#darkRainbow)"
              x="50%"
              y="15"
            >
              LEARN CREATE ENJOY
            </text>
          </svg>
          {/* --- mobile --- */}
          <svg
            className="dark:block md:dark:hidden hidden w-full h-auto"
            style={{ textAnchor: "middle" }}
            viewBox="0 0 65 60"
          >
            <defs>
              <linearGradient
                id="darkRainbowMobile"
                x1="0"
                x2="100%"
                y1="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00ECA1" offset="0%" />
                <stop stopColor="#6F84F4" offset="50%" />
                <stop stopColor="#F256CC" offset="100%" />
              </linearGradient>
            </defs>
            <text fill="url(#darkRainbowMobile)" x="50%" y="16">
              LEARN
            </text>
            <text fill="url(#darkRainbowMobile)" x="50%" y="32">
              CREATE
            </text>
            <text fill="url(#darkRainbowMobile)" x="50%" y="48">
              ENJOY
            </text>
          </svg>
        </div>
        {/* --- atom desktop --- */}
        <div className="hidden md:block container mx-auto fill-current text-red-500 dark:text-blue-400">
          <div className="md:h-108 md:w-108 relative mx-auto my-12">
            <div className="absolute transform -translate-y-2/4 pulse-dot -translate-x-2/4 inset-y-2/4 inset-x-2/4 h-24 w-24 rounded-full bg-red-500 dark:bg-blue-400"></div>
            <div className="absolute top-0 left-0 pulse-circle md:h-108 md:w-108 rounded-full bg-red-500 dark:bg-blue-400"></div>
            <div className="absolute top-0 left-0 pulse-circle md:h-108 md:w-108 rounded-full bg-red-500 dark:bg-blue-400"></div>
            <div className="absolute top-0 left-0 pulse-circle md:h-108 md:w-108 rounded-full bg-red-500 dark:bg-blue-400"></div>
            {["React", "CSS", "Gatsby", "Nextjs", "Node", "Git"].map(
              svgName => (
                <div className="flex items-center justify-center circle-around absolute m-auto inset-0 md:w-14 md:h-14 bg-white dark:bg-gray-800 rounded-full">
                  <SvgSwitch svgName={svgName} />
                </div>
              )
            )}
          </div>
        </div>
        {/* --- mobile atom scroll --- */}
        <div className="flex gap-4 relative md:hidden w-full h-16 overflow-hidden fill-current text-red-500 dark:text-blue-400">
          {["React", "CSS", "Gatsby", "Nextjs", "Node", "Git"].map(svgName => (
            <div className="flex items-center justify-center scroll-along absolute w-14 h-14 bg-white dark:bg-gray-800 rounded-full">
              <SvgSwitch svgName={svgName} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 w-full pb-15 my-8">
        <NavProtector type="accent" />
        <div className="container mx-auto px-4 pt-0">
          <h2 className=" text-4xl font-semibold">About me</h2>
          <div className="md:flex gap-8">
            <p className="flex-grow">{index}</p>
          </div>
        </div>
      </div>
      <NavProtector type="main" />
      <div className="container mx-auto my-8 mt-0">
        <div className="px-4 flex justify-between items-baseline">
          <h2 className="mb-9 text-4xl font-semibold">Posts</h2>
          <Link className="h-6 mb-9 text-lg" to="/posts">
            See all posts
          </Link>
        </div>
        <div className="p-4 grid grid-rows-1 grid-cols-post-display-mobile md:grid-cols-post-display gap-8 md:overflow-x-auto overflow-x-scroll">
          {posts.map(p => (
            <PostCard key={p.title} post={p} toPage="posts" />
          ))}
        </div>
      </div>
      <div className="container mx-auto my-8 mb-15">
        <div className="px-4 flex justify-between items-baseline">
          <h2 className="mb-9 text-4xl font-semibold">Projects</h2>
          <Link className="h-6 mb-9 text-lg" to="/projects">
            See all projects
          </Link>
        </div>
        <div className="p-4 grid grid-rows-1 grid-cols-post-display-mobile md:grid-cols-post-display gap-8 md:overflow-x-auto overflow-x-scroll">
          {projects.map(p => (
            <PostCard key={p.title} post={p} toPage="projects" />
          ))}
        </div>
      </div>
    </>
  )
}

export default IndexPage
