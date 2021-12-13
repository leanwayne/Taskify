import React, {useState} from 'react';
import {Button, Grid,} from '@mui/material/';
import {makeStyles} from '@mui/styles';
import StyledTextField from '../../muiThemeConfig/StyledTextField';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(15, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0000007d',
        height: '80%',
        borderRadius: '30px'   
    },
    form: {
        width: '80%',
        marginTop: theme.spacing(4),
    },
    textCursor:{
        cursor: 'pointer',
        color: 'white',
    },
}));

const SignUp = ({handleForm, changeLogStatus}) => {
    const classes = useStyles();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [errorText1, setErrorText1] = useState('');
    const [errorText2, setErrorText2] = useState('');

    const register = () => {
        const reg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(email)
        if(reg && password === confirmPassword ){
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({username: user, password: password, email: email})
            }
            fetch('http://localhost:8080/users/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                changeLogStatus(data);
                console.log("USER REGISTRADO CORRECTAMENTE", data);
            })
            .catch(err =>{
                setError1(true);
                setErrorText1('This email is already register');       
                setPassword('');
                console.log('ERROR', err);
            })
        }else {
            if(!reg){
                setError1(true); 
                setErrorText1('Invalid Email');     
                setPassword('');
            };
            if(password !== confirmPassword){
                setError2(true);
                setErrorText2('password not match');       
            };
        };         
    };

    const setEmailValue = (event) => {
        setError1(false);
        setEmail(event.target.value);
    };
    const setPasswordValue = (event) => {
        setError2(false);
        setPassword(event.target.value);
    };
    const setConfirmPasswordValue = (event) => {
        setError2(false);
        setConfirmPassword(event.target.value);
    };
    
    return (
        <Grid container justifyContent='center'>
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={e => e.preventDefault()}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                                <StyledTextField
                                    onChange={(event) => setUser(event.target.value)}
                                    variant="filled"
                                    value={user}
                                    inputProps={{maxLength: 50}}
                                    required
                                    fullWidth
                                    label='Username'
                                    name='UserName'
                                    autoComplete='username'
                                    autoFocus
                                />
                        </Grid>
                        <Grid item xs={12}>
                                <StyledTextField
                                    onChange={(event) => setEmailValue(event)}
                                    variant="filled"
                                    value={email}
                                    inputProps={{maxLength: 100}}
                                    required
                                    fullWidth
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                    error={error1}
                                    helperText={error1? (errorText1):(null)}
                                />
                        </Grid>
                        <Grid item xs={12}>
                                <StyledTextField
                                    variant="filled"
                                    onChange={(event) => setPasswordValue(event)}
                                    inputProps={{maxLength: 20}}
                                    value={password}
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                />
                        </Grid>
                        <Grid item xs={12}>
                                <StyledTextField
                                    onChange={(event) => setConfirmPasswordValue(event)}
                                    variant="filled"
                                    value={confirmPassword}
                                    inputProps={{maxLength: 50}}
                                    required
                                    fullWidth
                                    label='Confirm Password'
                                    name='Confirm-Password'
                                    type='password'
                                    error={error2}
                                    helperText={error2? (errorText2):(null)}
                                />
                        </Grid>
                        <Grid item xs={12}>                    
                            <Button
                                type='submit'
                                fullWidth
                                color= 'secondary'
                                variant='contained'
                                onClick={register}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <p onClick={handleForm} className={classes.textCursor}>
                                Already have an account? Sign in
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Grid>
    );
};
export default SignUp;