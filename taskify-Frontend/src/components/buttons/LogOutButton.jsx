import React from 'react';
import {IconButton} from '@mui/material/';
import LogoutIcon from '@mui/icons-material/Logout';

const LogOutButton = ({logOut}) => {

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
            console.log('error', err);
        });
    };

    return (
        <>
            <IconButton sx={{marginRight:'20px'}} onClick={endSession}>
                <LogoutIcon/>
            </IconButton>
        </>
    )
};
export default LogOutButton;