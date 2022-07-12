import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid
} from '@mui/material';

import Container from '@mui/material/Container';
import { BoxContent } from '../../components/BoxContent';
import { ButtonContent } from '../../components/Button';
import DayOfTheWeek from '../../components/DayOfTheWeek';
import { SelectContent } from '../../components/SelectContent';


import "./styles.css";


export function Home() {
  function handleSubmit() { }
  return (
    <Container maxWidth="sm">
      <BoxContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ height: "500px" }}
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Ativar horario de trabalho" />
            
            <div className="selectContainer">
              <span>Configurações de trabalho</span>
              <SelectContent />
            </div>
            <DayOfTheWeek />

            <ButtonContent>Enviar</ButtonContent>

          </FormGroup>
        </Grid>
      </BoxContent>
    </Container>
  )
}