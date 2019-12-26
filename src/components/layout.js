/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ fluid, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header fluid={fluid} siteTitle={data.site.siteMetadata.title} />
      <div
        css={
          fluid
            ? ""
            : css`
                margin: 0 auto;
                margin-top: 1.45rem;
                max-width: 920px;
                padding: 0px 1.0875rem 1.45rem;
                padding-top: 0;
              `
        }
      >
        <main>{children}</main>
        <footer>{/* TODO: add a footer */}</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
