import React, {useState} from 'react'
import {makeStyles} from '@mui/styles'
import {Dialog, DialogActions, DialogContent, DialogTitle, Typography, TextField, Grid, IconButton} from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import AddTaskIcon from '@mui/icons-material/AddTask';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const useStyles = makeStyles((theme) => ({
    dialogTitle:{
        backgroundColor:'#eba848',
        borderTopRightRadius:'50px 20px',
        borderTopLeftRadius: '50px 20px',
    },
    dialogBody:{
        backgroundColor:'#eba848',  
    },
    dialog:{
        '& .MuiPaper-root':{
            backgroundColor:'#3e4452',
            width:'70%',
        },
    },
}))

const EditTaskButton = ({task, taskHandler}) => {
    const classes = useStyles()
    const [open, setOpen] = useState('');
    const [title, setTitle] = useState('');
    const [taskData, setTaskData] = useState({}); //PARA EL MENSAJITO DE NUEVA TAREA 
    const [description, setDescription] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const editTask = async () => {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({title: title, description: description,})
        }
        fetch(`http://localhost:8080/task/updateTaskById?id=${task.id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            taskHandler()
            handleClose()
        })
        .catch(err =>{
            console.log('ERROR', err)
        })
    }
    return (
        <>
            <IconButton size="medium" onClick={handleClickOpen} sx={{color:'#0538aa'}}>
                <EditIcon/>
            </IconButton> 
            <Dialog
                className={classes.dialog}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle/>
                <DialogTitle className={classes.dialogTitle}>
                    <Typography align='center' variant='h5' sx={{color:'#282c34'}}>
                        Edit Task
                    </Typography>
                </DialogTitle>
                <form className={classes.form} onSubmit={e => e.preventDefault()}>
                    <DialogContent className={classes.dialogBody}>
                            <Grid 
                                container 
                                rowSpacing={2} 
                                direction="column" 
                                justifyContent="center" 
                                alignItems="center"
                                alignItems="strech"
                            >
                                <Grid item xs={12} >
                                    <TextField
                                        onChange={(event) => setTitle(event.target.value)}
                                        fullWidth
                                        label="Title"
                                        defaultValue={task.title}
                                        inputProps={{maxLength: 40}}
                                        multiline
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(event) => setDescription(event.target.value)}
                                        fullWidth
                                        label="Description"
                                        defaultValue={task.description}
                                        inputProps={{maxLength: 200}}
                                        multiline
                                        variant='filled'
                                        rows={5}
                                    />
                                </Grid>
                            </Grid>        
                    </DialogContent>
                    <DialogActions className={classes.dialogBody}>
                            <IconButton size="large" sx={{color:'#740000'}}>
                                <HighlightOffIcon onClick={handleClose} />
                            </IconButton>
                            <IconButton
                            onClick={editTask}
                            size="large" 
                            sx={{color:'#1c7406'}}
                            >
                                <AddTaskIcon/>
                            </IconButton>
                    </DialogActions>
                </form>
            </Dialog>
        </>    
    )
}
export default EditTaskButton