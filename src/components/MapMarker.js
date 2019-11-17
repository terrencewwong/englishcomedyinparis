import React from "react"

export default function MapMarker(props) {
  return (
    <svg width={14} height={20} {...props}>
      <path fill="none" d="M-1-1h16v22H-1z" />
      <g>
        <path
          fill="currentColor"
          d="M7 4.5A2.5 2.5 0 0 1 9.5 7 2.5 2.5 0 0 1 7 9.5 2.5 2.5 0 0 1 4.5 7 2.5 2.5 0 0 1 7 4.5M7 0a7 7 0 0 1 7 7c0 5.25-7 13-7 13S0 12.25 0 7a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C12 10 12 8 12 7a5 5 0 0 0-5-5z"
        />
      </g>
    </svg>
  )
}
