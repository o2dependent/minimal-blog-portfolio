import React, { useEffect, useState } from "react"

export type T_Tags = "React" | "CSS" | "Gatsby" | "Nextjs" | "Node" | "Git"

interface I_PostTagsProps {
  tags: T_Tags[]
}

export default function PostTags({ tags }: I_PostTagsProps) {
  return (
    <>
      {tags.map<JSX.Element>(tag => (
        <TagContainer key={tag}>#{tag}</TagContainer>
      ))}
    </>
  )
}

const TagContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center cursor-default text-sm opacity-80 hover:opacity-100 px-4 py-2 bg-white dark:bg-gray-800 rounded-full">
      {children}
    </div>
  )
}
