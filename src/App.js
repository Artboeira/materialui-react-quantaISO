import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MasterBar from './components/MasterBar';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ee0263',
    },
    secondary: {
      main: '#1392e1',
    },
    info: {
      main: '#9821f3',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      
      <header>
      <MasterBar></MasterBar>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
