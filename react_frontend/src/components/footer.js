import React from 'react';

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import {IconButton} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Container from "@mui/material/Container";

function Footer(props) {
    return (
        <Container
            sx={{
                mt: 8,
                pt: 2,
                bottom: 0,
                bgcolor: 'primary.main',
                borderRadius: 2,
            }}
            {...props}
        >
            <Grid
                container
            >

                <Grid
                    item
                    xs={12}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <IconButton
                            aria-label='Telefono'
                            sx={{
                                color: 'white'
                            }}
                            onClick={() => {
                                window.location.href = "tel:+393665260226"
                            }}
                        >
                            <PhoneIcon />
                        </IconButton>

                        <IconButton
                            aria-label='WhatsApp'
                            sx={{
                                color: 'white'
                            }}
                            onClick={() => {
                                window.location.href = "https://api.whatsapp.com/send?phone=393665260226"
                            }}
                        >
                            <WhatsAppIcon />
                        </IconButton>

                        <IconButton
                            aria-label='Email'
                            sx={{
                                color: 'white'
                            }}
                            onClick={() => {
                                window.location.href = "mailto:pronto.ultraservizi@gmail.com"
                            }}
                        >
                            <AlternateEmailIcon />
                        </IconButton>


                    </Container>

                </Grid>

            </Grid>
            <Copyright
                sx={{
                    color: 'white',
                    mb: 2
                }}
            />
        </Container>
    );
}

function Copyright(props) {
    return (
        <Typography
            variant='body2'
            align='center'
            {...props}
        >
            {'Copyright © 2022 Ultraservizi'}
            {' ' + new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;