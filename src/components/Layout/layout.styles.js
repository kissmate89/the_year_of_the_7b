import styled, { css } from "styled-components"

import InstaLogo from "../../images/instagram.svg"
import TwitterLogo from "../../images/twitter.svg"

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
    padding: ${theme.spacings.large} 0;
    margin: 0 ${theme.defaultSpacing};
    border-top: 1.5px solid ${theme.secondaryColor};

    @media screen and (min-width: 480px) {
      padding: ${theme.spacings.large};
    }
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: inline-flex;
  }

  & > div {
    display: flex;
  }
`

export const InstaLogoStyled = styled(InstaLogo)`
  height: 32px;
`

export const TwitterLogoStyled = styled(TwitterLogo)`
  height: 32px;
  margin-left: ${({ theme }) => theme.defaultSpacing};
`
