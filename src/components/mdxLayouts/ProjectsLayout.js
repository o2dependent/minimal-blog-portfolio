import React from "react"
import styled from "styled-components"
import NavProtector from "../../components/navProtector"
import PostTags from "../../components/PostTags"
import SEO from "../../components/seo"
import {
  Article,
  ArticleContainer,
  Sub,
  SubContainer,
  TextLayoutContainer,
  Title,
} from "./PostsLayout"

export default function PostsLayout({ children, pathContext }) {
  const { date, preview, tags, title, link } = pathContext.frontmatter
  const newDate = new Date(date).toDateString()
  return (
    <>
      <SEO title={title} description={preview} />
      <TextLayoutContainer>
        <NavProtector type="main" />
        <ProjectLink href={link}>
          <ProjectTitle>{title}</ProjectTitle>
        </ProjectLink>
        <SubContainer>
          <Sub>by Ethan Olsen</Sub>
          <Sub>{newDate}</Sub>
        </SubContainer>
        {tags && <PostTags to="projects" tags={tags} />}
      </TextLayoutContainer>
      <ArticleContainer>
        <NavProtector type="accent" />
        <Article>
          <p>{preview}</p>
          {children}
        </Article>
      </ArticleContainer>
    </>
  )
}

// --- styled components ---
const ProjectTitle = styled.h1`
  position: relative;
  width: max-content;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    opacity: 0.5;
    transform-origin: top;
    transition: height 250ms ease, opacity 250ms ease, bottom 250ms ease;
  }

  &:hover::before {
    opacity: 0.75;
    height: 5px;
    bottom: -3px;
  }
`

const ProjectLink = styled.a`
  width: max-content;
`
