import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useCallback, useState } from 'react';
import InputHour from '../InputHour';


interface IHours {
   event: React.ChangeEvent<HTMLInputElement>
}

export default function DayOfTheWeek() {
  
  const [hours, setHours] = useState([]);
 
  function handleHours (event: any)  {

    console.log('aaaa', event.target.value); //valor dentro do value
    console.log('bbbb', event.target.checked); // false ou true

    const isCheckedItem = hours.includes(event.target.value)

    if(!isCheckedItem) {
      setHours((hours) => [
        ...hours,
        event.target.value
      ])
    } else {
      setHours((hours) => 
      hours.filter((item) => item !== event.target.value)
    )};
  }
  return (
    <>
      <div>
        <FormGroup onChange={handleHours} aria-label='position' row>
          <FormControlLabel
            value="Dom"
            control={<Checkbox color="primary" />}
            label="Dom"
            labelPlacement="end"
          />

          <FormControlLabel
            value="Seg"
            control={<Checkbox color="primary" />}
            label="Seg"
            labelPlacement="end"

          />

          <FormControlLabel
            value="Ter"
            control={<Checkbox color="primary" />}
            label="Ter"
            labelPlacement="end"
          />

          <FormControlLabel
            value="Qua"
            control={<Checkbox color="primary" />}
            label="Qua"
            labelPlacement="end"
          />

          <FormControlLabel
            value="Qui"
            control={<Checkbox color="primary" />}
            label="Qui"
            labelPlacement="end"
          />

          <FormControlLabel
            value="Sex"
            control={<Checkbox color="primary" />}
            label="Sex"
            labelPlacement="end"
          />

          <FormControlLabel
            value="Sab"
            control={<Checkbox color="primary" />}
            label="Sab"
            labelPlacement="end"
          />

        </FormGroup>
      </div>

      <div>
        {hours.length !== 0 && hours.map((component) => <div>{component} <InputHour /> </div>)}
      </div>
    </>

  )
}