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
    if (activity.distance === 0) return;
    let distance;

    switch (activity.sport_type) {
      case "Run":
      case "Ride":
      case "Walk":
      case "Hike":
      case "TrailRun":
      case "EBikeRide":
        distance = `${(activity.distance / 1_000).toFixed(2)}km`;
        break;
      default:
        distance = `${activity.distance}m`;
        break;
    }

    return <p>Distance: {distance}</p>;
  };

  return (
    <li className="p-4 shrink-0 border rounded border-gray-400 space-y-1">
      <p className="text-lg font-semibold">{activity.name}</p>
      <p className="text-sm">
        {format(parseJSON(activity.start_date_local), "d. MMM Y.")}
      </p>
      <p>
        Duration: <span>{getDuration()}</span>
      </p>

      {getDistance()}
      {!!activity.total_elevation_gain && activity.total_elevation_gain > 0 && (
        <p>Elevation: {activity?.total_elevation_gain}m</p>
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

      {/* <ul className="flex flex-wrap justify-between gap-4"> */}
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pageContext.activities &&
          pageContext.activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
      </ul>
    </Fragment>
  );
};

export default ActivitiesPage;
