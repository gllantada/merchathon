import React from 'react'
import { Container } from "@material-ui/core"
export default function ({ children, title }) {
  return <Container className="header">
    <h1>{title}</h1>
    {children}

  </Container>
}