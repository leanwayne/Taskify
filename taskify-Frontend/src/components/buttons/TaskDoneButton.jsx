import React from 'react';
import {IconButton} from '@mui/material/';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Toast from '../Toast';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskDoneButton = ({task, taskHandler}) => {
    const notify = () => toast.success('Task completed!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
    });

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
            taskHandler();
            notify();
        })
        .catch(err =>{
            //console.log('ERROR', err);
        });
    };

    return (
        <>
            <IconButton size="medium" onClick={taskDone} sx={{color:'#1c7406'}}>
                <CheckCircleIcon/>
            </IconButton> 
            <Toast/>
        </>    
    );
};
export default TaskDoneButton;