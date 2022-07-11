import './styles.css';

type BorderBoxProps = {
  children: JSX.Element
}
export default function BoxContent(props: BorderBoxProps) {
  return(
    <div className="borderBox">{props.children}</div>
  )
}