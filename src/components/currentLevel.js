import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const CurrentLevel = ({ boulderGrades, leadGrades }) => {
  return (
    <div className="max-w-4xl my-6 mx-auto grid gap-6 justify-center md:grid-cols-2 md:justify-between">
      <div>
        <h3>Boulder</h3>
        <ul className="flex text-gray-800 dark:text-blue-50">
          {boulderGrades.grades.map((grade) => (
            <li
              key={`boulder-${grade}`}
              className={classnames("mr-4", {
                "text-lg font-bold text-red-800 dark:text-blue-200":
                  grade === boulderGrades.currentGrade,
              })}
            >
              {grade}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex md:flex-col md:justify-self-end">
        <h3>Lead</h3>
        <ul className="flex text-gray-800 dark:text-blue-50">
          {leadGrades.grades.map((grade) => (
            <li
              key={`lead-${grade}`}
              className={classnames("mr-4", {
                "text-lg font-bold text-red-800 dark:text-blue-200":
                  grade === leadGrades.currentGrade,
              })}
            >
              {grade}
            </li>
          ))}
        </ul>
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
