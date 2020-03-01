import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"

import { P } from "../../styles/component.styles"
import {
  LayoutWrapperStyled,
  MainStyled,
  FooterWrapperStyled,
} from "./layout.styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapperStyled>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainStyled>{children}</MainStyled>
      <FooterWrapperStyled>
        <P>
          &copy; {new Date().getFullYear()}
          {` `}
          <a
            href="https://www.linkedin.com/in/mate-kiss89/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @matekiss89
          </a>
        </P>
      </FooterWrapperStyled>
    </LayoutWrapperStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
