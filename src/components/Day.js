import React from "react"
import { css } from "@emotion/core"
import "./Day.css"

export default function Day({ name, children }) {
  return (
    <div className="Day">
      <h2>{name}</h2>
      {children ? (
        <div className="Day__Events">{children}</div>
      ) : (
        <p
          css={css`
            font-size: 18px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.6);
          `}
        >
          No events
        </p>
      )}
    </div>
  )
}
