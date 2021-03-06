import React from "react"

const SvgMetro8 = ({ cancelled, ...props }) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" d="M-1-1h22v22H-1z" />
    <g>
      <g fillRule="evenodd" clipRule="evenodd" stroke="null">
        <circle
          fill={`rgba(210, 130, 190, ${cancelled ? 0.4 : 1})`}
          r={9.971}
          cy={9.971}
          cx={9.971}
        />
        <path
          fill={cancelled ? "rgba(0, 0, 0, 0.4)" : ""}
          d="M13.81 12.456c0-1.45-.89-2.324-1.903-2.808 1.03-.624 1.56-1.42 1.56-2.449 0-1.887-1.607-2.838-3.54-2.838-1.888 0-3.541 1.263-3.541 3.088 0 1.138.592 1.81 1.544 2.402-1.06.546-1.888 1.404-1.888 2.87 0 1.668 1.389 3.135 3.837 3.135 2.262 0 3.93-1.31 3.93-3.4zM11.36 7.34c0 .686-.624 1.325-1.2 1.59-.703-.296-1.607-.78-1.607-1.684 0-.764.546-1.295 1.404-1.295.904 0 1.403.625 1.403 1.389zm.172 5.287c0 .873-.577 1.607-1.622 1.607-1.061 0-1.654-.858-1.654-1.763 0-.858.718-1.575 1.435-1.856.936.468 1.84 1.014 1.84 2.012z"
        />
      </g>
    </g>
  </svg>
)

export default SvgMetro8
