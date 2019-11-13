import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      comedyTime: file(relativePath: { eq: "comedy-time.jpg" }) {
        ...imageFragment
      }

      frenchFriedComedyNight: file(
        relativePath: { eq: "french-fried-comedy-night.jpg" }
      ) {
        ...imageFragment
      }

      jokeOrCroak: file(relativePath: { eq: "joke-or-croak.jpg" }) {
        ...imageFragment
      }

      libertyEgalityComedy: file(
        relativePath: { eq: "liberty-egality-comedy.jpg" }
      ) {
        ...imageFragment
      }

      theGreatBritishAmericanComedyNight: file(
        relativePath: { eq: "the-great-british-american-comedy-night.jpg" }
      ) {
        ...imageFragment
      }

      wildOpenMic: file(relativePath: { eq: "wild-open-mic.jpg" }) {
        ...imageFragment
      }

      comedyLab: file(relativePath: { eq: "comedy-lab.png" }) {
        ...imageFragment
      }

      coucouComedy: file(relativePath: { eq: "coucou-comedy.png" }) {
        ...imageFragment
      }

      theNewYorkComedyNight: file(
        relativePath: { eq: "the-new-york-comedy-night.png" }
      ) {
        ...imageFragment
      }
    }

    fragment imageFragment on File {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <>
      <ComedyEvent
        href="https://www.facebook.com/ComedyTimeBootlegBar/"
        image={data.comedyTime}
      />
      <ComedyEvent
        href="https://www.facebook.com/FFComedy/"
        image={data.frenchFriedComedyNight}
      />
      <ComedyEvent
        href="https://www.facebook.com/marieconnollycomedy/"
        image={data.jokeOrCroak}
      />
      <ComedyEvent image={data.libertyEgalityComedy} />
      <ComedyEvent
        href="https://www.facebook.com/GBACN/"
        image={data.theGreatBritishAmericanComedyNight}
      />
      <ComedyEvent
        href="https://www.facebook.com/thewildopenmic/"
        image={data.wildOpenMic}
      />
      <ComedyEvent
        href="https://www.facebook.com/comedylabparis/"
        image={data.comedyLab}
      />
      <ComedyEvent image={data.coucouComedy} />
      <ComedyEvent image={data.theNewYorkComedyNight} />
    </>
  )
}

export function ComedyEvent({ href, image }) {
  return (
    <div style={{ maxWidth: "300px" }}>
      <a href={href}>
        <Img fluid={image.childImageSharp.fluid} />
      </a>
    </div>
  )
}
