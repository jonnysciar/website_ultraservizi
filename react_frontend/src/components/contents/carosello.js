import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const items = [
    {
        name: "Deposito",
        href: "",
        img: "images/services/deposito_16-9.jpg"
    },
    {
        name: "Edile",
        href: "",
        img: "images/services/edile_16-9.jpg"
    },
    {
        name: "Imbiancatura",
        href: "",
        img: "images/services/imbiancatura_16-9.jpg"
    },
    {
        name: "Piattaforma",
        href: "",
        img: "images/services/piattaforma_16-9.jpg"
    },
    {
        name: "Sgomberi",
        href: "",
        img: "images/services/sgomberi_16-9.jpg"
    },
    {
        name: "Traslochi",
        href: "",
        img: "images/services/traslochi_16-9.jpg"
    },
]

function CarouselItem(props)
{
    return (
        <Container
            disableGutters
            component="img"
            src={props.item.img}
            alt={props.item.name}
            sx={{
                minWidth: {xs: "100vw", lg: "80vw"},
            }}
        >
        </Container>
    )
}

function Carosello(props)
{
    return (
        <Grid
            container
            {...props}
        >
            <Grid
                item
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Carousel
                    sx={{
                        minWidth: {xs: "100vw", lg: "80vw"},
                    }}
                    navButtonsAlwaysVisible
                    indicatorContainerProps={{
                        style: {
                            zIndex: 1,
                            marginTop: "-100px",
                            position: "relative"
                        }
                    }}
                >
                    {
                        items.map( (item, i) => <CarouselItem item={item} /> )
                    }
                </Carousel>
            </Grid>
        </Grid>
    )
}

export default Carosello;