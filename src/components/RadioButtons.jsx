import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';



export default function ErrorRadios({ options, handleChange, error, value, color }) {


  return (
    <FormControl component="fieldset" error={error} >
      <RadioGroup aria-label="quiz" color="primary" name="quiz" value={value} onChange={handleChange}>
        {options.map((elm, i) => {
          if (i === options.length - 1)
            return <FormControlLabel color={color} value={elm.value} control={<Radio />} labelPlacement="start" label={elm.label} />
          else return <>

            <FormControlLabel color={color} value={elm.value} control={<Radio />} labelPlacement="start" label={elm.label} />
            <Divider></Divider>
          </>
        })}
      </RadioGroup>

    </FormControl>
  );
}
