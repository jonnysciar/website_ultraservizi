import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ultraserviziFont from "../fonts/ultraservizi_font.otf"

function Logo(props) {
    let string = '/';
    if (props.link != null) {
        string = props.link;
    }
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{alignItems: 'center', mr: {md: 2}}}>
                <a href={string}>
                    <img className="logo" src='/images/logo_bg.png' alt='Logo' width={'60px'}/>
                </a>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    alignItems: 'center'
                }}
                fontFamily={ultraserviziFont}
            >
                ULTRASERVIZI
            </Typography>
        </Box>
    );
}

export default Logo;