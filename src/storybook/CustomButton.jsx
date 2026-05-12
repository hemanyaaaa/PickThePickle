import { Button } from '@mui/material'

const CustomButton = ({label, type, Username,Password}) => {
  return (
    <Button variant="contained" color="primary" type={type} onClick={
      (e)=>{
        console.log(Username,Password)}}>
      {label}
    </Button>
  )
}

export default CustomButton