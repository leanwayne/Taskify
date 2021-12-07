import React from 'react';
import {IconButton, Button, Typography, Box, AppBar, Toolbar} from '@mui/material/';

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'#eba848' }} elevation={12}>
        <Toolbar sx={{ color:'#36393e'}}>
          <Typography variant="h3" align="left" sx={{flexGrow: 2}}>
            Taskify
          </Typography>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Tutorial</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default TopBar