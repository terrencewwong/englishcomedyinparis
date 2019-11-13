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
        name="Comedy Time"
        when="Tuesdays 7pm - 8:30pm"
        where="The Bootleg Bar"
        whereHref="https://goo.gl/maps/UHCmm5oLGAjNq7fT6"
      />
      <ComedyEvent
        href="https://www.facebook.com/FFComedy/"
        image={images.frenchFriedComedyNight}
        name="French Fried Comedy Night"
        when="Tuesdays 9:15pm - 10:30pm"
        where="The Art Café Paname"
        whereHref="https://goo.gl/maps/M6ZqtvqtzPT1wzqo9"
      />
      <ComedyEvent
        image={images.coucouComedy}
        name="Coucou Comedy"
        when="Every 3rd Tuesday 8:30pm - 10:30pm"
        where="The Highlander Scottish Pub"
        whereHref="https://goo.gl/maps/X9kU4FwoMjiT19478"
      />
      <h2>Wednesday</h2>
      <ComedyEvent
        href="https://www.facebook.com/comedylabparis/"
        image={images.comedyLab}
        name="Comedy Lab Open Mic"
        when="Wednesdays 8:30pm - 10:30pm"
        where="Au Chat Noir"
        whereHref="https://goo.gl/maps/87zK9ChdPyDr79gKA"
      />
      <h2>Thursday</h2>
      <p>No events</p>
      <h2>Friday</h2>
      <ComedyEvent
        href="https://www.facebook.com/libertyegalitycomedy/"
        image={images.libertyEgalityComedy}
        name="Liberty Egality Comedy"
        when="Fridays 8:30pm - 10:00pm"
        where="The Bootleg Bar"
        whereHref="https://goo.gl/maps/UHCmm5oLGAjNq7fT6"
      />
      <ComedyEvent
        href="https://www.facebook.com/comedylabparis/"
        image={images.comedyLab}
        name="Comedy Lab Comedy Show"
        when="Fridays 9:30pm - 11:00pm"
        where="Au Chat Noir"
        whereHref="https://goo.gl/maps/87zK9ChdPyDr79gKA"
      />
      <h2>Saturday</h2>
      <ComedyEvent
        href="https://www.facebook.com/thewildopenmic/"
        image={images.wildOpenMic}
        name="The Wild Open Mic"
        when="Saturdays 5:30pm - 6:30pm"
        where="Jardin Sauvage"
        whereHref="https://goo.gl/maps/3h46D6FzNkhveVxa6"
      />
      <ComedyEvent
        href="https://www.facebook.com/marieconnollycomedy/"
        image={images.jokeOrCroak}
        name="Joke Or Croak"
        when="Every Other Saturday 6:00pm - 7:00pm"
        where="Le Sonart"
        whereHref="https://g.page/lesonartpigalle?share"
      />
      <ComedyEvent
        href="https://www.facebook.com/GBACN/"
        image={images.theGreatBritishAmericanComedyNight}
        name="The Great British Americna Comedy Night"
        when="Saturdays 7:00pm - 8:30pm"
        where="Jardin Sauvage"
        whereHref="https://goo.gl/maps/3h46D6FzNkhveVxa6"
      />
      <h2>Sunday</h2>
      <ComedyEvent
        href="https://www.facebook.com/NewYorkComedyNight/"
        image={images.theNewYorkComedyNight}
        name="The New York Comedy Night"
        when="Sundays 8:00pm - 9:30pm"
        where="Barbès Comedy Club"
        whereHref="https://goo.gl/maps/hQknbeoedkD54eFe6"
      />
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
