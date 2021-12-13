import React from 'react';
import {Typography, Box, AppBar, Toolbar} from '@mui/material/';
import TutorialButton from '../buttons/TutorialButton';
import LogOutButton from '../buttons/LogOutButton';

const TopBar = ({logOut}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor:'#eba848' }} elevation={12}>
                  <Toolbar sx={{ color:'#36393e'}}>
                      <Typography variant="h3" align="left" sx={{flexGrow: 2}}>
                        Taskify
                      </Typography>
                      <TutorialButton sx={{padding:'20px'}}/>
                      <LogOutButton sx={{padding:'20px'}} logOut={logOut}/>
                  </Toolbar>
            </AppBar>
        </Box>
    );
};
export default TopBar;