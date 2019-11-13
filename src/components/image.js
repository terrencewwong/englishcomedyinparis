import React from "react"
import Img from "gatsby-image"

export function ComedyEvent({ href, image, name, when, where, whereHref }) {
  return (
    <div style={{ maxWidth: "300px" }}>
      <a href={href}>
        <Img fixed={image.childImageSharp.fixed} />
      </a>
      <h3>{name}</h3>
      <h4>{when}</h4>
      <h4>
        <a href={whereHref} target="_blank">
          {where}
        </a>
      </h4>
    </div>
  )
}
