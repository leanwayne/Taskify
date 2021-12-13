import React, {useState, useEffect} from 'react';
import {Grid, Container} from '@mui/material/';
import TopBar from '../components/topBar/TopBar';
import NewTaskButton from '../components/buttons/NewTaskButton';
import TaskContainer from '../components/taskcomponents/TaskContainer';

const MainPage = ({logOut}) => {
    const [taskWatcher, setTaskWatcher] = useState(1);
    const [pendingTasks, setPendingTasks] = useState();
    const [completedTasks, setCompletedTasks] = useState();

    const taskHandler = () => {
        setTaskWatcher(taskWatcher+1);
    };

    useEffect(() => {
        fetch(`http://localhost:8080/task/getTasks`, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        .then((res) => res.json())
        .then((data) => {
            setPendingTasks(data.filter(task => task.completed === false));
            setCompletedTasks(data.filter(task => task.completed === true));
        })
        .catch((err) =>{
            console.log('error', err);
        });  
    }, [taskWatcher]);

    return (
        <div>
            <TopBar logOut={logOut}/>
            <Container maxWidth="m">
                <Grid container justifyContent="center" sx={{marginBottom:'70px'}}>
                    <Grid item sx={{padding:'25px'}}>
                        <NewTaskButton newTaskHandler={taskHandler}/>
                    </Grid>
                    <Grid container spacing={5} rowSpacing={1} justifyContent="center">
                        <Grid item xs={12} sm={12} md={5}>
                            <TaskContainer tasksData={pendingTasks} containerTitle={'Pendings'} taskHandler={taskHandler}/>  
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <TaskContainer tasksData={completedTasks} containerTitle={'Completed'} taskHandler={taskHandler}/>
                        </Grid>   
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
export default MainPage;