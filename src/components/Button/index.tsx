import { Button } from "@mui/material";
import './styles.css';

type ButtonProps = {
  children: string
}

export function ButtonContent(props: ButtonProps) {
  return(
    <div>
      <Button variant="contained">{props.children}</Button>
    </div>
  )
}