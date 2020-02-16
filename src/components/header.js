import React from "react"
import PropTypes from "prop-types"

import { H1 } from "../styles/component.styles"
import { HeaderStyled, HeaderTitleStyled } from "../styles/header.styles"

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <H1>
      <HeaderTitleStyled to="/">{siteTitle}</HeaderTitleStyled>
    </H1>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
