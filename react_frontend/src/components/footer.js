import React from 'react';
import Typography from "@mui/material/Typography";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import Grid from "@mui/material/Grid";

function Footer(props) {
    return (
        <Grid
            container
            sx={{
                mt: 8,
                bottom: 0,
                border: 'solid',
                borderColor: 'yellow'
            }}
            {...props}
        >
            <Grid
                item
            >
                <Typography
                    variant='h6'
                    textAlign='center'
                >
                    Footer test @ 2022
                </Typography>
            </Grid>
            <Grid
                item
            >
                <WhatsAppIcon onClick={() => {console.log('Whatsapp')}}/>
            </Grid>
            <Grid
                item
            >
                <PhoneEnabledIcon />
            </Grid>
        </Grid>
    );
}

export default Footer;