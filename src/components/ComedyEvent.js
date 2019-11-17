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
  metro,
  lines,
}) {
  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 16px;
        border: 1px solid rgba(0, 0, 0, 0.12);
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
    >
      <Img
        fixed={image.childImageSharp.fixed}
        css={css`
          margin-bottom: 16px;

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
          <span
            css={css`
              color: rgba(0, 0, 0, 0.6);
            `}
          >
            {metro}
          </span>
        </h4>
        {/* <div className="ComedyEvent__Social">
          {facebook && (
            <a href={facebook} rel="noopener noreferrer" target="_blank">
              <Facebook style={{ width: "24px", height: "24px" }} />
            </a>
          )}
          {instagram && (
            <a href={instagram} rel="noopener noreferrer" target="_blank">
              <Instagram style={{ width: "24px", height: "24px" }} />
            </a>
          )}
        </div> */}
      </div>
    </div>
  )
}
