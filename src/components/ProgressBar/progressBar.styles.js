import styled, { keyframes } from "styled-components"

const moveWidth = keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${props => `${props.width}%`};
  }
`

export const LabelsWrapperStyled = styled.div`
  display: flex;
  color: ${({ theme }) => theme.primaryColor};

  & > span:first-of-type {
    flex-basis: ${props => `${props.width}%`};
  }

  & > span:nth-of-type(2) {
    flex-basis: ${props => `${100 - props.width}%`};
  }
`

export const ProgressBarWrapperStyled = styled.div`
  height: 22px;
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundColor};
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  padding: 3px 5px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  margin-bottom: ${({ theme }) => theme.defaultSpacing};
`

export const ProgressBarStyled = styled.span`
  display: block;
  height: 14px;
  animation: ${moveWidth} 0.5s ease-in-out 1s both;
  width: ${props => `${props.width}%`};

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  overflow: hidden;
`
