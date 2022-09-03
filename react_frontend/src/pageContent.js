import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {CardActionArea} from "@mui/material";

const tiers = [
    {
        title: 'Traslochi',
        price: '0',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Trasporti',
        price: '0',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Servizio scala',
        price: '0',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
];

const pages = {
    'Chi siamo': PageChiSiamo,
    'I nostri servizi': PageServizi,
    'Contattaci': PageContattaci,
    };

function PageServizi() {
    return (
        <Container>
            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Ecco i nostri servizi
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Quickly build an effective pricing table for your potential customers with
                    this layout. It&apos;s built with default MUI components with little
                    customization.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth='lg'>
                <Grid
                    container
                    spacing={5}
                    alignItems='center'
                    justifyContent='center'
                >
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            style={{
                                minWidth: '350px',
                                maxWidth: '350px'
                            }}
                        >
                            <Card>
                                <CardActionArea
                                    onClick={() => console.log('Clicked')}
                                >
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{
                                            align: 'center',
                                        }}
                                        sx={{
                                            backgroundColor: (t) =>
                                                t.palette.mode === 'light'
                                                    ? t.palette.grey[200]
                                                    : t.palette.grey[700],
                                        }}
                                    />
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'baseline',
                                                mb: 2,
                                            }}
                                        >
                                        </Box>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography
                                                    component="li"
                                                    variant="subtitle1"
                                                    align="center"
                                                    key={line}
                                                >
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
}

function PageChiSiamo() {
    return (
        <Container>
            Chi Siamo
        </Container>
    );
}

function PageContattaci() {
    return (
        <Container>
            Contattaci
        </Container>
    );
}

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}Jonathan Sciarrabba
            {' ' + new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function PageContent(props) {
    return pages[props.page]();
}

export default PageContent;