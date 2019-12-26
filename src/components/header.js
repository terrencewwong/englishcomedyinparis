import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import React from "react"

const Header = ({ fluid, siteTitle }) => (
  <header
    css={css`
      background-color: #5499c7;
    `}
  >
    <div
      css={
        fluid
          ? css`
              padding: 1.45rem 1.0875rem;
            `
          : css`
              margin: 0 auto;
              max-width: 920px;
              padding: 1.45rem 1.0875rem;
            `
      }
    >
      <h1
        css={css`
          margin: 0;
        `}
      >
        <Link
          to="/"
          css={css`
            color: white;
            text-decoration: none;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        css={css`
          display: flex;
          margin-top: 16px;
          & > *:not(:last-child) {
            margin-right: 16px;
          }
        `}
      >
        <NavLink to="/map">Map</NavLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

function NavLink(props) {
  return (
    <Link
      css={css`
        color: white;
        text-decoration: none;
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          text-decoration: underline;
        }
      `}
      {...props}
    />
  )
}
