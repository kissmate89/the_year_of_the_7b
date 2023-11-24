import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const GradesList = ({ gradesList, discipline }) => (
  <ul className="flex items-center text-gray-800 dark:text-blue-50">
    {gradesList.grades.map((grade) => (
      <li
        key={`${discipline}-${grade}`}
        className={classnames("mr-4", {
          "w-8 h-8 text-lg text-center bg-gray-800 text-blue-50 rounded-full dark:bg-gray-50 dark:text-gray-800":
            grade === gradesList.currentGrade,
        })}
      >
        {grade}
      </li>
    ))}
  </ul>
);

const CurrentLevel = ({ boulderGrades, leadGrades }) => {
  return (
    <div className="max-w-4xl my-6 mx-auto grid gap-6 justify-center md:grid-cols-2 md:justify-between">
      <div>
        <h3>Boulder</h3>
        <GradesList gradesList={boulderGrades} discipline="boulder" />
      </div>
      <div className="md:flex md:flex-col md:justify-self-end">
        <h3>Lead</h3>
        <GradesList gradesList={leadGrades} discipline="lead" />
      </div>
    </div>
  );
};

const gradesShape = {
  grades: PropTypes.arrayOf(PropTypes.string),
  currentGrade: PropTypes.string,
};

CurrentLevel.propTypes = {
  boulderGrades: PropTypes.shape(gradesShape),
  leadGrades: PropTypes.shape(gradesShape),
};

export default CurrentLevel;
