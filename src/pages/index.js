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
      <Day name="Featured Events">
        <ComedyEvent
          facebook="https://www.facebook.com/events/3216911261713011/"
          instagram="https://www.instagram.com/festivaldhumourdeparis/"
          image={images.greenCard}
          when="Saturday 8:00pm Mar. 14"
          name="Green Card"
          arrondissement={15}
          where="Le Grand Point Virgule"
          whereHref="https://goo.gl/maps/auYup2EpPtRoiSZv7"
          metros={[
            {
              name: "Montparnesse",
              lines: [4, 6, 12, 13],
            },
          ]}
        />
      </Day>
      <Day name="Monday">
        <ComedyEvent
          image={images.brokenWord}
          when="Mondays 8:00pm - 10:00pm starting Mar. 2"
          name="Broken Word"
          arrondissement={20}
          where="Culture Rapide"
          whereHref="https://goo.gl/maps/LKG8WSM2XNg9ts3W6"
          metros={[
            {
              name: "Belleville",
              lines: [2],
            },
            {
              name: "Pyrénées",
              lines: [11],
            },
          ]}
        />
      </Day>
      <Day name="Tuesday">
        <ComedyEvent
          facebook="https://www.facebook.com/ComedyTimeBootlegBar/"
          image={images.comedyTime}
          when="Tuesdays 7:00pm - 8:30pm"
          name="Comedy Time"
          arrondissement={11}
          where="The Bootleg Bar"
          whereHref="https://goo.gl/maps/UHCmm5oLGAjNq7fT6"
          metro="Bastille"
          lines={[1, 5, 8]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/funnymonkParis/"
          instagram="https://www.instagram.com/funnymonkparis/"
          image={images.funnyMonkComedyShow}
          when="Tuesdays 8:00pm - 10:00pm"
          name="Funny Monk Comedy Show"
          arrondissement={5}
          where="Monk La Taverne de Cluny"
          whereHref="https://goo.gl/maps/B7shTfM4y5FyFaTj9"
          metros={[
            {
              name: "Saint-Michel Notre-Dame",
              lines: [4],
            },
            {
              name: "Cluny - La Sorbonne",
              lines: [10],
            },
          ]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/FFComedy/"
          image={images.frenchFriedComedyNight}
          when="Tuesdays 9:15pm - 10:30pm"
          name="French Fried Comedy Night"
          arrondissement={11}
          where="The Art Café Paname"
          whereHref="https://goo.gl/maps/M6ZqtvqtzPT1wzqo9"
          metro="République"
          lines={[3, 5, 8, 9, 11]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/coucoucomedy/"
          instagram="https://www.instagram.com/coucoucomedy/"
          image={images.coucouComedy}
          when="Every 3rd Tuesday 8:30pm - 10:30pm"
          name="Coucou Comedy"
          arrondissement={6}
          where="The Highlander Scottish Pub"
          whereHref="https://goo.gl/maps/X9kU4FwoMjiT19478"
          metro="Saint-Michel Notre-Dame"
          lines={[4]}
        />
        <ComedyEvent
          instagram="https://www.instagram.com/comedy_breakfast/"
          image={images.comedyForBreakfast}
          when="Tuesdays 9:00pm - 12:00am starting Feb. 25"
          name="Comedy For Breakfast Variety Night"
          arrondissement={10}
          where="The Breakfast Club"
          whereHref="https://goo.gl/maps/Htw1rz2kH4Zr8Wda6"
          metro="Strasbourg Saint-Denis"
          lines={[4, 8, 9]}
        />
      </Day>
      <Day name="Wednesday">
        <ComedyEvent
          facebook="https://www.facebook.com/comedylabparis/"
          instagram="https://www.instagram.com/comedylabparis/"
          image={images.comedyLab}
          when="Wednesdays 8:30pm - 10:30pm"
          name="Comedy Lab Open Mic"
          arrondissement={11}
          where="Au Chat Noir"
          whereHref="https://goo.gl/maps/87zK9ChdPyDr79gKA"
          metros={[
            {
              name: "Parmentier",
              lines: [3],
            },
            {
              name: "Couronnes",
              lines: [2],
            },
            {
              name: "Oberkampf",
              lines: [5, 9],
            },
          ]}
        />
      </Day>
      <Day name="Thursday">
        <ComedyEvent
          facebook="https://www.facebook.com/thecomedycroissant/"
          instagram="https://www.instagram.com/thecomedycroissant/"
          image={images.theComedyCroissant}
          when="Every Other Thursday 8:00pm - 10:00pm"
          name="The Comedy Croissant Open Mic"
          arrondissement={18}
          where={<>Aux&nbsp;Chiffons</>}
          whereHref="https://goo.gl/maps/PHVLb5PFPoN5rcmw6"
          metro="Marcadet - Poissonniers"
          lines={[4, 12]}
        />
      </Day>
      <Day name="Friday">
        <ComedyEvent
          facebook="https://www.facebook.com/libertyegalitycomedy/"
          image={images.libertyEgalityComedy}
          when="Fridays 8:30pm - 10:00pm"
          name="Liberty Egality Comedy"
          arrondissement={11}
          where="The Bootleg Bar"
          whereHref="https://goo.gl/maps/UHCmm5oLGAjNq7fT6"
          metro="Bastille"
          lines={[1, 5, 8]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/comedylabparis/"
          instagram="https://www.instagram.com/comedylabparis/"
          image={images.comedyLab}
          when="Fridays 9:30pm - 11:00pm"
          name="Comedy Lab Comedy Show"
          arrondissement={11}
          where="Au Chat Noir"
          whereHref="https://goo.gl/maps/87zK9ChdPyDr79gKA"
          metros={[
            {
              name: "Parmentier",
              lines: [3],
            },
            {
              name: "Couronnes",
              lines: [2],
            },
            {
              name: "Oberkampf",
              lines: [5, 9],
            },
          ]}
        />
      </Day>
      <Day name="Saturday">
        <ComedyEvent
          facebook="https://www.facebook.com/wildopenmic/"
          image={images.wildOpenMic}
          when="Saturdays 5:30pm - 6:30pm"
          name="The Wild Open Mic"
          arrondissement={13}
          where="Jardin Sauvage"
          whereHref="https://goo.gl/maps/3h46D6FzNkhveVxa6"
          metro="Gare d'Austerlitz"
          lines={[5, 10]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/marieconnollycomedy/"
          image={images.jokeOrCroak}
          when="Every Other Saturday 6:00pm - 7:00pm"
          name="Joke Or Croak"
          arrondissement={9}
          where="Le Sonart"
          whereHref="https://g.page/lesonartpigalle?share"
          metro="Pigalle"
          lines={[2, 12]}
        />
        <ComedyEvent
          facebook="https://www.facebook.com/GBACN/"
          image={images.theGreatBritishAmericanComedyNight}
          when="Saturdays 7:00pm - 8:30pm"
          name="Great British American Comedy Night"
          arrondissement={13}
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
          when="Sundays 8:00pm - 9:30pm"
          name="The New York Comedy Night"
          arrondissement={18}
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

      wildOpenMic: file(relativePath: { eq: "wild-open-mic.png" }) {
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

      theComedyCroissant: file(
        relativePath: { eq: "the-comedy-croissant.png" }
      ) {
        ...imageFragment
      }

      funnyMonkComedyShow: file(
        relativePath: { eq: "funny-monk-comedy-show.png" }
      ) {
        ...imageFragment
      }

      comedyForBreakfast: file(
        relativePath: { eq: "comedy-for-breakfast.jpg" }
      ) {
        ...imageFragment
      }

      brokenWord: file(relativePath: { eq: "broken-word.png" }) {
        ...imageFragment
      }

      greenCard: file(relativePath: { eq: "green-card.jpg" }) {
        ...imageFragment
      }
    }

    fragment imageFragment on File {
      childImageSharp {
        fixed(width: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
}
