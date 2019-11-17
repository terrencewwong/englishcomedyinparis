import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import MapMarker from "./MapMarker"
import Facebook from "./Facebook"
import Instagram from "./Instagram"
import MetroM20px from "./MetroM20px"
import Metro from "./Metro"
import "./ComedyEvent.css"

export default function ComedyEvent({
  facebook,
  instagram,
  image,
  when,
  name,
  arrondissement,
  where,
  whereHref,
  metros,
  metro,
  lines,
}) {
  return (
    <a
      css={css`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 16px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        text-decoration: none;

        @media screen and (min-width: 528px) {
          flex-direction: row;
        }
        &:not(:first-child) {
          border-top: none;
        }

        h3,
        h4 {
          color: rgba(0, 0, 0, 0.6);
          font-family: Raleway, sans-serif;
          margin: 0;
        }
      `}
      rel="noopener noreferrer"
      target="_blank"
      href={facebook}
    >
      <Img
        fixed={image.childImageSharp.fixed}
        css={css`
          margin-bottom: 16px;
          flex-shrink: 0;

          @media screen and (min-width: 528px) {
            margin-bottom: 0;
          }
        `}
      />
      <div
        css={css`
          @media screen and (min-width: 528px) {
            margin-left: 16px;
          }
        `}
      >
        <h3
          css={css`
            color: rgba(0, 0, 0, 0.6);
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
          `}
        >
          {when}
        </h3>
        <h4
          css={css`
            font-size: 32px;
            line-height: 48px;

            &:hover {
              text-decoration: ${facebook ? "underline" : "none"};
            }
          `}
        >
          {name}
        </h4>
        <h4
          css={css`
            margin-top: 16px !important;
            font-size: 16px;
            line-height: 16px;
            display: inline-block;
            /* background-color: #a9cce3; */
            background-color: #eaf2f8;
            padding: 4px 8px;
            border-radius: 16px;
          `}
        >
          {arrondissement}
          <sup>e</sup> arrondissement
        </h4>
        <h4
          css={css`
            height: 48px;
            font-size: 20px;
            line-height: 48px;
            & > a {
              display: inline-flex;
              align-items: center;

              &:hover {
                color: rgba(0, 0, 0, 0.4);
              }
            }

            & > a > span {
              margin-left: 8px;
            }
          `}
        >
          <a href={whereHref} rel="noopener noreferrer" target="_blank">
            <MapMarker style={{ color: "rgba(0, 0, 0, 0.6)" }} />
            <span>{where}</span>
          </a>
        </h4>
        {metros ? (
          <div
            css={css`
              & > *:not(:last-child) {
                margin-bottom: 4px;
              }
            `}
          >
            {metros.map(metro => (
              <MetroStation {...metro} />
            ))}
          </div>
        ) : (
          <MetroStation name={metro} lines={lines} />
        )}
        <div
          css={css`
            margin-top: 16px;
            display: flex;
            & > *:not(:last-child) {
              margin-right: 16px;
            }
          `}
        >
          {facebook && <Social.Facebook href={facebook} />}
          {instagram && <Social.Instagram href={instagram} />}
        </div>
      </div>
    </a>
  )
}

Social.Facebook = function SocialFacebook({ href }) {
  return <Social href={href} name="Facebook" Icon={Facebook} />
}
Social.Instagram = function SocialInstagram({ href }) {
  return <Social href={href} name="Instagram" Icon={Instagram} />
}
function Social({ href, name, Icon }) {
  return (
    <h4>
      <a
        href={href}
        css={css`
          display: inline-flex;
          align-items: center;
          font-size: 15px;
          line-height: 48px;
          text-decoration: none;

          & > span {
            margin-left: 4px;
          }

          &:hover {
            color: rgba(0, 0, 0, 0.4);
          }
        `}
      >
        <Icon />
        <span>{name}</span>
      </a>
    </h4>
  )
}

function MetroStation({ name, lines }) {
  return (
    <h4
      css={css`
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 20px;

        & > *:first-child {
          margin-right: 8px;
        }
      `}
    >
      <div
        css={css`
          height: 20px;
          & > *:not(:last-child) {
            margin-right: 4px;
          }
        `}
      >
        <MetroM20px />
        {lines.map(line => (
          <Metro line={line} />
        ))}
      </div>
      <div
        css={css`
          color: rgba(0, 0, 0, 0.6);
        `}
      >
        {name}
      </div>
    </h4>
  )
}
