import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { useDarkLightProvider } from "../../utils/darkLight.provider"

import { H1 } from "../../styles/component.styles"
import {
  HeaderStyled,
  HeaderTitleStyled,
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
        <HeaderTitleStyled to="/">{siteTitle}</HeaderTitleStyled>
      </H1>
      <SwitchStyled>
        <SwitchInputStyled
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
