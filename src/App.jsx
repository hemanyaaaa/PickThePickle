import { Box } from '@mui/material'
import './App.css'
import { Login } from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "auto",
      gap: 4,
    }}>
      <Login />
      <Register />
    </Box>
  )
}

export default App
