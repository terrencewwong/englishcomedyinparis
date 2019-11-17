import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ComedyEvent from "../components/ComedyEvent"
import SEO from "../components/seo"
import Day from "../components/Day"

export default function IndexPage() {
  const images = useImages()
  return (
    <Layout>
      <SEO title="English Comedy in Paris" />
      <Day name="Monday" />
      <Day name="Tuesday">
        <ComedyEvent
          facebook="https://www.facebook.com/ComedyTimeBootlegBar/"
          image={images.comedyTime}
          name="Comedy Time"
          when="Tuesdays 7:00pm - 8:30pm"
          where="The Bootleg Bar"
          whereHref="https://goo.gl/maps/UHCmm5oLGAjNq7fT6"
          metro="Bastille"
          lines={[1, 5, 8]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/FFComedy/"
          image={images.frenchFriedComedyNight}
          name="French Fried Comedy Night"
          when="Tuesdays 9:15pm - 10:30pm"
          where="The Art Café Paname"
          whereHref="https://goo.gl/maps/M6ZqtvqtzPT1wzqo9"
          metro="République"
          lines={[3, 5, 8, 9, 11]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/coucoucomedy/"
          instagram="https://www.instagram.com/coucoucomedy/"
          image={images.coucouComedy}
          name="Coucou Comedy"
          when="Every 3rd Tuesday 8:30pm - 10:30pm"
          where="The Highlander Scottish Pub"
          whereHref="https://goo.gl/maps/X9kU4FwoMjiT19478"
          metro="Saint-Michel Notre-Dame"
          lines={[4]}
        />
      </Day>
      <Day name="Wednesday">
        <ComedyEvent
          facebook="https://www.facebook.com/comedylabparis/"
          instagram="https://www.instagram.com/comedylabparis/"
          image={images.comedyLab}
          name="Comedy Lab Open Mic"
          when="Wednesdays 8:30pm - 10:30pm"
          where="Au Chat Noir"
          whereHref="https://goo.gl/maps/87zK9ChdPyDr79gKA"
          metro="Parmentier"
          lines={[3]}
        />
      </Day>
      <Day name="Thursday">
        <ComedyEvent
          facebook="https://www.facebook.com/thecomedycroissant/"
          instagram="https://www.instagram.com/thecomedycroissant/"
          image={images.theComedyCroissant}
          name="The Comedy Croissant Open Mic"
          when="Thursdays 8:00pm - 10:00pm"
          where="Aux Chiffons"
          whereHref="https://goo.gl/maps/PHVLb5PFPoN5rcmw6"
          metro="Marcadet - Poissonniers"
          lines={[4, 12]}
        />
        <ComedyEvent
          image={images.oscarFunnyCrew}
          name="Oscar Funny Crew"
          when="Thursdays 9:30pm - 10:30pm"
          where="Café Oscar"
          whereHref="https://goo.gl/maps/cem3JcWbsjWxTnQN9"
          metro="Grands Boulevards"
          lines={[8, 9]}
        />
      </Day>
      <Day name="Friday">
        <ComedyEvent
          facebook="https://www.facebook.com/libertyegalitycomedy/"
          image={images.libertyEgalityComedy}
          name="Liberty Egality Comedy"
          when="Fridays 8:30pm - 10:00pm"
          where="The Bootleg Bar"
          whereHref="https://goo.gl/maps/UHCmm5oLGAjNq7fT6"
          metro="Bastille"
          lines={[1, 5, 8]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/comedylabparis/"
          instagram="https://www.instagram.com/comedylabparis/"
          image={images.comedyLab}
          name="Comedy Lab Comedy Show"
          when="Fridays 9:30pm - 11:00pm"
          where="Au Chat Noir"
          whereHref="https://goo.gl/maps/87zK9ChdPyDr79gKA"
          metro="Parmentier"
          lines={[3]}
        />
      </Day>
      <Day name="Saturday">
        <ComedyEvent
          facebook="https://www.facebook.com/thewildopenmic/"
          image={images.wildOpenMic}
          name="The Wild Open Mic"
          when="Saturdays 5:30pm - 6:30pm"
          where="Jardin Sauvage"
          whereHref="https://goo.gl/maps/3h46D6FzNkhveVxa6"
          metro="Gare d'Austerlitz"
          lines={[5, 10]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/marieconnollycomedy/"
          image={images.jokeOrCroak}
          name="Joke Or Croak"
          when="Every Other Saturday 6:00pm - 7:00pm"
          where="Le Sonart"
          whereHref="https://g.page/lesonartpigalle?share"
          metro="Pigalle"
          lines={[2, 12]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/GBACN/"
          image={images.theGreatBritishAmericanComedyNight}
          name="The Great British American Comedy Night"
          when="Saturdays 7:00pm - 8:30pm"
          where="Jardin Sauvage"
          whereHref="https://goo.gl/maps/3h46D6FzNkhveVxa6"
          metro="Gare d'Austerlitz"
          lines={[5, 10]}
        />
      </Day>
      <Day name="Sunday">
        <ComedyEvent
          facebook="https://www.facebook.com/NewYorkComedyNight/"
          image={images.theNewYorkComedyNight}
          name="The New York Comedy Night"
          when="Sundays 8:00pm - 9:30pm"
          where="Barbès Comedy Club"
          whereHref="https://goo.gl/maps/hQknbeoedkD54eFe6"
          metro="Château Rouge"
          lines={[4]}
        />
      </Day>
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

      oscarFunnyCrew: file(relativePath: { eq: "oscar-funny-crew.jpg" }) {
        ...imageFragment
      }

      theComedyCroissant: file(
        relativePath: { eq: "the-comedy-croissant.png" }
      ) {
        ...imageFragment
      }
    }

    fragment imageFragment on File {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
}
