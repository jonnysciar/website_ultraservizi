import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";

import {IconButton} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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

export default function Footer(props) {
    return (
        <AppBar
            sx={{
                position: 'static',
                top: 'auto',
                bottom: 0,
                bgcolor: 'white',
                borderColor: 'transparent',
                boxShadow: 0,
                marginTop: 6,
            }}
            {...props}
        >
            <Toolbar
                sx={{
                    bgcolor: 'primary.main',
                    margin: 2,
                    marginTop: 0,
                    borderRadius: 2,
                    boxShadow: 5,
                }}
            >
                <Grid
                    container
                    marginBottom={1}
                    marginTop={1}
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
                    <Grid
                        item
                        xs={12}
                    >
                        <Copyright
                            sx={{
                                color: 'white',
                            }}
                        />
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    );
}