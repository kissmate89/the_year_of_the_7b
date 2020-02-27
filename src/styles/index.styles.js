import styled from "styled-components"

import { H2, H3 } from "../styles/component.styles"

export const MainTextStyled = styled(H3)`
  margin-bottom: ${({ theme }) => theme.spacings.large};
  text-align: center;
`

export const TitleStyled = styled(H2)`
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  text-align: left;
`
