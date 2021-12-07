import React from 'react'
import {IconButton} from '@mui/material/';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TaskDoneButton = ({task, taskHandler}) => {
    const taskDone = async () => {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({completed: true})
        }
        fetch(`http://localhost:8080/task/updateTaskById?id=${task.id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            taskHandler()
        })
        .catch(err =>{
            console.log('ERROR', err)
        })
    }
    return (
        <IconButton size="medium" onClick={taskDone} sx={{color:'#1c7406'}}>
            <CheckCircleIcon/>
        </IconButton>     
    )
}
export default TaskDoneButton