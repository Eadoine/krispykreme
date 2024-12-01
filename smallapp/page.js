'use client'

import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';

//import MenuIcon from '@mui/icons-material/Menu';

import {useState,useEffect} from 'react';


export default function MyApp() {
  const [data, setData] = useState(null)


 

  useEffect(() => {

        fetch('/api/getProducts')

          .then((res) => res.json())

          .then((data) => {

            setData(data)

          })

  }, [])


  const [showLogin, setShowLogin] = useState(false);

  const [showDash, setShowDash] = useState(false);

  const [showHomePage, setShowHomePage] = useState(true);


  function runShowLogin(){

 

      setShowHomePage(false)

      setShowLogin(true);

      setShowDash(false)

  }


  function runShowDash(){

    setShowHomePage(false);

    setShowLogin(false);

    setShowDash(true)

   

}


function runShowHome(){

  setShowHomePage(true);

  setShowLogin(false);

  setShowDash(false)

 

}


  return (

   

    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">

        <Toolbar>

          <IconButton

            size="large"

            edge="start"

            color="inherit"

            aria-label="menu"

            sx={{ mr: 2 }}

          >

            

          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            Krispy Kreme

          </Typography>

          <Button color="inherit" onClick={runShowHome}>Home</Button>

          <Button color="inherit" onClick={runShowLogin}>Login</Button>

          <Button color="inherit" onClick={runShowDash}>Dashboard</Button>

        </Toolbar>

      </AppBar>



      {showHomePage &&

      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>

   

        

      </Box>

      }




      {showLogin &&

          <Box component="section" sx={{ p: 2, border: '1px dashed grey'}}>

    

     
      
          

          </Box>

      }




    {showDash &&

          <Box component="section" sx={{ p: 2, border: '1px dashed grey'}}>
              {

data.map((item, i) => (

  <div style={{padding: '20px'}} key={i} >

    Unique ID: {item._id}

    <br></br>

    {item.pname}

    -

    {item.price}

    <br></br>

    <Button variant="outlined"> Add to cart </Button>

  </div>

))

}
     

           

          </Box>

      }



    </Box>


   


   

  );

}

