import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

import InstaLogo from "../images/instagram.svg";

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="min-h-screen flex flex-col max-w-screen-lg mx-auto">
      <Header siteTitle={site.siteMetadata.title} />
      <main className="px-6 pt-4 space-y-6 flex-grow">{children}</main>
      <footer className="flex justify-between items-center py-6 mt-6 mx-4 border-t border-gray-400">
        <p>
          &copy; {new Date().getFullYear()}
          {` `}
          <a
            href="https://www.linkedin.com/in/mate-kiss89/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            @kissmate89
          </a>
        </p>

        <div className="flex space-x-3">
          <a
            href="https://strava.com/athletes/34057799"
            className="strava-badge- strava-badge-follow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Strava"
          >
            <img src="//badges.strava.com/echelon-sprite-32.png" alt="Strava" />
          </a>
          <a
            href="https://www.instagram.com/kissmate89/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstaLogo className="h-8" />
          </a>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
