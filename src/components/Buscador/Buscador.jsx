import Paper from '@mui/material/Paper';
//import InputBase from '@mui/material/InputBase';
//import IconButton from '@mui/material/IconButton';
//import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

const Buscador = ({ onBuscar }) => {
    const [criterioBusqueda, setCriterioBusqueda] = useState('');
    
  return (
    <Paper
    component="form"
      sx={{'& .MuiTextField-root': { m: 5, width: '40ch' }}}
    >
      <div>
        <TextField 
        id="outlined-basic" 
        label="Buscar Noticias" 
        variant="outlined"
        value = {criterioBusqueda}
        onChange = {(e) => {
          setCriterioBusqueda(e.target.value)
        }} 
        />
     </div>
      <Button 
        variant="contained" 
        color="success"
        onClick={() => {
            onBuscar(criterioBusqueda)
          }}
        >
        Buscar
    </Button>
    </Paper>
  );
};
  
  
export default Buscador;