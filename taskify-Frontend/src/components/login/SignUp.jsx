import React, {useState} from 'react'
import {Button, Grid,} from '@mui/material/'
import {makeStyles} from '@mui/styles'
//import ProfilePage from './ProfilePage'
//import {AuthContext} from '../contexts/AuthContext'
//import {useHistory} from 'react-router-dom'
import StyledTextField from '../../muiThemeConfig/StyledTextField';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0000007d',
        height: '80%',
        borderRadius: '30px'   
    },
    form: {
        width: '80%',
        marginTop: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        marginTop: '50px',
        backgroundColor: 'black',
    },
    textCursor:{
        cursor: 'pointer'
    },
}))

const SignUp = ({handleForm, changeLogStatus}) => {
    const classes = useStyles()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')
    //const {logged} = useContext(AuthContext)
    //const history = useHistory()

    const register = () => {
        const reg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(email)
        if(reg){
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({username: user, password: password, email: email})
            }
            fetch('http://localhost:8080/users/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                changeLogStatus(data)
                console.log("USER REGISTRADO CORRECTAMENTE", data)
                //history.push('/')
            })
            .catch(err =>{
                setError(true)
                setErrorText('This email is already register')         
                setPassword('')
                console.log('ERROR', err)
            })
        }else {
            setError(true)
            setErrorText('Invalid Email')     
            setPassword('')
        }         
    }

    const setEmailValue = (event) => {
        setError(false)
        setEmail(event.target.value)
    }

    return (
        <Grid container justifyContent='center'>
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={e => e.preventDefault()}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12}>
                            <StyledTextField
                                onChange={(event) => setUser(event.target.value)}
                                variant="filled"
                                inputProps={{maxLength: 50}}
                                required
                                fullWidth
                                value={user}
                                label='Username'
                                name='UserName'
                                autoComplete='username'
                                autoFocus
                                margin='normal'
                            />
                      </Grid>
                      <Grid item xs={12}>
                            <StyledTextField
                                variant="filled"
                                onChange={(event) => setEmailValue(event)}
                                value={email}
                                inputProps={{maxLength: 100}}
                                margin='normal'
                                required
                                fullWidth
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                error={error}
                                helperText={error? (errorText):(null)}
                            />
                      </Grid>
                      <Grid item xs={12}>
                            <StyledTextField
                                variant="filled"
                                onInput={(event) => setPassword(event.target.value)}
                                value={password}
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                autoComplete='current-password'
                                margin='normal'
                            />
                      </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        color= 'secondary'
                        variant='contained'
                        className={classes.submit}
                        onClick={register}
                    >
                        Sign Up
                    </Button>
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
    )
}
export default SignUp