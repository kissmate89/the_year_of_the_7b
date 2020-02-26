import styled, { css } from "styled-components"
import { Link } from "gatsby"

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
