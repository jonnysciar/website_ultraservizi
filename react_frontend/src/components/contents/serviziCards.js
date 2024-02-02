import * as React from "react";
import {Component} from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {CardActionArea, CardContent, CardMedia, styled} from "@mui/material";
import * as secondary from "@mui/material/styles/createPalette";
import {services} from "../structures/services";

class ServiziCards extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.service = '';
    }

    handleOpenCard(service) {
        const offset = document.getElementById('navbar').offsetHeight + 10;
        const element = document.getElementById(service);
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    render() {
        return (
            <Container
                {...this.props}
                sx={{
                    mt: 10,
                    mb: 10,
                }}
            >
                {/* Hero unit */}
                <Container
                    disableGutters
                    sx={{
                        mb: 5,
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        I nostri servizi
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
                                    maxWidth: 350
                                }}
                            >
                                <Card>
                                    <StyledCardActionArea
                                        onClick={() => this.handleOpenCard(service.id)}
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
                                            <CardMedia component='img' image={service.img}
                                                       sx={{bgcolor: 'primary.light'}}/>
                                        </CardContent>
                                    </StyledCardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        );
    }
}

const StyledCardActionArea = styled(CardActionArea)`
  && .MuiTouchRipple-child {
    background-color: ${secondary.dark};
  }
`;

export default ServiziCards;