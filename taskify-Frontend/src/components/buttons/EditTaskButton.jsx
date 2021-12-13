import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import FormDialog from '../dialogs/FormDialog';
import { IconButton } from '@mui/material';

const EditTaskButton = ({task, taskHandler}) => {
    const [openDialog, setOpenDialog] = useState(false);

    const openFormDialog = () => {
        setOpenDialog(true);
    };

    const closeFormDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <IconButton size="medium" onClick={openFormDialog} sx={{color:'#0538aa'}}>
                <EditIcon/>
            </IconButton>
            <FormDialog 
                dialogTrigger={openDialog} 
                dialogCloser ={closeFormDialog} 
                taskHandler={taskHandler} 
                dialogTitle={'Edit Task'} 
                task={task}
            />
        </>    
    );
};
export default EditTaskButton;