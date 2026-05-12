import { Box } from "@mui/material"
import CustomTextBox from "../storybook/CustomTextBox"
import CustomButton from "../storybook/CustomButton"
const Register = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      height: "auto",
      width: "400px",
      borderRadius: 2,
      p: 4,
      boxShadow: 3,
      gap: 2,
      border: '1px solid #ccc',
    }}>
      <CustomTextBox label="Username" type="text"/>
      <CustomTextBox label="Email" type="email"/>
      <CustomTextBox label="Password" type="password"/>
      <CustomTextBox label="Confirm Password" type="password"/>
      <CustomButton label="Register" type="submit"/>
      <CustomButton label="Cancel" type="button"/>
    </Box>
  )
}

export default Register