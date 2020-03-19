import styled from "styled-components"
import Img from "gatsby-image"

import { H2 } from "../../styles/component.styles"

export const PostTitleStyled = styled(H2)`
  margin-bottom: ${({ theme }) => theme.spacings.large};
`

export const MarkDownWrapperStyled = styled.div`
  & > * {
    margin-bottom: ${({ theme }) => theme.defaultSpacing};
  }

  a {
    text-decoration: underline;
  }
`

export const PostImageGalleryStyled = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.defaultSpacing};

  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const PostImageStyled = styled(Img)`
  border-radius: 3px;
`
