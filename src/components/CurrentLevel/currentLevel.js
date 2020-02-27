import React from "react"

import ProgressBar from "../ProgressBar/progressBar"

import { H3 } from "../../styles/component.styles"
import { CurrentLevelWrapperStyled } from "./currentLevel.styles"

const CurrentLevel = ({}) => {
  return (
    <CurrentLevelWrapperStyled>
      <H3>Boulder</H3>
      <ProgressBar
        grades={["6a", "6a+", "6b", "6b+", "6c", "6c+", "7a", "7a+", "7b"]}
        currentGrade="6c+"
      />
      <H3>Lead</H3>
      <ProgressBar
        grades={["6a", "6a+", "6b", "6b+", "6c", "6c+", "7a", "7a+", "7b"]}
        currentGrade="6c"
      />
    </CurrentLevelWrapperStyled>
  )
}

export default CurrentLevel
