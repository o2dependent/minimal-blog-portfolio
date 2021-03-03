import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import colors from "../helpers/colors"

export default function PostCard({ post: { title, preview, slug }, toPage }) {
  return (
    <Card to={`/${toPage}/${slug}`}>
      <Title>{title}</Title>
      <Preview>{preview}</Preview>
      <ActionButton>Read More</ActionButton>
    </Card>
  )
}

// --- styled components ---
const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 0.75rem;
  background-color: ${colors.white};
  transition: box-shadow 250ms ease;

  .dark & {
    background-color: ${colors.gray[800]};
  }
`

const Title = styled.strong`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;

  ${Card}:hover &, ${Card}:focus & {
    color: ${colors.main.light};
  }

  .dark ${Card}:hover &,
  .dark ${Card}:focus & {
    color: ${colors.main.dark};
  }
`

const Preview = styled.p`
  margin: 0;
  flex-grow: 1;
`

const ActionButton = styled.p`
  margin: 0;
`
