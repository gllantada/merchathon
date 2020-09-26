import React from 'react'
import { Container, Button } from '@material-ui/core'
import * as Routes from "./../constants/routes"
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import MotorcycleRoundedIcon from '@material-ui/icons/MotorcycleRounded';

export default function (props) {
  console.log()
  return <Container maxWidth className="footer">

    <div className={window.location.pathname === Routes.SELLER_SCREEN && "selected"}>
      <DescriptionRoundedIcon></DescriptionRoundedIcon>
      Ordenes</div>
    <div className={window.location.pathname === Routes.SELLER_REPARTOS_SCREEN && "selected"}>
      <MotorcycleRoundedIcon></MotorcycleRoundedIcon>

      Repartos</div>

  </Container>
}