import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography:{
        fontFamily:['Roboto Condensed','sans-serif' ].join(','),
        h1:{
            fontFamily:['Roboto Condensed','sans-serif' ].join(','),
            color:'white'  
        },
        h2:{
            fontFamily:['Roboto Condensed','sans-serif' ].join(','),
        },
        h3:{
            fontFamily:['Roboto Condensed','sans-serif' ].join(','),
            fontWeight: 700
        },
        h4:{
            fontFamily:['Roboto Condensed','sans-serif' ].join(','),
            fontWeight: 350
        },
        h5:{
            fontFamily:['Roboto Condensed','sans-serif' ].join(','),
            fontWeight: 500
        },
        h6:{
            fontFamily:['Roboto Condensed','sans-serif' ].join(','),
        },
        body1:{
            fontFamily:['Work Sans', 'sans-serif'].join(','),
        },
        body2:{
            fontFamily:['Work Sans', 'sans-serif'].join(','),
            fontWeight: 550
        },
    },
    palette:{
        primary:{
            main:'#212121',
            light:'#eba848'
        },
        secondary:{
            main:'#000000',
            light:'#ffffff'
        },
    },
});
export default theme;