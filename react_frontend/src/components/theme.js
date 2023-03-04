import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2C2C2D',
        },
        secondary: {
            main: '#E61E25',
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        },
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
    }
});

export default theme;
