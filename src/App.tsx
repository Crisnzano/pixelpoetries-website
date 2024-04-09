import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Theme } from './components/ThemeProvider';
import Centered from './components/Center';
import MyForm from './components/Form';
import PrimarySearchAppBar from './components/AppBar';
import ExampleNavigationMenu from './components/HorizontalMenu';


/*
   <Theme>
          <Button 
          variant="contained"
          sx={{marginTop: 4, marginLeft: 4,
          }}
          > 
          Hello World</Button>
        </Theme>
*/

function App() {
  return (
    <div className="App">
      <Theme>
      <Centered>
        <PrimarySearchAppBar/>
      </Centered>
      </Theme>
      <ExampleNavigationMenu/>
   
    </div>
  );
}

export default App;
