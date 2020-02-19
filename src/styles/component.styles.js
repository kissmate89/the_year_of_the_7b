import styled, { css } from "styled-components"

const textDefaults = () => css`
  margin: 0;
  color: ${({ theme }) => theme.primaryColor};
  letter-spacing: 1px;
`

export const H1 = styled.h1`
  ${textDefaults()};
  text-transform: uppercase;
  font-family: "Vollkorn";
`

export const H2 = styled.h2`
  ${textDefaults()};
  text-transform: uppercase;
  font-family: "Vollkorn";
`

export const H3 = styled.h3`
  ${textDefaults()}
  font-family: "Vollkorn";
`

export const P = styled.p`
  ${textDefaults()}
`
