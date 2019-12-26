import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default function MapPage() {
  return (
    <Layout fluid>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1w1nSWwNUumetQ0-gioxCMX7vtZO5vgE1&hl=en"
        title="English Comedy in Paris Map"
        css={css`
          width: 100vw;
          height: 100vh;
        `}
      />
    </Layout>
  )
}
