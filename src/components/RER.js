import React from "react"
import RERA from "./RERA"
import RERD from "./RERD"

const rers= {
  A: RERA,
  D: RERD,
}

export default function RER({ line }) {
  const Component = rers[line]
  return <Component />
}
