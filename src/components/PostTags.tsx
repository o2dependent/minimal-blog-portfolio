import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

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
    "flex items-center justify-center cursor-pointer text-sm opacity-70 hover:opacity-100 px-4 py-2 bg-white dark:bg-gray-800 rounded-full"
  if (toggle && activeTags) {
    return (
      <TagContainer>
        {tags.map<JSX.Element>(tag => (
          <Tag
            active={activeTags.includes(tag)}
            onClick={() => toggle(tag)}
            key={tag}
          >
            #{tag}
          </Tag>
        ))}
      </TagContainer>
    )
  } else if (to) {
    return (
      <TagContainer>
        {tags.map<JSX.Element>(tag => (
          <LinkTag to={`/${to}?tags=${tag}`} key={tag}>
            #{tag}
          </LinkTag>
        ))}
      </TagContainer>
    )
  } else {
    return <></>
  }
}

// --- styled components ---
const TagContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`

const Tag = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: ${p => (p.active ? 1 : 0.7)};
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 9999px;
  box-shadow: ${p => (p.active ? `0px 0px 0px 1px var(--gray-400)` : "")};

  .dark & {
    background-color: var(--gray-800);
  }

  &:hover {
    opacity: 1;
  }
`

const LinkTag = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.7;
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 9999px;

  .dark & {
    background-color: var(--gray-800);
  }

  &:hover {
    opacity: 1;
  }
`
