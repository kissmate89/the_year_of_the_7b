import styled, { css } from "styled-components"

import { H3 } from "../styles/component.styles"

export const MainTextStyled = styled(H3)`
  ${({ theme }) =>
    css`
      margin-bottom: calc(${theme.spacings.large} * 2);
    `};

  text-align: center;
`
