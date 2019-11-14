import React from "react"
import Img from "gatsby-image"
import MapMarker from "./MapMarker"
import Facebook from "./Facebook"
import Instagram from "./Instagram"
import "./ComedyEvent.css"

export default function ComedyEvent({
  facebook,
  instagram,
  image,
  name,
  when,
  where,
  whereHref,
}) {
  return (
    <div className="ComedyEvent">
      <Img fixed={image.childImageSharp.fixed} className="ComedyEvent__Image" />
      <div className="ComedyEvent__Info">
        <h3>{name}</h3>
        <h4 className="ComedyEvent__When">{when}</h4>
        <h4 className="ComedyEvent__Where">
          <a href={whereHref} rel="noopener noreferrer" target="_blank">
            <MapMarker style={{ color: "rgba(0, 0, 0, 0.6)" }} />
            {where}
          </a>
        </h4>
        <div className="ComedyEvent__Social">
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
        </div>
      </div>
    </div>
  )
}
