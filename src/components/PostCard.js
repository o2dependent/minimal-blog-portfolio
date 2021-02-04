import { Link } from "gatsby"
import React from "react"

export default function PostCard({ post: { title, desc, slug }, toPage }) {
  return (
    <Link
      className="p-8 rounded-xl bg-white dark:bg-gray-800 flex flex-col gap-4"
      to={`/${toPage}/${slug}`}
    >
      <strong className="text-xl font-semibold">{title}</strong>
      <p className="m-0 flex-grow">{desc}</p>
      <p className="m-0">Read More</p>
    </Link>
  )
}
