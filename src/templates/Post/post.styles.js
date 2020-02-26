import styled from "styled-components"

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
