import { Box, InputLabel, TextField } from '@mui/material'


const CustomTextBox = ({ label, type,setvalue}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', m:1, gap: 1 }}>
        <InputLabel htmlFor="my-input">{label}</InputLabel>
        <TextField id="my-input" label={label} variant="outlined" type={type} onChange={(e) => setvalue(e.target.value)} />

    </Box>
  )
}

export default CustomTextBox