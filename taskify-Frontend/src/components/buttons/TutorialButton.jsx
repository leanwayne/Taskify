import React, {useState} from 'react';
import {IconButton} from '@mui/material/';
import ArticleIcon from '@mui/icons-material/Article';
import ProfileDialog from '../dialogs/TutorialDialog';

const TutorialButton = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const openFormDialog = () => {
        setOpenDialog(true);
    };

    const closeFormDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <IconButton sx={{marginRight:'5px'}} onClick={openFormDialog}>
                <ArticleIcon/>
            </IconButton>
            <ProfileDialog dialogTrigger={openDialog} dialogCloser ={closeFormDialog} dialogTitle={'Tutorial'}/> 
        </>
    );
};
export default TutorialButton;