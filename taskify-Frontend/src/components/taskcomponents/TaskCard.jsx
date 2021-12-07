import React from 'react';
import {makeStyles} from '@mui/styles'
import {Card, CardActions, CardContent, Typography, Grid, Divider} from '@mui/material/';
import DeleteTaskButton from '../buttons/DeleteTaskButton'
import EditTaskButton from '../buttons/EditTaskButton';
import TaskDoneButton from '../buttons/TaskDoneButton';

const useStyles = makeStyles((theme) => ({
    card:{
        maxWidth: '100%',
        backgroundColor: 'red',
        borderRadius:'30px',
    }, 
}))

const TaskCard = ({task, taskHandler}) => {
    const classes = useStyles()

    const assignCardColor = () => (
        task.completed === false?  '#43be88' : '#e24343'
    )

    return (
        <Grid item>
            <Card sx={{ maxWidth: '100%', borderRadius:'30px', backgroundColor: assignCardColor()}}>
                <CardContent>
                    <Typography gutterBottom variant="h6" align='left'>
                        {task && task.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align='left'  sx={{ fontWeight: 550}}>
                        {task && task.description}
                    </Typography>
                </CardContent>
                <Divider/>
                <CardActions sx={{justifyContent:'flex-end'}}>
                    <DeleteTaskButton task={task} taskHandler={taskHandler}/>
                    {
                        task.completed === false?
                        (
                            <>   
                            <EditTaskButton task={task} taskHandler={taskHandler}/>
                            <TaskDoneButton task={task} taskHandler={taskHandler}/> 
                            </>                          
                        ) : (<></>)
                    }
                </CardActions>
            </Card>
        </Grid>
    );
}
export default TaskCard