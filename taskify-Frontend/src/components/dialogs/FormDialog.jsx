import React, {useState} from 'react'
import {makeStyles} from '@mui/styles'
import {Dialog, DialogActions, DialogContent, DialogTitle, Typography, TextField, Grid, IconButton} from '@mui/material/';
import AddTaskIcon from '@mui/icons-material/AddTask';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {toast} from 'react-toastify';
import Toast from '../Toast';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
    dialogTitle:{
        backgroundColor:'#eba848',
        borderTopRightRadius:'50px 20px',
        borderTopLeftRadius: '50px 20px',
        [theme.breakpoints.down('md')]: {
            height:'42px',
        },
    },
    dialogBody:{
        backgroundColor:'#eba848',
        overflow:'inherit',
        [theme.breakpoints.down('md')]: {
            height:'68%',
        },      
    },
    dialog:{  
        '& .MuiPaper-root':{
            backgroundColor:'#3e4452',
            width:'70%',
            [theme.breakpoints.down('md')]: {
                width:'100%',
                height:'100%',
            }, 
        },
    },
}));

const FormDialog = ({dialogTrigger, dialogCloser, taskHandler, dialogTitle, task}) => {
    const classes = useStyles();
    const [title, setTitle] = useState(task? task.title : '');  
    const [description, setDescription] = useState('');

    const notify = () => toast.info(task? 'Task edited successfully' : `New Task: ${title}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
    });

    const createTask = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({title: title, description: description})
        }
        fetch('http://localhost:8080/task/createTask', requestOptions)
        .then(response => response.json())
        .then(data => {
            taskHandler();
            dialogCloser();
            notify();
            setTitle('');
            setDescription('');
        })
        .catch(err =>{
            console.log("ERRROR" , err);
        });
    };

    const editTask = () => {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({title: title, description: description,})
        }
        fetch(`http://localhost:8080/task/updateTaskById?id=${task.id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            taskHandler();
            dialogCloser();
            notify();
            setTitle('');
            setDescription('');
        })
        .catch(err =>{
            console.log('ERROR', err);
        });
    };

    return (
        <div>
            <Toast/>
            <Dialog
                className={classes.dialog}
                open={dialogTrigger}
                onClose={dialogCloser}
            >
                <DialogTitle/>
                <DialogTitle className={classes.dialogTitle}>
                    <Typography align='center' variant='h5' sx={{color:'#282c34'}}>
                        {dialogTitle}
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
                                        required
                                        inputProps={{maxLength: 40}}
                                        multiline
                                        variant="filled"
                                        defaultValue={task? task.title : title}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(event) => setDescription(event.target.value)}
                                        fullWidth
                                        label="Description"
                                        inputProps={{maxLength: 120}}
                                        multiline
                                        variant='filled'
                                        rows={5}
                                        defaultValue={task? task.description : ''}
                                    />
                                </Grid>
                            </Grid>        
                    </DialogContent>
                    <DialogActions className={classes.dialogBody}>
                            <IconButton 
                                onClick={dialogCloser} 
                                size="large" 
                                sx={{color:'#740000'}}
                            >
                                <HighlightOffIcon/>
                            </IconButton>
                            <IconButton 
                                onClick={!task? createTask : editTask}
                                size="large"
                                sx={{color:'#1c7406'}} 
                                disabled={title === ''? true : false}
                            >
                                <AddTaskIcon/>
                            </IconButton>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
};
export default FormDialog;