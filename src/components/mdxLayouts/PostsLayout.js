import React from "react"
import styled from "styled-components"
import NavProtector from "../../components/navProtector"
import PostTags from "../../components/PostTags"
import SEO from "../../components/seo"
import colors from "../../helpers/colors"
import mixins from "../../helpers/mixins"

export default function PostsLayout({ children, pathContext }) {
  const { date, preview, tags, title } = pathContext.frontmatter
  const newDate = new Date(date).toDateString()
  return (
    <>
      <SEO title={title} description={preview} />
      <TextLayoutContainer>
        <NavProtector type="main" />
        <Title>{title}</Title>
        <SubContainer>
          <Sub>by Ethan Olsen</Sub>
          <Sub>{newDate}</Sub>
        </SubContainer>
        {tags && <PostTags to="posts" tags={tags} />}
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
export const TextLayoutContainer = styled.div`
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
    padding-bottom: 2rem;
  }
`

export const Title = styled.h1`
  margin-bottom: 1rem;
`

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Sub = styled.sub`
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
`

export const ArticleContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  background-color: ${colors.white};

  .dark & {
    background-color: ${colors.gray[800]};
  }
`

export const Article = styled.article`
  max-width: 48rem;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  & h1 {
    font-size: 2.25rem /* 36px */;
    line-height: 2.5rem /* 40px */;
  }
  & h2 {
    font-size: 1.875rem /* 30px */;
    line-height: 2.25rem /* 36px */;
  }
  & h3 {
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
  }
  & h4 {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
  }
  & pre {
    border-radius: 0.25rem;
  }
  & a {
    position: relative;
    &:hover::before {
      opacity: 0.75;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 2px;
      width: 100%;
      height: 2px;
      background-color: currentColor;
      opacity: 0.5;
    }
  }
  & img {
    border-radius: 0.25rem;
  }
`
