import React, { useState } from "react";
import { Card } from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import RadioButtons from "./RadioButtons";
import { Button } from "@material-ui/core";

export default function ({ handleAsigment, handleClose, options, style }) {
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleAsignar = () => {
    handleAsigment(value);
  };

  return (
    <Card className="delivers" style={style}>
      <div style={{ marginBottom: "30px" }}>
        <h3>Repartidores disponibles</h3>
        <CloseRoundedIcon onClick={handleClose}></CloseRoundedIcon>
      </div>
      <RadioButtons
        color="primary"
        options={options}
        value={value}
        handleChange={handleChange}
      ></RadioButtons>
      <Button disabled={value === 0} onClick={handleAsignar}>
        Asignar
      </Button>
    </Card>
  );
}
