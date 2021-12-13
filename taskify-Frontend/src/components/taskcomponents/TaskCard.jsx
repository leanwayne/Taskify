import React from 'react';
import {Card, CardActions, CardContent, Typography, Divider} from '@mui/material/';
import DeleteTaskButton from '../buttons/DeleteTaskButton'
import EditTaskButton from '../buttons/EditTaskButton';
import TaskDoneButton from '../buttons/TaskDoneButton';


const TaskCard = ({task, taskHandler}) => {

    return (
            <Card sx={{borderRadius:'30px', backgroundColor: !task.completed? '#43be88' : '#e24343', marginBottom:'10px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h6" align='left'>
                        {task && task.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component='p' align='left'>
                        {task && task.description}
                    </Typography>
                </CardContent>
                <Divider/>
                <CardActions sx={{justifyContent:'flex-end'}}>
                    <DeleteTaskButton task={task} taskHandler={taskHandler}/>
                    {
                        !task.completed &&
                        (
                            <>   
                                <EditTaskButton task={task} taskHandler={taskHandler}/>
                                <TaskDoneButton task={task} taskHandler={taskHandler}/> 
                            </>                          
                        ) 
                    }
                </CardActions>
            </Card>
    );
};
export default TaskCard;