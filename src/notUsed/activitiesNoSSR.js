import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { parseJSON, format, setSeconds, startOfDay } from "date-fns";
import stravaMockdata from "./stravaMockdata";

import SeoMeta from "../components/seo";

const callRefresh = `https://www.strava.com/oauth/token?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&refresh_token=${process.env.STRAVA_REFRESH_TOKEN}&grant_type=refresh_token`;
const callActivities = `https://www.strava.com/api/v3/athlete/activities?per_page=10&access_token=`;

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

const ActivitiesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState(stravaMockdata);

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token));
  }, []);

  // use current access token to call all activities
  function getActivities(access) {
    // console.log(callActivities + access)
    fetch(callActivities + access)
      .then((res) => res.json())
      .then(
        (data) => setActivities(data),
        setIsLoading((prev) => !prev)
      )
      .catch((e) => console.log(e));
  }

  return (
    <Fragment>
      <SeoMeta title="Activities" />
      <h2 className="text-center">Recent Activities ssss</h2>
      {isLoading ? (
        <h4>LOADING</h4>
      ) : (
        <ul className="space-y-3">
          {activities &&
            activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
        </ul>
      )}
    </Fragment>
  );
};

export default ActivitiesPage;
