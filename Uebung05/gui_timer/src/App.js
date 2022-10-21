import React from 'react';
import Button from '@mui/material/Button';
import Timer from "./Timer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
    <AppBar position="sticky" color="success" >
      <Toolbar>
      <Typography variant="h5">Timer</Typography>

      </Toolbar>
    </AppBar>
    <Timer />
    </>
  )
}

export default App;

