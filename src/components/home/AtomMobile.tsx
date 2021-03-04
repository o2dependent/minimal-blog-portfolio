import React from "react"
import styled, { keyframes } from "styled-components"
import { T_Tags } from "../PostTags"
import SvgSwitch from "../SvgSwitch"

export default function AtomMobile() {
  const Tags: T_Tags[] = ["React", "CSS", "Gatsby", "Nextjs", "Node", "Git"]

  return (
    <AtomContainer>
      {Tags.map((svgName, idx) => (
        <TagContainer delay={idx * -1}>
          <SvgSwitch svgName={svgName} />
        </TagContainer>
      ))}
    </AtomContainer>
  )
}

// --- styled components ---
const AtomContainer = styled.div`
  height: 4rem;
  width: 100%;
  overflow: hidden;
  fill: currentColor;
  position: relative;
  color: var(--main);
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const TagScrollAnimation = keyframes`
  0% {
    left: -5rem;
  }
  100% {
    left: calc(5rem + 100%);
  }
`

const TagContainer = styled.div<{ delay: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: white;
  border-radius: 9999px;
  width: 3.5rem;
  height: 3.5rem;
  animation: ${TagScrollAnimation} 6s linear infinite;
  animation-delay: ${p => p.delay}s;

  .dark & {
    background-color: var(--gray-800);
  }
`
