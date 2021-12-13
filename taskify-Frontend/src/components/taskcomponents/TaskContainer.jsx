import React from 'react';
import {Typography} from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {StyledAccordion, StyledAccordionSummary, StyledAccordionDetails} from '../../muiThemeConfig/StyledAccordion';
import TaskCard from './TaskCard';

const TaskContainer = ({tasksData, containerTitle, taskHandler}) => {
    return (
        <div>
            <StyledAccordion elevation={10} defaultExpanded>
                <StyledAccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography variant='h5' align='center'>{containerTitle}</Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails >
                        {
                            tasksData &&
                            tasksData.map((task) => <TaskCard task={task} taskHandler={taskHandler}/>)
                        }
                </StyledAccordionDetails>
            </StyledAccordion>
        </div>
    );
};
export default TaskContainer;