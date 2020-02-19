import React from "react"

function SvgMetro13(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
        fill="#82C8E6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.768 15.576V4.534H5.845c-.501.392-1.69 1.127-2.972 1.737l-.673.312.75 1.69.58-.297c.407-.204 1.517-.783 1.892-1.08v8.682h2.346zM16.785 12.307c0-1.548-.923-2.455-2.143-2.69v-.032c1.173-.438 1.783-1.313 1.783-2.455 0-1.47-1.283-2.785-3.535-2.785-1.299 0-2.362.36-3.316.986l.766 1.626c.36-.312 1.033-.797 2.05-.797 1.157 0 1.689.61 1.689 1.313 0 .845-.673 1.377-1.752 1.377H11.17v1.83h1.141c1.127 0 2.097.407 2.097 1.674 0 .938-.798 1.626-2.08 1.626-.94 0-1.706-.36-2.175-.72l-.845 1.706c.892.5 1.752.829 3.175.829 2.566 0 4.302-1.548 4.302-3.488z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgMetro13
