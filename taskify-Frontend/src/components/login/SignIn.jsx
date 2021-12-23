import React, {useState} from 'react';
import {Button, Grid, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText} from '@mui/material/';
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
}))

const SignIn = ({handleForm, changeLogStatus}) => {
    const classes = useStyles();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const signIn = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({username: user, password: password})
        }
        fetch('http://localhost:8080/users/login', requestOptions)
        .then(response => response.json())
        .then(data => {
            changeLogStatus(data);
        })
        .catch(err =>{
            if(!open)setOpen(true);
            //console.log("ERRROR" , err);
        });
    };

    const handleClose = () => {
        setUser('');
        setPassword('');
        setOpen(false);
    };

    return (
        <Grid container justifyContent='center'>
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={e => e.preventDefault()}>
                        <StyledTextField
                            onChange={(event) => setUser(event.target.value)}
                            variant="filled"
                            margin='normal'
                            inputProps={{maxLength: 50}}
                            required
                            fullWidth
                            value={user}
                            label='Username'
                            name='username'
                            autoComplete='username'
                            autoFocus
                        />
                        <StyledTextField
                            onInput={(event) => setPassword(event.target.value)}
                            variant="filled"
                            margin='normal'
                            inputProps={{maxLength: 50}}
                            required
                            value={password}
                            fullWidth
                            label='Password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                        />                       
                        <Button
                            onClick={signIn}
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <p onClick={handleForm} className={classes.textCursor} >
                                    Don't have an account? Sign Up
                                </p>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            {open &&(
                <Dialog
                    open={open}
                    onClose={handleClose}
                >                              
                    <DialogTitle>{'Sign in Error'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Invalid Username or Password
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color='secondary'>
                            Try again
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Grid>
    );
};
export default SignIn;