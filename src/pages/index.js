import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import CurrentLevel from "../components/CurrentLevel/currentLevel"
import PostList from "../components/PostList/postList"

import { MainTextStyled, TitleStyled } from "../styles/index.styles"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const mainData = data.allContentfulClimbingMainPage.nodes[0]

      return (
        <Layout>
          <SEO title={mainData.title} />
          <MainTextStyled>{mainData.content.content}</MainTextStyled>
          <TitleStyled>Current level</TitleStyled>
          <CurrentLevel
            boulderGrades={mainData.boulderGrades}
            leadGrades={mainData.leadGrades}
          />
          <TitleStyled>Posts</TitleStyled>
          <PostList />
        </Layout>
      )
    }}
  />
)

export default IndexPage
