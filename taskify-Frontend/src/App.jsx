import React, {useState} from 'react'
import Hero from './layouts/Hero';
import MainPage from './layouts/MainPage';
import theme from './muiThemeConfig/ThemeConfig';
import {ThemeProvider} from '@mui/material/styles';
import './App.css';

function App() {
    const [logged, setLogged] = useState(false);
    const [userData, setUserData] = useState({});
    console.log("estado del user ------", logged)
    console.log("la data del user ------", userData)

    const changeLogStatus = (data) => {
        setUserData(
            {
                id: data.passport.user.id,
                username: data.passport.user.username,
            }
        )
        setLogged(true)
        
    }

    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            {!logged?
                <Hero changeLogStatus={changeLogStatus} /> :
                <MainPage/>
            }
        </div>
        </ThemeProvider>
    );
}
export default App;