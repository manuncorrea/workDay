import { Input } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

import BoxContent from '../../components/BoxContent';
import DayOfTheWeek from '../../components/DayOfTheWeek';
import InputHour from '../../components/InputHour';



export function Home() {


  function handleSubmit() {

  }

  return (
    <BoxContent>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: "400px" }}
      >

        <FormGroup>
          <>
            <p>Configurações de trabalho</p>
            <FormControlLabel control={<Checkbox />} label="Ativar horario de trabalho" />

            <InputLabel>Configuração de jornada de trabalho</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={handleSubmit}
              label="Age"
            >
              <MenuItem value="">

              </MenuItem>
              <MenuItem>Abortar</MenuItem>
              <MenuItem>Enivar próximo expediente</MenuItem>
            </Select>

            <DayOfTheWeek />

            <Button size="large" variant="contained" >Salvar</Button>
          </>
        </FormGroup>

      </Grid>
    </BoxContent>
  )
}