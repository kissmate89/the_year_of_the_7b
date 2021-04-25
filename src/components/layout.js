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
      <main className="px-6 pt-4 flex-grow">{children}</main>
      <footer className="flex justify-between items-center py-6 mx-4 border-t border-gray-400">
        <p>
          &copy; {new Date().getFullYear()}
          {` `}
          <a
            href="https://www.linkedin.com/in/mate-kiss89/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kissmate89
          </a>
        </p>

        <a
          href="https://www.instagram.com/kissmate89/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaLogo className="h-8" />
        </a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
