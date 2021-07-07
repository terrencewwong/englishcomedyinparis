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
  ComedyCave,
  JuicyPunchline,
  ComedyFunhouse,
  UnstableComedy,
} from "../components/ComedyEvent"
import SEO from "../components/seo"
import Day from "../components/Day"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="English Comedy in Paris" />
      {/* <Day name="Featured Events">
      </Day> */}
      <h2>Upcoming Shows</h2>
      <Day name="Sat Jul 10 @ 7:00pm - 8:00pm">
        <GreatBritish eventLink="https://www.facebook.com/events/2489990127814170" />
      </Day>
      <Day name="Sun Jul 11 @ 7:00pm - 8:30pm">
        <NewYorkComedyNight eventLink="https://www.facebook.com/events/173591731341718/" />
      </Day>
    </Layout>
  )
}
