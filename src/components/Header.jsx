import React from 'react'
import { Container } from "@material-ui/core"
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
export default function ({ children, title }) {
  return <Container><Container maxWidth="xs" className="header">
    <div className="profile"><PersonRoundedIcon></PersonRoundedIcon></div>
    <h1>{title}</h1>

  </Container>
    {children}


  </Container>
}