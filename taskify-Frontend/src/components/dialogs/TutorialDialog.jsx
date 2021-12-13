import React from 'react';
import {makeStyles} from '@mui/styles';
import {Dialog, DialogActions, DialogContent, DialogTitle, Typography, Grid, IconButton} from '@mui/material/';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
    dialogTitle:{
        backgroundColor:'#eba848',
        borderTopRightRadius:'50px 20px',
        borderTopLeftRadius: '50px 20px',
        [theme.breakpoints.down('md')]: {
            height:'100px',
        },
    },
    dialogBody:{
        backgroundColor:'#eba848', 
        overflow:'inherit',
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
}))

const TutorialDialog = ({dialogTrigger, dialogCloser, dialogTitle}) => {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                className={classes.dialog}
                open={dialogTrigger}
                onClose={dialogCloser}
            >
                <DialogTitle/>
                <DialogTitle className={classes.dialogTitle}>
                    <Typography align='center' variant='h3' sx={{color:'#282c34'}}>
                        Taskify
                    </Typography>
                    <Typography align='center' variant='h5' sx={{color:'#282c34'}}>
                        {dialogTitle}
                    </Typography>
                </DialogTitle>
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
                                    <Typography align='left' variant='h6' sx={{color:'#282c34'}}>
                                        Welcome to taskify, an app to manage your daily tasks.{<br/>}
                                        To start creating your tasks, press the Plus+ button on the top center of the screen.{<br/>}
                                        After creating a task card, it will be placed in the Pendings list with three options.{<br/>}
                                        {
                                            <ul>
                                                <li><CheckCircleIcon sx={{marginBottom:'-5px'}}/> Record the task as completed.</li>
                                                <li><EditIcon sx={{marginBottom:'-5px'}}/> Edit the title or description of the task.</li>
                                                <li><DeleteIcon sx={{marginBottom:'-5px'}}/> Delete the task.</li>
                                            </ul>
                                        }
                                        After marking a task as completed, it will be shown on the Completed list.{<br/>}
                                        Cards on this list can be kept as a record or can be deleted.
                                    </Typography>
                                </Grid>
                            </Grid>        
                    </DialogContent>
                    <DialogActions className={classes.dialogBody}>
                            <IconButton
                                onClick={dialogCloser}
                                size="large"
                                sx={{color:'#1c7406'}} 
                            >
                                <CheckCircleOutlineIcon/>
                            </IconButton>
                    </DialogActions>
            </Dialog>
        </div>
    );
};
export default TutorialDialog;