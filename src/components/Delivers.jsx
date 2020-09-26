import React, { useState } from 'react'
import { Card } from "@material-ui/core"
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import RadioButtons from "./RadioButtons";
import { getRadioObject } from "./../helpers/utils"
import { Button } from "@material-ui/core"


export default function ({ delivers, handleClose }) {
  const [value, setValue] = useState(0)
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  const handleAsignar = () => {
    console.log("asignar")
  }

  const options = getRadioObject(delivers)
  return (
    <Card className="delivers">
      <div style={{ marginBottom: "30px" }}>
        <h3>Repartidores disponibles</h3>
        <CloseRoundedIcon onClick={handleClose}></CloseRoundedIcon>
      </div>
      <RadioButtons color="primary" options={options} value={value} handleChange={handleChange}></RadioButtons>
      <Button disabled={value === 0} onClick={handleAsignar}>Asignar</Button>
    </Card>
  )
}
