import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

export type T_Tags = "React" | "CSS" | "Gatsby" | "Nextjs" | "Node" | "Git"

interface I_PostTagsProps {
  tags: T_Tags[]
  toggle: (tag: T_Tags) => null
  to: string
  activeTags: T_Tags[]
}

export default function PostTags({
  tags,
  toggle,
  to,
  activeTags,
}: I_PostTagsProps) {
  const baseClass =
    "flex items-center justify-center cursor-default text-sm opacity-70 hover:opacity-100 px-4 py-2 bg-white dark:bg-gray-800 rounded-full"
  if (toggle && activeTags) {
    return (
      <div className="flex gap-4 my-4 justify-start">
        {tags.map<JSX.Element>(tag => (
          <div
            className={`${baseClass} ${
              activeTags.includes(tag) ? "opacity-100" : ""
            }`}
            onClick={() => toggle(tag)}
            key={tag}
          >
            #{tag}
          </div>
        ))}
      </div>
    )
  } else if (to) {
    return (
      <div className="flex gap-4 my-4 justify-start">
        {tags.map<JSX.Element>(tag => (
          <Link to={`/${to}?tags=${tag}`} className={baseClass} key={tag}>
            #{tag}
          </Link>
        ))}
      </div>
    )
  } else {
    return <></>
  }
}
