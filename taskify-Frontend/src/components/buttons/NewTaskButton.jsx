import React, {useState} from 'react';
import {Fab} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import FormDialog from '../dialogs/FormDialog';

const NewTaskButton = ({newTaskHandler}) => {
    const [openDialog, setOpenDialog] = useState(false);

    const openFormDialog = () => {
        setOpenDialog(true);
    };

    const closeFormDialog = () => {
        setOpenDialog(false);
    };
 
    return (
        <>
            <Fab variant="contained" onClick={openFormDialog} size="large" sx={{backgroundColor:'#eba848'}}>
                <AddIcon/>
            </Fab>
            <FormDialog 
                dialogTrigger={openDialog} 
                dialogCloser ={closeFormDialog} 
                taskHandler={newTaskHandler} 
                dialogTitle={'Create Task'}
            />  
        </>
    );
};
export default NewTaskButton;