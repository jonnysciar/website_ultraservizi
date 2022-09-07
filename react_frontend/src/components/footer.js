import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


function Footer(props) {
    return (
        <Container
            maxWidth
            sx={{
                bottom: 0,
                mt: 2,
                justifyContent: 'flex-end',
                flexGrow: 1,
                flexShrink: 1
        }}
        >
            <Typography
                variant='h6'
                textAlign='center'
            >
                Footer test @ 2022
            </Typography>
        </Container>
    );
}

export default Footer;