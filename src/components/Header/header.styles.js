import styled, { css } from "styled-components"
import { Link } from "gatsby"

import Logo from "../../images/logo.svg"

export const HeaderStyled = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;
    margin: 0 ${theme.defaultSpacing} ${theme.spacings.large}
      ${theme.defaultSpacing};
    border-bottom: 1.5px solid ${theme.secondaryColor};
  `}
  display: flex;
  justify-content: space-between;
`

export const HeaderTitleStyled = styled(Link)`
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`

export const LogoStyled = styled(Logo)`
  width: 40px;
  margin-right: ${({ theme }) => theme.defaultSpacing};
  vertical-align: text-bottom;

  @media screen and (min-width: 480px) {
    vertical-align: middle;
  }
`

export const TitleStyled = styled.span`
  display: none;

  @media screen and (min-width: 480px) {
    display: initial;
  }
`

export const SwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: ${({ theme }) => theme.defaultSpacing};
  align-self: flex-end;

  @media screen and (min-width: 480px) {
    align-self: center;
  }
`

export const SliderStyled = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  min-width: 60px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

export const SwitchInputStyled = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SliderStyled} {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  &:focus + ${SliderStyled} {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:checked + ${SliderStyled}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

export const SwitchWrapperStyled = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 100%;
  background: ${({ theme }) =>
    `linear-gradient(40deg, ${theme.colors.tertiaryColor}, ${theme.colors.tertiaryHover} 70%)`};
`

export const SwitchCrecentStyled = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 0;
  border-radius: 100%;
  transform: ${({ isDark }) => (isDark ? "scale(1)" : "scale(0)")};
  transform-origin: top right;
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: ${({ theme }) => theme.colors.backgroundColor};
`
