import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const HeaderStyled = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} ${theme.defaultSpacing};
    margin: 0 ${theme.defaultSpacing} ${theme.spacings.large}
      ${theme.defaultSpacing};
    border-bottom: 1px solid ${theme.secondaryColor};
  `}
  text-align: center;
`

export const HeaderTitleStyled = styled(Link)`
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`
