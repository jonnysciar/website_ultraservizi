import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {createTheme} from "@mui/material/styles";
import UltraserviziFont from "../fonts/ultraservizi_font.ttf"
import {CssBaseline, ThemeProvider} from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: 'Ultraservizi',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Ultraservizi';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Ultraservizi'), local('Ultraservizi-Regular'), url(${UltraserviziFont}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
      `,
        },
    },
});

function Logo(props) {
    let string = '/';
    if (props.link != null) {
        string = props.link;
    }
    return (
        <Box
            sx={{
                display: 'flex',
            }}

            {...props}
        >
            <Box
                sx={{
                    pt: 1,
                    alignItems: 'center',
                    mr: {md: 2}
                }}
            >
                <a href={string}>
                    <img className="logo" src='/images/logo_bg.png' alt='Logo' width={'60px'}/>
                </a>
            </Box>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        pt: 1,
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Ultraservizi',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        alignItems: 'center',
                    }}
                >
                    ULTRASERVIZI
                </Typography>
            </ThemeProvider>
        </Box>
    );
}

export default Logo;