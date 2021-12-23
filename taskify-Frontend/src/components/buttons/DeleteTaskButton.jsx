import React from 'react';
import {IconButton} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import Toast from '../Toast';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteTaskButton = ({task, taskHandler}) => {

    const notify = () => toast.error('Task Deleted', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
    });

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
            taskHandler();
            notify();
        })
        .catch(err =>{
            //console.log('ERROR', err);
        });
    };

    return (
        <>
        <IconButton size="medium" onClick={deleteTask} sx={{color:'#740000'}}>
            <DeleteIcon/>
        </IconButton> 
        <Toast/>
        </>    
    );
};
export default DeleteTaskButton;