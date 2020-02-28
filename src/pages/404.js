import React, { Fragment } from "react"

import SEO from "../components/SEO/seo"

import { H1, P } from "../styles/component.styles"

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <H1>NOT FOUND</H1>
    <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
  </Fragment>
)

export default NotFoundPage
