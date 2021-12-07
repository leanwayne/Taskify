import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import heroVideo from '../media/video1.mp4';
import { makeStyles } from '@mui/styles';
import {Box, Typography} from '@mui/material/';
import SignIn from '../components/login/SignIn';
import SignUp from '../components/login/SignUp';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100vh',
        position: 'relative',
        '& video': {
            objectFit: 'cover',
        },
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        paddingBottom: theme.spacing(3),
        letterSpacing: theme.spacing(1)
    },
}));

const Hero = ({changeLogStatus}) => {
    const classes = useStyles();
    const [changeForm, setChangeForm] = useState(true)

    const handleForm = () => {
        setChangeForm(!changeForm)
    }

    return (
        <section className={classes.root}>
            <ReactPlayer
                url={heroVideo}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            <div className={classes.overlay}>
                <Box
                    height="90%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    color="#fff"
                >
                    <Typography variant="h2" component="h1" className={classes.title}>
                        TASKIFY
                    </Typography>
                    {changeForm === false?
                        <SignIn handleForm={handleForm} changeLogStatus={changeLogStatus}/> :
                        <SignUp handleForm={handleForm} changeLogStatus={changeLogStatus}/>
                    }
                </Box>
            </div>
        </section>
    )
}
export default Hero;