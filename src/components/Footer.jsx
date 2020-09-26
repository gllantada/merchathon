import React from 'react'
import { Container } from '@material-ui/core'
import * as Routes from "./../constants/routes"
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import MotorcycleRoundedIcon from '@material-ui/icons/MotorcycleRounded';

export default function (props) {
  return <Container maxWidth="xs" className="footer">

    <div className={window.location.pathname === Routes.SELLER_SCREEN ? "selected" : ""} onClick={() => props.history.push(Routes.SELLER_SCREEN)}>
      <DescriptionRoundedIcon></DescriptionRoundedIcon>
    Órdenes</div>
    <div className={window.location.pathname === Routes.SELLER_REPARTOS_SCREEN ? "selected" : ""} onClick={() => props.history.push(Routes.SELLER_REPARTOS_SCREEN)}>
      <MotorcycleRoundedIcon></MotorcycleRoundedIcon>

      Repartos</div>

  </Container>
}