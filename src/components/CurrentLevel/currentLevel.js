import React from "react"
import PropTypes from "prop-types"

import ProgressBar from "../ProgressBar/progressBar"

import { H3 } from "../../styles/component.styles"
import { CurrentLevelWrapperStyled } from "./currentLevel.styles"

const CurrentLevel = ({ boulderGrades, leadGrades }) => {
  return (
    <CurrentLevelWrapperStyled>
      <div>
        <H3>Boulder</H3>
        <ProgressBar
          grades={boulderGrades.grades}
          currentGrade={boulderGrades.currentGrade}
        />
      </div>
      <div>
        <H3>Lead</H3>
        <ProgressBar
          grades={leadGrades.grades}
          currentGrade={leadGrades.currentGrade}
        />
      </div>
    </CurrentLevelWrapperStyled>
  )
}

const gradesShape = {
  grades: PropTypes.arrayOf(PropTypes.string),
  currentGrade: PropTypes.string,
}

CurrentLevel.propTypes = {
  boulderGrades: PropTypes.shape(gradesShape),
  leadGrades: PropTypes.shape(gradesShape),
}

export default CurrentLevel
