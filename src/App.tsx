import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Theme } from './components/ThemeProvider';
import Centered from './components/Center';
import MyForm from './components/Form';
import PrimarySearchAppBar from './components/AppBar';
import ExampleNavigationMenu from './components/HorizontalMenu';
import CustomImageList from './components/Gallery';
import BlogReviewCard from './components/Blog';
import Footer from './components/Footer';
import Logo from './components/Logo';


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
      <Logo image={{
        alt: 'logo'
      }}/>
      <Centered>
        <PrimarySearchAppBar/>
      </Centered>
      </Theme>
      <ExampleNavigationMenu/>
      <CustomImageList/>
      <BlogReviewCard/>
      <Footer/>
  
   
    </div>
  );
}

export default App;
