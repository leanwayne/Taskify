import React, {useState} from 'react';
import {Typography, Box, AppBar, Toolbar, IconButton} from '@mui/material/';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import ProfileDialog from '../dialogs/TutorialDialog';

const TopBar = ({logOut}) => {
    const [openDialog, setOpenDialog] = useState(false);
    
    const openFormDialog = () => {
        setOpenDialog(true);
    };

    const closeFormDialog = () => {
        setOpenDialog(false);
    };

    const endSession = () => {
        fetch(`http://localhost:8080/task/logout`, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then((res) => res.json())
        .then((data) => {
        })
        .catch((err) =>{
            logOut()
            //console.log('error', err);
        });
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor:'#eba848' }} elevation={12}>
                  <Toolbar sx={{ color:'#36393e'}}>
                        <Typography variant="h3" align="left" sx={{flexGrow: 2}}>
                            Taskify
                        </Typography>
                        <IconButton sx={{marginRight:'5px'}} onClick={openFormDialog}>
                            <ArticleIcon/>
                        </IconButton>
                        <ProfileDialog dialogTrigger={openDialog} dialogCloser ={closeFormDialog} dialogTitle={'Tutorial'}/>
                        <IconButton sx={{marginRight:'20px'}} onClick={endSession}>
                            <LogoutIcon/>
                        </IconButton>
                  </Toolbar>
            </AppBar>
        </Box>
    );
};
export default TopBar;