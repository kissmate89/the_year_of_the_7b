import React, { Fragment } from "react"
import {
  LabelsWrapperStyled,
  ProgressBarWrapperStyled,
  ProgressBarStyled,
} from "./progressBar.styles"

const ProgressBar = ({ grades, currentGrade }) => {
  const progress = (grades.indexOf(currentGrade) + 1) * (100 / grades.length)
  return (
    <Fragment>
      <LabelsWrapperStyled width={progress}>
        <span>{grades[0]}</span>
        <span>{currentGrade}</span>
        <span>{grades[grades.length - 1]}</span>
      </LabelsWrapperStyled>
      <ProgressBarWrapperStyled>
        <ProgressBarStyled width={progress} />
      </ProgressBarWrapperStyled>
    </Fragment>
  )
}

export default ProgressBar
