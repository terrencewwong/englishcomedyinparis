import React from "react"

const SvgMetro14 = ({ cancelled, ...props }) => (
  <svg width={20} height={20} fill="none" {...props}>
    <path
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
      fill={`rgba(100, 0, 130, ${cancelled ? 0.4 : 1})`}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.324 13.277v-1.72h-1.36V4.532h-2.816l-4.286 6.695v2.05h4.974v2.298h2.127v-2.299h1.361zm-3.488-1.72h-3.081l2.252-3.536c.438-.688.751-1.36.798-1.548h.031v5.083zM7.651 15.576V4.534H5.727c-.5.392-1.69 1.127-2.972 1.737l-.672.312.75 1.69.58-.297c.406-.204 1.516-.783 1.892-1.08v8.681h2.346z"
      fill="#fff"
    />
  </svg>
)

export default SvgMetro14
