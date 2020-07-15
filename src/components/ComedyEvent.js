import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import MapMarker from "./MapMarker"
import Facebook from "./Facebook"
import Instagram from "./Instagram"
import MetroM20px from "./MetroM20px"
import RERIcon from "./RERIcon"
import RER from "./RER"
import Metro from "./Metro"
import "./ComedyEvent.css"

export default function ComedyEvent({
  facebook,
  instagram,
  image,
  when,
  whenDetails,
  name,
  arrondissement,
  where,
  whereHref,
  metros,
  metro,
  lines,
  cancelled,
}) {
  return (
    <div
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

        ${cancelled
          ? `
          * {
            color: rgba(0, 0, 0, 0.3) !important;
          }
        `
          : ""}

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
      <div
        css={css`
          position: relative;
        `}
      >
        {cancelled && (
          <div
            css={css`
              position: absolute;
              width: 256px;
              height: 256px;
              background-color: rgba(255, 255, 255, 0.6);
              z-index: 1;
            `}
          />
        )}
        <Img
          fixed={image.childImageSharp.fixed}
          alt={name + " " + "logo"}
          css={css`
            margin-bottom: 16px;
            flex-shrink: 0;

            @media screen and (min-width: 528px) {
              margin-bottom: 0;
            }
          `}
        />
      </div>
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
        {whenDetails && (
        <h4
          css={css`
            font-size: 18px;
            line-height: 28px;
          `}
        >
          {whenDetails}
        </h4>
        )}
        <h4
          css={css`
            font-size: 32px;
            line-height: 36px;
            margin-top: 8px !important;
            margin-bottom: 24px !important;

            a {
              text-decoration: none;
              &:hover {
                text-decoration: ${facebook ? "underline" : "none"};
              }
            }
          `}
        >
          <OutboundLink
            href={facebook}
            rel="noopener noreferrer"
            target="_blank"
          >
            {name}
          </OutboundLink>
        </h4>
        <h4
          css={css`
            font-size: 18px;
            line-height: 28px;
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
          <OutboundLink
            href={whereHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MapMarker style={{ color: "rgba(0, 0, 0, 0.6)" }} />
            <span>{where}</span>
          </OutboundLink>
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
              <MetroStation {...metro} cancelled={cancelled} />
            ))}
          </div>
        ) : (
          <MetroStation name={metro} lines={lines} cancelled={cancelled} />
        )}
        <h4
          css={css`
            font-size: 18px;
            line-height: 28px;
          `}
        >
          {arrondissement}
          <sup>e</sup> arrondissement
        </h4>
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
    </div>
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
      <OutboundLink
        href={href}
        css={css`
          display: inline-flex;
          align-items: center;
          font-size: 18px;
          line-height: 28px;
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
      </OutboundLink>
    </h4>
  )
}

function MetroStation({ name, lines, cancelled, rers }) {
  return (
    <h4
      css={css`
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 28px;

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
        <MetroM20px cancelled={cancelled} />
        {lines.map(line => (
          <Metro line={line} cancelled={cancelled} />
        ))}
        {rers && (
          <>
            <RERIcon />
            {rers.map(line => (
              <RER line={line} />
            ))}
          </>
        )}
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

export function FrenchFriedComedy() {
  const images = useImages()
  return (
    <ComedyEvent
      facebook="https://www.facebook.com/FFComedy/"
      image={images.frenchFriedComedyNight}
      when="Tuesdays 11:00pm - 12:00am"
      name="French Fried Comedy Night"
      arrondissement={11}
      where="The Art Café Paname"
      whereHref="https://goo.gl/maps/M6ZqtvqtzPT1wzqo9"
      metro="République"
      lines={[3, 5, 8, 9, 11]}
    />
  )
}

export function WildOpenMic() {
  const images = useImages()
  return (
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
  )
}

export function GreatBritish() {
  const images = useImages()
  return (
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
  )
}

export function NewYorkComedyNight() {
  const images = useImages()
  return (
    <ComedyEvent
      facebook="https://www.facebook.com/NewYorkComedyNight/"
      image={images.theNewYorkComedyNight}
      when="Sundays 6:00pm - 7:30pm and 8:00pm - 9:30pm"
      name="The New York Comedy Night"
      arrondissement={18}
      where="Barbès Comedy Club"
      whereHref="https://goo.gl/maps/hQknbeoedkD54eFe6"
      metro="Château Rouge"
      lines={[4]}
    />
  )
}

export function OpenAirComedy() {
  const images = useImages()
  return (
    <ComedyEvent
      facebook="https://www.facebook.com/Open-Air-Comedy-112378913878838/"
      instagram="https://www.instagram.com/openaircomedy/"
      image={images.openAirComedy}
      when="Tuesdays 8:00pm - 9:30pm"
      name="Open Air Comedy"
      arrondissement={12}
      where="Le Mazette"
      whereHref="https://g.page/Le-Mazette?share"
      metros={[
        {
          name: "Gare de Lyon",
          lines: [1, 14],
          rers: ["A", "D"]
        }
      ]}
    />
  )
}

export function BrokenWord() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
      image={images.brokenWord}
      when="Mondays 8:00pm - 10:00pm starting Mar. 2 (no show Mar. 16)"
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
  )
}

export function ComedyTime() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
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
  )
}

export function FunnyMonk() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
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
  )
}

export function Coucou() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
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
  )
}

export function ComedyForBreakfast() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
      instagram="https://www.instagram.com/comedy_breakfast/"
      image={images.comedyForBreakfast}
      when="Every Other Tuesday 9:00pm - 12:00am"
      name="Comedy For Breakfast Variety Night"
      arrondissement={10}
      where="The Breakfast Club"
      whereHref="https://goo.gl/maps/Htw1rz2kH4Zr8Wda6"
      metro="Strasbourg Saint-Denis"
      lines={[4, 8, 9]}
    />
  )
}

export function ComedyLabWednesday() {
  const images = useImages()
  return (
    <ComedyEvent
      facebook="https://www.facebook.com/comedylabparis/"
      instagram="https://www.instagram.com/comedylabparis/"
      image={images.comedyLab}
      when="Wednesdays 8:00pm - 9:00pm"
      whenDetails="second show 9:00pm - 10:00pm if first show is over capacity"
      name="Comedy Lab"
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
  )
}

export function Croissant() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
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
  )
}

export function LibertyEgality() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
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
  )
}

export function ComedyLabFriday() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
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
  )
}

export function JokeOrCroak() {
  const images = useImages()
  return (
    <ComedyEvent
      cancelled
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

      openAirComedy: file(relativePath: { eq: "open-air-comedy.png" }) {
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
