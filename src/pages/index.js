import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { ComedyEvent } from "../components/image"
import SEO from "../components/seo"

export default function IndexPage() {
  const images = useImages()
  return (
    <Layout>
      <SEO title="English Comedy in Paris" />
      <h2>Monday</h2>
      <p>No events</p>
      <h2>Tuesday</h2>
      <ComedyEvent
        href="https://www.facebook.com/ComedyTimeBootlegBar/"
        image={images.comedyTime}
      />
      <ComedyEvent
        href="https://www.facebook.com/FFComedy/"
        image={images.frenchFriedComedyNight}
      />
      <ComedyEvent image={images.coucouComedy} />
      <h2>Wednesday</h2>
      <ComedyEvent
        href="https://www.facebook.com/comedylabparis/"
        image={images.comedyLab}
      />
      <h2>Thursday</h2>
      <p>No events</p>
      <h2>Friday</h2>
      <ComedyEvent image={images.libertyEgalityComedy} />
      <ComedyEvent
        href="https://www.facebook.com/comedylabparis/"
        image={images.comedyLab}
      />
      <h2>Saturday</h2>
      <ComedyEvent
        href="https://www.facebook.com/thewildopenmic/"
        image={images.wildOpenMic}
      />
      <ComedyEvent
        href="https://www.facebook.com/marieconnollycomedy/"
        image={images.jokeOrCroak}
      />
      <ComedyEvent
        href="https://www.facebook.com/GBACN/"
        image={images.theGreatBritishAmericanComedyNight}
      />
      <h2>Sunday</h2>
      <ComedyEvent image={images.theNewYorkComedyNight} />
    </Layout>
  )
}

function useImages() {
  return useStaticQuery(graphql`
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
}
