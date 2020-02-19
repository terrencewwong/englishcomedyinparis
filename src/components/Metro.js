import React from "react"
import Metro1 from "./Metro1"
import Metro2 from "./Metro2"
import Metro3 from "./Metro3"
import Metro4 from "./Metro4"
import Metro5 from "./Metro5"
import Metro6 from "./Metro6"
import Metro8 from "./Metro8"
import Metro9 from "./Metro9"
import Metro10 from "./Metro10"
import Metro11 from "./Metro11"
import Metro12 from "./Metro12"
import Metro13 from "./Metro13"

const metros = {
  1: <Metro1 />,
  2: <Metro2 />,
  3: <Metro3 />,
  4: <Metro4 />,
  5: <Metro5 />,
  6: <Metro6 />,
  8: <Metro8 />,
  9: <Metro9 />,
  10: <Metro10 />,
  11: <Metro11 />,
  12: <Metro12 />,
  13: <Metro13 />,
}

export default function Metro({ line }) {
  return metros[line]
}
