import React from "react"
import Layout from "../components/layout"
import {
  FrenchFriedComedy,
  WildOpenMic,
  GreatBritish,
  NewYorkComedyNight,
  OpenAirComedy,
  ComedyLabWednesday,
  ComedyLabFriday,
} from "../components/ComedyEvent"
import SEO from "../components/seo"
import Day from "../components/Day"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="English Comedy in Paris" />
      {/* <Day name="Featured Events">
      </Day> */}
      <h3>Due to COVID many events are not running, but these events are!</h3>
      <Day name="Tuesday">
        <OpenAirComedy />
      </Day>
      <Day name="Wednesday">
        <ComedyLabWednesday />
      </Day>
      <Day name="Friday">
        <ComedyLabFriday />
      </Day>
      <Day name="Saturday">
        <WildOpenMic />
        <GreatBritish />
      </Day>
      <Day name="Sunday">
        <NewYorkComedyNight />
      </Day>
    </Layout>
  )
}
