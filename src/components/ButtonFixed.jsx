import React from 'react'
export default function ButtonFixed({ text, ...props }) {
  return (
    <div className="accionar" {...props} >{text}</div>
  )
}
