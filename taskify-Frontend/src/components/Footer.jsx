import React from 'react';
import {makeStyles} from '@mui/styles';
import {Typography, IconButton, Box} from '@mui/material/';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles((theme) => ({
    typography:{
        paddingTop: theme.spacing(1),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <>
            <Box sx={{
                position: 'fixed',
                padding: '10px 10px 0px 10px',
                bottom: 0,
                width: '100%',
                height: '65px',
                background: '#191919',
            }}>
                <Typography variant='body2' color='secondary.light' align='center' className={classes.typography}>
                    Copyright © Taskify by Leandro Lopez{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
                <IconButton sx={{color:'white'}} size='small' href='https://www.linkedin.com/in/leandro-l%C3%B3pez-catalini-9628b21a2/'>
                    <LinkedInIcon/>
                </IconButton>
                <IconButton sx={{color:'white'}} size='small' href='https://github.com/leanwayne/Taskify'>
                    <GitHubIcon/>
                </IconButton> 
            </Box>
        </>
    );
};