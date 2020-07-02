import React from "react"

const SvgMetro11 = ({ cancelled, ...props }) => (
  <svg width={20} height={20} {...props}>
    <style>
      {".metro-11_svg__st1{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}"}
    </style>
    <path fill="none" d="M-1-1h22v22H-1z" />
    <g>
      <g stroke="null">
        <g stroke="null">
          <circle
            stroke="null"
            r={10.009}
            cy={10.009}
            cx={10.009}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={`rgba(110, 73, 30, ${cancelled ? 0.4 : 1})`}
          />
          <path
            stroke="null"
            d="M8.399 15.601V4.548H6.462c-.5.391-1.697 1.131-2.98 1.74l-.653.305.761 1.697.588-.305C4.59 7.79 5.7 7.202 6.07 6.898v8.681h2.328v.022z"
            className="metro-11_svg__st1"
          />
          <path
            stroke="null"
            d="M15.079 15.601V4.548h-1.937c-.5.391-1.697 1.131-2.98 1.74l-.675.305.761 1.697.588-.305c.413-.195 1.523-.783 1.893-1.087v8.681h2.35v.022z"
            className="metro-11_svg__st1"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgMetro11
