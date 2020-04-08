import styled, { css } from "styled-components"
import { Link } from "gatsby"

/*
 ** Default styles
 */

const interactiveElementDefaults = () => css`
  transition: transform 0.3s ease-in-out;

  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.defaultSpacing};
  `};

  ${({ isHidden }) =>
    isHidden
      ? css`
          visibility: hidden;
          pointer-events: none;
        `
      : ""}

  &:hover {
    transform: scale(1.2);
  }
`

const textDefaults = () => css`
  margin: 0;
  color: ${({ theme }) => theme.primaryColor};
  letter-spacing: 1px;
`

/*
 ** Components
 */

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

export const Button = styled.button`
  ${interactiveElementDefaults()}
`

export const LinkStyled = styled(Link)`
  ${interactiveElementDefaults()}
`
