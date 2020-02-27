import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { useDarkLightProvider } from "../../utils/darkLight.provider"

import { H1 } from "../../styles/component.styles"
import {
  HeaderStyled,
  HeaderTitleStyled,
  LogoStyled,
  TitleStyled,
  SwitchStyled,
  SwitchInputStyled,
  SliderStyled,
} from "./header.styles"

const Header = ({ siteTitle }) => {
  const { isDark, changeTheme } = useDarkLightProvider()
  const [isDarkChecked, setIsDarkChecked] = useState(isDark)

  useEffect(() => {
    setIsDarkChecked(isDark)
  }, [isDark])

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
      <SwitchStyled aria-label="theme switch" htmlFor="darkLightInput">
        <SwitchInputStyled
          id="darkLightInput"
          type="checkbox"
          onChange={handleSwitchChange}
          checked={isDarkChecked}
        />
        <SliderStyled />
      </SwitchStyled>
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
