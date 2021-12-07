import React from 'react'
import {IconButton} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteTaskButton = ({task, taskHandler}) => {
    const deleteTask = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({user_id: task.user_id})
        }
        fetch(`http://localhost:8080/task/deleteTaskById?id=${task.id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            taskHandler()
        })
        .catch(err =>{
            console.log('ERROR', err)
        })
    }
    return (
        <IconButton size="medium" onClick={deleteTask} sx={{color:'#740000'}}>
            <DeleteIcon/>
        </IconButton>     
    )
}
export default DeleteTaskButton