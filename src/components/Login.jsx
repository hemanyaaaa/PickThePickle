import { Box } from "@mui/material"
import CustomTextBox from "../storybook/CustomTextBox"
import CustomButton from "../storybook/CustomButton"
import { useState } from "react"

export const Login = () => {
  const [Username,setUsername] = useState("")
  const [Password,setPassword] = useState("")
  // console.log(Username,Password)
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
      <CustomTextBox label="Username" type="text" setvalue={setUsername} />
      <CustomTextBox label="Password" type="password" setvalue={setPassword} />
      <CustomButton label="Login" type="submit" Username={Username} Password={Password}/>
    </Box>
  )
}
