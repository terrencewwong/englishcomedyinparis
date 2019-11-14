import React from "react"
import "./Day.css"

export default function Day({ name, children }) {
  return (
    <div className="Day">
      <h2>{name}</h2>
      {children ? (
        <div className="Day__Events">{children}</div>
      ) : (
        <p>No events</p>
      )}
    </div>
  )
}
