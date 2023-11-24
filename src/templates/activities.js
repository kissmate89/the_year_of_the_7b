import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { parseJSON, format, setSeconds, startOfDay } from "date-fns";

import SeoMeta from "../components/seo";

const ActivityItem = ({ activity }) => {
  const getDuration = () => {
    return format(
      setSeconds(startOfDay(Date.now()), activity.moving_time),
      "H:mm:ss"
    );
  };

  const getDistance = () => {
    switch (activity.sport_type) {
      case "Run":
      case "Ride":
      case "Walk":
      case "Hike":
      case "TrailRun":
      case "EBikeRide":
        return `${(activity.distance / 1_000).toFixed(2)}km`;
      default:
        return `${activity.distance}m`;
    }
  };

  return (
    <li className="">
      <p className="text-lg font-semibold">{activity.name}</p>
      <p className="text-sm">
        {format(parseJSON(activity.start_date_local), "Y. MMM d. HH:mm")}
      </p>
      <p>
        Duration: <span>{getDuration()}</span>
      </p>

      {activity.sport_type !== "RockClimbing" && (
        <p>Distance: {getDistance()}</p>
      )}
      <a
        href={`https://www.strava.com/activities/${activity.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        See on Strava
      </a>
    </li>
  );
};

ActivityItem.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    distance: PropTypes.number,
    moving_time: PropTypes.number,
    elapsed_time: PropTypes.number,
    total_elevation_gain: PropTypes.number,
    sport_type: PropTypes.string,
    start_date_local: PropTypes.string,
    average_speed: PropTypes.number,
  }).isRequired,
};

const ActivitiesPage = ({ pageContext }) => {
  return (
    <Fragment>
      <SeoMeta title="Activities" />
      <h2 className="text-center">Recent Activities</h2>

      <ul className="space-y-3">
        {pageContext.activities &&
          pageContext.activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
      </ul>
    </Fragment>
  );
};

export default ActivitiesPage;
