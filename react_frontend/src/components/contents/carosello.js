import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const items = [
    {
        name: "Deposito",
        href: "",
        img: "/images/services/deposito.jpg"
    },
    {
        name: "Edile",
        href: "",
        img: "/images/services/edile.jpg"
    },
    {
        name: "Imbiancatura",
        href: "",
        img: "/images/services/imbiancatura.jpg"
    },
    {
        name: "Piattaforma",
        href: "",
        img: "/images/services/piattaforma.jpg"
    },
    {
        name: "Sgomberi",
        href: "",
        img: "/images/services/sgomberi.jpg"
    },
    {
        name: "Traslochi",
        href: "",
        img: "/images/services/traslochi.jpg"
    },
]

function CarouselItem(props)
{
    return (
        <Container
            component="img"
            src={props.item.img}
            alt={props.item.name}
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
                        width: "100vw",
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