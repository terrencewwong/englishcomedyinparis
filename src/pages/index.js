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
  DestinationStandUp,
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
      <Day name="Tue Jul 13 @ 7:30pm - 8:30pm">
        <DestinationStandUp eventLink="https://www.facebook.com/events/234445784779434/" />
      </Day>
      <Day name="Sat Jul 17 @ 7:00pm - 8:00pm">
        <GreatBritish eventLink="https://www.facebook.com/events/1771035223088669/" />
      </Day>
      <Day name="Sun Jul 18 @ 7:00pm - 8:30pm">
        <NewYorkComedyNight eventLink="https://www.facebook.com/events/173591721341719/" />
      </Day>
      <Day name="Tue Jul 20 @ 7:00pm - 8:00pm">
        <UnstableComedy eventLink="https://www.facebook.com/events/188013343275109" />
      </Day>
      <Day name="Tue Jul 20 @ 7:30pm - 8:30pm">
        <DestinationStandUp eventLink="https://www.facebook.com/events/234445778112768/" />
      </Day>
    </Layout>
  )
}
