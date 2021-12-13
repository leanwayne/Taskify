import { styled } from '@mui/material/styles';
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material/';

export const StyledAccordion = styled(Accordion)({
    margin:'20px',
});

export const StyledAccordionSummary = styled(AccordionSummary)({
    backgroundColor:'#eba848',
    '& .MuiAccordionSummary-content':{
        justifyContent:'center',
    },
});

export const StyledAccordionDetails = styled(AccordionDetails)({
    backgroundColor: '#212121',
});