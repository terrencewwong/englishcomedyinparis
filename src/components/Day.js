import React from "react"
import { css } from "@emotion/core"
import "./Day.css"

export default function Day({ name, time, children }) {
  return (
    <div className="Day">
      <h3>{name}</h3>
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
