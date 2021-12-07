import React from 'react';
import {Typography, Grid} from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {StyledAccordion, StyledAccordionSummary, StyledAccordionDetails} from '../../muiThemeConfig/StyledAccordion'
import TaskCard from './TaskCard';

const TaskContainer = ({tasksData, containerTitle, taskHandler}) => {

    return (
        <div>
            <StyledAccordion elevation={10}>
                <StyledAccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography variant='h5' align='center'>{containerTitle}</Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails >
                    <Grid container direction="column" rowSpacing={1}>
                        {
                            tasksData &&
                            tasksData.map((task) => <TaskCard task={task} taskHandler={taskHandler}/>)
                        }
                    </Grid>
                </StyledAccordionDetails>
            </StyledAccordion>
        </div>
    );
}
export default TaskContainer