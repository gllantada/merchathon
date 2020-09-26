import React from 'react'
import { Container, Button } from "@material-ui/core"
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
export default function ({ children, title, action }) {
  return <Container><Container maxWidth className="header">
    <div className="profile"><PersonRoundedIcon></PersonRoundedIcon></div>
    <h1>{title}</h1>

  </Container>
    {children}


  </Container>
}