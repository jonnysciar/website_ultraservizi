import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Copyright(props) {
    return (
        <Typography
            variant='body2'
            align='center'
            {...props}
        >
            {'Copyright ©  ' + new Date().getFullYear() + ' UltraServizi.'}
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
                mt: 4,
            }}
            {...props}
        >
            <Toolbar
                sx={{
                    bgcolor: 'primary.main',
                    borderTop: 2,
                    borderTopColor: 'secondary.main',
                    margin: 2,
                    marginTop: 0,
                    borderRadius: 10,
                    boxShadow: 5,
                    display: 'flex',
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{
                    flex: '1 1',
                    }}
                >
                    <Copyright
                        sx={{
                            color: 'white',
                        }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}