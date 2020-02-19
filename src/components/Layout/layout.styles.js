import styled, { css } from "styled-components"

export const LayoutWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 960px;
  margin: auto;
`

export const MainStyled = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem 1.2rem;
  flex-grow: 1;
`
export const FooterWrapperStyled = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    margin: 0 ${theme.defaultSpacing};
    border-top: 1.5px solid ${theme.secondaryColor};
  `}

  text-align: center;
`
