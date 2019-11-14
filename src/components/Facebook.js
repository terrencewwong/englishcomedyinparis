import React from "react"

export default function Facebook(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      {...props}
      style={{
        width: "1em",
        height: "1em",
        ...(props.style || {}),
      }}
    >
      <path
        fill="currentColor"
        d="M17 2v4h-2c-.69 0-1 .81-1 1.5V10h3v4h-3v8h-4v-8H7v-4h3V6a4 4 0 0 1 4-4h3z"
      />
    </svg>
  )
}
