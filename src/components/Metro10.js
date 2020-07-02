import React from "react"

const SvgMetro10 = ({ cancelled, ...props }) => (
  <svg width={20} height={20} {...props}>
    <path fill="none" d="M-1-1h22v22H-1z" />
    <g>
      <g fillRule="evenodd" clipRule="evenodd" stroke="null">
        <circle
          fill={`rgba(220, 150, 0, ${cancelled ? 0.4 : 1})`}
          r={9.999}
          cy={9.999}
          cx={9.999}
        />
        <path
          fill={cancelled ? "rgba(0, 0, 0, 0.4)" : ""}
          d="M17.157 10.085c0-2.55-.657-5.771-3.988-5.771-3.332 0-4.051 3.222-4.051 5.771s.657 5.771 3.988 5.771 4.05-3.221 4.05-5.771zm-2.393 0c0 1.095-.063 3.926-1.627 3.926s-1.642-2.815-1.642-3.926c0-1.126.047-3.91 1.642-3.91 1.58 0 1.627 2.753 1.627 3.91zM7.72 15.575V4.533H5.794c-.5.391-1.689 1.126-2.971 1.736l-.673.313.75 1.689.58-.297c.406-.204 1.517-.782 1.892-1.08v8.681H7.72z"
        />
      </g>
    </g>
  </svg>
)

export default SvgMetro10
