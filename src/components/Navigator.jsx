import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {


  },
  selected: {
    color: "green"
  }
});

export default function SimpleBottomNavigation({ handleChange, value }) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Para preparar" />
      <BottomNavigationAction label="En preparación" />
      <BottomNavigationAction label="Para despacho" />
    </BottomNavigation>
  );
}
