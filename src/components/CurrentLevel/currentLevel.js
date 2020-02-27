import React from "react"

import ProgressBar from "../ProgressBar/progressBar"

import { H3 } from "../../styles/component.styles"
import { CurrentLevelWrapperStyled } from "./currentLevel.styles"

const CurrentLevel = ({ boulderGrades, leadGrades }) => {
  return (
    <CurrentLevelWrapperStyled>
      <H3>Boulder</H3>
      <ProgressBar
        grades={boulderGrades.grades}
        currentGrade={boulderGrades.currentGrade}
      />
      <H3>Lead</H3>
      <ProgressBar
        grades={leadGrades.grades}
        currentGrade={leadGrades.currentGrade}
      />
    </CurrentLevelWrapperStyled>
  )
}

export default CurrentLevel
