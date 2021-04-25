import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

import SeoMeta from "../components/seo";
import CurrentLevel from "../components/currentLevel";
import PostList from "../components/postList";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulClimbingMainPage {
        nodes {
          title
          content {
            content
          }
          leadGrades {
            currentGrade
            grades
          }
          boulderGrades {
            currentGrade
            grades
          }
        }
      }
    }
  `);

  const mainData = data.allContentfulClimbingMainPage.nodes[0];

  return (
    <Fragment>
      <SeoMeta title={mainData.title} />
      <section className="mb-12">
        <h1 className="text-center mb-4">Welcome</h1>
        <p className="text-center">{mainData.content.content}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-center">Current level</h2>
        <CurrentLevel
          boulderGrades={mainData.boulderGrades}
          leadGrades={mainData.leadGrades}
        />
      </section>

      <section>
        <h2 className="text-center">Posts</h2>
        <PostList />
      </section>
    </Fragment>
  );
};

export default IndexPage;
