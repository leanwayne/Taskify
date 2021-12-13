import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)({
    '& .MuiInputLabel-root':{
        color:'#cdcdcd'
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiFilledInput-root': {
        color: 'white',
        background: '#353535',
        '& fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#745d1d',
        },
        '& :-webkit-autofill': {
            transitionDelay: '9999s'
        },   
    },
});
export default StyledTextField;