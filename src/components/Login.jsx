import { Box } from "@mui/material"
import CustomTextBox from "../storybook/CustomTextBox"
import CustomButton from "../storybook/CustomButton"

export const Login = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "auto",
      width: "300px",
      borderRadius: 2,
      p: 4,
      boxShadow: 3,
      gap: 2,
      border: '1px solid #ccc',
    }}>
      <CustomTextBox label="Username" type="text"/>
      <CustomTextBox label="Password" type="password" />
      <CustomButton label="Login" type="submit"/>
    </Box>
  )
}
