import React from 'react';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate  } from "react-router-dom";


const useStyles= makeStyles({
  
  root: {
    backgroundColor: "#2d313a",
    width: "100%", 
    position: "fixed",
    bottom: 0, 
    zIndex: 100  
  },
})

export default function SimpleBottomNavigation() {
const classes= useStyles();

const [value, setValue] = React.useState(0);
const history=useNavigate();

useEffect(()=>{

  if(value===0) history("/");
  else if(value===1) history("/movies");
  else if(value===2) history("/series");
  else if(value===3) history("/search");

},[value, history]);


return (
  <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    className={classes.root}
  >
    <BottomNavigationAction
      label="Trending"
      icon={<WhatshotIcon />}
    />
    <BottomNavigationAction
      label="Movies"
      icon={<MovieIcon />}
    />
    <BottomNavigationAction
      label="TV Series"
      icon={<TvIcon />}
    />
    <BottomNavigationAction
      label="Search"
      icon={<SearchIcon />}
    />
  </BottomNavigation>
);
}