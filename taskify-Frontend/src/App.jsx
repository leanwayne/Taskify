import React, {useState} from 'react'
import Hero from './layouts/Hero';
import MainPage from './layouts/MainPage';
import theme from './muiThemeConfig/ThemeConfig';
import {ThemeProvider} from '@mui/material/styles';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [logged, setLogged] = useState(false);
    const [userData, setUserData] = useState({});

    const changeLogStatus = (data) => {
        setUserData(
            {
                id: data.passport.user.id,
                username: data.passport.user.username,
            }
        );
        setLogged(true);  
    };

    const logOut = () => {
        setLogged(false);
    };

    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            {!logged?
                <Hero changeLogStatus={changeLogStatus} /> :
                <MainPage logOut={logOut}/>
            }
            <Footer/>
        </div>
        </ThemeProvider>
    );
};
export default App;