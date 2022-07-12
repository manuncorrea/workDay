import  Box  from "@mui/material/Box";

type BoxProps = {
  children: JSX.Element
}

export function BoxContent(props: BoxProps) {
  return (
    <Box sx={{
      width: "100vh",
      maxWidth: "1500px",
      height: "100vh",
      maxHeight: "600px",
      boxShadow: "0 0 0.5em #e6dede",
      position: "absolute",
      bottom: "0",
      right: "0",
      left: "0",
      top: "0",
      margin: "auto"
    }}
    >
  
      {props.children}
     
    </Box>
  )
}