import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import {
  FrenchFriedComedy,
  WildOpenMic,
  GreatBritish,
  NewYorkComedyNight,
  BrokenWord,
  ComedyLabWednesday,
  ComedyLabFriday,
  LibertyEgality,
  JokeOrCroak,
  ComedyTime,
  FunnyMonk,
  Coucou,
  ComedyForBreakfast,
  Croissant,
  OpenAirComedy,
} from "../components/ComedyEvent"
import SEO from "../components/seo"
import Day from "../components/Day"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="English Comedy in Paris" />
      {/* <Day name="Featured Events">
      </Day> */}
      <h3
        css={css`
          line-height: 1.5;
        `}
      >
        This list includes all English comedy events in Paris, even those
        cancelled due to COVID. Check out our <Link href="/">homepage</Link> to
        see only the active events.
      </h3>
      <Day name="Monday">
        <BrokenWord />
      </Day>
      <Day name="Tuesday">
        <ComedyTime />
        <FunnyMonk />
        <FrenchFriedComedy />
        <Coucou />
        <ComedyForBreakfast />
      </Day>
      <Day name="Wednesday">
        <ComedyLabWednesday />
      </Day>
      <Day name="Thursday">
        <Croissant />
        <OpenAirComedy />
      </Day>
      <Day name="Friday">
        <LibertyEgality />
        <ComedyLabFriday />
      </Day>
      <Day name="Saturday">
        <WildOpenMic />
        <JokeOrCroak />
        <GreatBritish />
      </Day>
      <Day name="Sunday">
        <NewYorkComedyNight />
      </Day>
    </Layout>
  )
}
