import React from "react"
import PropTypes from "prop-types"

import { useDarkLightProvider } from "../../utils/darkLight.provider"

import { H1 } from "../../styles/component.styles"
import {
  HeaderStyled,
  HeaderTitleStyled,
  LogoStyled,
  TitleStyled,
  SwitchWrapperStyled,
  SwitchCrecentStyled,
} from "./header.styles"

const Header = ({ siteTitle }) => {
  const { isDark, changeTheme } = useDarkLightProvider()

  const handleSwitchChange = () => {
    changeTheme(!isDark)
  }

  return (
    <HeaderStyled>
      <H1>
        <HeaderTitleStyled to="/">
          <LogoStyled alt="A logo showing a 7 and a B" />
          <TitleStyled>{siteTitle}</TitleStyled>
        </HeaderTitleStyled>
      </H1>
      <SwitchWrapperStyled isDark={isDark} onClick={handleSwitchChange}>
        <SwitchCrecentStyled isDark={isDark} />
      </SwitchWrapperStyled>
    </HeaderStyled>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
