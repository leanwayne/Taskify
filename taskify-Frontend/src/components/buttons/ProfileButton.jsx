import React, {useState} from 'react';
import {IconButton} from '@mui/material/';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TutorialDialog from '../dialogs/TutorialDialog';

const ProfileButton = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const openFormDialog = () => {
        setOpenDialog(true);
    };

    const closeFormDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <IconButton sx={{marginRight:'20px'}} onClick={openFormDialog}>
                <AccountBoxIcon/>
            </IconButton>  
            <TutorialDialog dialogTrigger={openDialog} dialogCloser ={closeFormDialog} dialogTitle={'Profile'}/>
        </>
    );
};
export default ProfileButton;