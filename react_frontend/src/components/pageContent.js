import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {CardActionArea, CardContent, CardMedia, styled} from "@mui/material";
import theme from "./theme";
import img from "../images/placeholder.png";
import {ServizioDialog} from "./dialogs";
import {Component} from "react";

const services = [
    {
        title: 'Traslochi',
        image: img,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n' +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        title: 'Trasporti',
        image: img,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n' +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        title: 'Sgomberi',
        image: img,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n' +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        title: 'Servizio scala',
        image: img,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n' +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        title: 'Servizio deposito',
        image: img,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n' +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        title: 'Piccoli lavori domestici',
        image: img,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n' +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
];

class PageServizi extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.service = '';
    }

    handleOpenCard(service) {
        this.service = service;
        this.setState({open: true});
    }

    handleCloseCard() {
        this.setState({open: false});
    }

    render() {
        return (
            <Container>
                {/* Hero unit */}
                <Container disableGutters maxWidth="sm" sx={{pt: 6, pb: 6}}>
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
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
                        {services.map((service) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid
                                item
                                key={service.title}
                                sx={{
                                    width: 350,
                                }}
                            >
                                <Card>
                                    <StyledCardActionArea
                                        onClick={() => this.handleOpenCard(service)}
                                    >
                                        <CardHeader
                                            title={service.title}
                                            titleTypographyProps={{align: 'center'}}
                                            subheaderTypographyProps={{
                                                align: 'center',
                                            }}
                                            sx={{
                                                bgcolor: 'secondary.main',
                                                color: 'white'
                                            }}
                                        />
                                        <CardContent>
                                            <CardMedia component='img' image={service.image}
                                                       sx={{bgcolor: 'primary.light'}}/>
                                        </CardContent>
                                    </StyledCardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <ServizioDialog open={this.state.open} onClose={() => this.handleCloseCard()} service={this.service}/>
            </Container>
        );
    }
}

class PageChiSiamo extends Component {
    render() {
        return (
            <Container>
                Chi Siamo
            </Container>
        );
    }
}

class PageContattaci extends Component {
    render() {
        return (
            <Container>
                Contattaci
            </Container>
        );
    }
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
    return pages[props.page];
}

const StyledCardActionArea = styled(CardActionArea)`
  && .MuiTouchRipple-child {
    background-color: ${theme.palette.secondary.dark};
  }
`;

const pages = {
    'Chi siamo': <PageChiSiamo />,
    'I nostri servizi': <PageServizi/>,
    'Contattaci': <PageContattaci />,
};

export {PageContent, Copyright};