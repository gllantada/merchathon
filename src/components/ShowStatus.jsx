import React from 'react'
import { getClassesForStatus, getTextForStatus } from "./../helpers/utils"
export default function ShowStatus({ data }) {
  const classes = getClassesForStatus(data);
  const text = getTextForStatus(data)
  return (
    <div className={classes}>
      {text}
    </div>
  )
}
