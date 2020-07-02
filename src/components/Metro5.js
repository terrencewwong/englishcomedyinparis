import React from "react"

const SvgMetro5 = ({ cancelled, ...props }) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" d="M-1-1h22v22H-1z" />
    <g>
      <g fillRule="evenodd" clipRule="evenodd" stroke="null">
        <circle
          fill={`rgba(255, 90, 0, ${cancelled ? 0.4 : 1})`}
          r={10.007}
          cy={10.007}
          cx={10.007}
        />
        <path
          fill={cancelled ? "rgba(0, 0, 0, 0.4)" : ""}
          d="M13.768 12.062c0-1.66-1.22-3.334-4.242-3.49l-.313-.016.157-2.113h3.975V4.61H7.538L7.1 10.356l1.722.015c2.035.016 2.567 1.112 2.567 1.91 0 1.3-1.08 1.784-1.941 1.784-.94 0-1.565-.344-2.098-.704l-.814 1.722a6.081 6.081 0 0 0 3.037.798c2.52 0 4.195-1.706 4.195-3.82z"
        />
      </g>
    </g>
  </svg>
)

export default SvgMetro5
