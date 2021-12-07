import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography:{
        fontFamily:['Roboto Condensed','sans-serif' ].join(','),
        h1:{
            fontFamily:['Roboto Condensed','sans-serif' ].join(','),
            fontSize: 90
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
        },
    },
    palette:{
        primary:{
            main:'#212121'
        },
        secondary:{
            main:'#000000',
            light:'#e0e0e0'
        }
    }
})
export default theme