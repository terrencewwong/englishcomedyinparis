import React from "react"
import Img from "gatsby-image"

export function ComedyEvent({ href, image, name, when, where, whereHref }) {
  return (
    <>
      <div style={{ maxWidth: "300px" }}>
        <a href={href}>
          <Img fluid={image.childImageSharp.fluid} />
        </a>
      </div>
      <h3>{name}</h3>
      <h5>
        {when} at{" "}
        <a href={whereHref} target="_blank">
          {where}
        </a>
      </h5>
    </>
  )
}
