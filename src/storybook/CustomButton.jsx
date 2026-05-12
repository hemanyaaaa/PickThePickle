import { Button } from '@mui/material'

const CustomButton = ({label, type}) => {
  return (
    <Button variant="contained" color="primary" type={type}>
      {label}
    </Button>
  )
}

export default CustomButton