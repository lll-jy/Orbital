import React from "react";
import "./Button.css";

export default function ({children, type}) {
  return (
    <div className="btn" type={type}>
      {children}
    </div>
  )
}
