import styled, { css } from "styled-components"

const headerDefaults = props => css`
  margin: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryColor};
`

export const H1 = styled.h1`
  ${headerDefaults()}
`

export const H2 = styled.h2`
  ${headerDefaults()}
`
