import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Container } from "@material-ui/core"


export default function SimpleBottomNavigation({ handleChange, value }) {

  return (
    <Container maxWidth="xs"
    >    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className="nav"
    >
        <BottomNavigationAction label="Para preparar" />
        <BottomNavigationAction label="En preparación" />
        <BottomNavigationAction label="Para despacho" />
      </BottomNavigation>
    </Container>
  );
}
