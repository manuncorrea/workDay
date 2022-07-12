import { useState } from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

export function SelectContent() {
  const [select, setSelect] = useState('');

  const handleSubmit = (event: SelectChangeEvent) => {
    setSelect(event.target.value)
  }
  return (
    
      <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
        <InputLabel id="demo-select-small">Configuração de jornada de trabalho</InputLabel>
        <Select value={select} label="Age"onChange={handleSubmit} sx={{width: "300px" }}>
          <MenuItem value="abort">Abortar</MenuItem>
          <MenuItem value="senNext">Enivar próximo expediente</MenuItem>
        </Select>
      </FormControl>
   

  )
}



