import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import heroVideo from '../media/video1.mp4';
import {makeStyles} from '@mui/styles';
import {Typography, Grid} from '@mui/material/';
import SignIn from '../components/login/SignIn';
import SignUp from '../components/login/SignUp';
import useMediaQuery from '@mui/material/useMediaQuery';

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
        paddingTop: theme.spacing(4),
        letterSpacing: theme.spacing(1),
    },
}));

const ResponsiveTitle = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const titleProps = {
        variant: matches? 'h2' : 'h1',
        color: matches? 'secondary.light' : null
    }
    return (
        <Typography {...titleProps}>
            TASKIFY
        </Typography>
    );
};

const Hero = ({changeLogStatus}) => {
    const classes = useStyles();
    const [changeForm, setChangeForm] = useState(true);

    const handleForm = () => {
        setChangeForm(!changeForm);
    };

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
                <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item className={classes.title}>
                        <ResponsiveTitle/>
                    </Grid>
                    <Grid item>
                        {changeForm?
                            <SignIn handleForm={handleForm} changeLogStatus={changeLogStatus}/> :
                            <SignUp handleForm={handleForm} changeLogStatus={changeLogStatus}/>
                        }
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}
export default Hero;