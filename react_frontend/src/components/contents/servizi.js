import Grid from "@mui/material/Grid";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {services} from "../structures/services";
import {useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";

function TextItem(props) {
    let service = props.service;
    return (
        <Grid
            container
            item
            xs={12}
            md={6}
            sx={{
                padding: "2%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                alignContent: "space-around",
            }}
        >
            <Typography
                variant="h4"
                align="left"
                component="p"
                gutterBottom={true}
                color="primary.main"
                sx={{
                    fontWeight: 'bold',
                }}
            >
                {service.title}
            </Typography>
            <Typography
                variant="h6"
                align="left"
                component="p"
                paragraph={true}
                color="primary.main"
            >
                {service.desc}
            </Typography>
        </Grid>
    );
}

function ImgItem(props) {
    let service = props.service;
    if ('right' in props) {
        return (
            <Grid
                item
                xs={6}
                sx={{
                    height: {lg: "50vh", xs: "35vh"},
                }}
            >
                <Box
                    component="img"
                    src={service.img_md}
                    alt={service.title}
                    id={service.id}
                    sx={{
                        objectFit: "cover",
                        borderBottomRightRadius: {lg: "200px", xs: "100px"},
                        boxShadow: 10,
                        width: "100%",
                        height: "100%",
                    }}
                >
                </Box>
            </Grid>
        );
    } else if ('left' in props) {
        return (
            <Grid
                item
                xs={6}
                sx={{
                    height: {lg: "50vh", xs: "35vh"},
                }}
            >
                <Box
                    component="img"
                    src={service.img_md}
                    alt={service.title}
                    id={service.id}
                    sx={{
                        objectFit: "cover",
                        borderTopLeftRadius: {lg: "200px", xs: "100px"},
                        boxShadow: 10,
                        width: "100%",
                        height: "100%",
                    }}
                >
                </Box>
            </Grid>
        );
    }

    return (
        <Grid
            item
            xs={12}
            sx={{
                height: {lg: "50vh", xs: "35vh"},
            }}
        >
            <Box
                component="img"
                src={service.img_md}
                alt={service.title}
                id={service.id}
                sx={{
                    objectFit: "cover",
                    boxShadow: 10,
                    width: "100%",
                    height: "100%",
                }}
            >
            </Box>
        </Grid>
    );
}

function Servizi(props) {
    const theme = useTheme();
    const smallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                borderTop: 4,
                borderTopColor: "secondary.main",
                borderBottom: 4,
                borderBottomColor: "secondary.main",
                mt: 10,
                mb: 10,
            }}
        >
            <Grid
                container
                rowSpacing={smallerThanMd * 8}
                sx={{
                    minHeight: {lg: "100vh", xs: "70vh"},
                }}
                {...props}
            >
                {services.map((service, idx) => {
                    let pair = idx % 2 === 0
                    if (smallerThanMd) {
                        return (<Grid
                            container
                            item
                            key={service.id}
                        >
                            <ImgItem service={service}/>
                            <TextItem service={service}/>
                        </Grid>)
                    }
                    if (pair) {
                        return (<Grid
                            container
                            item
                            key={service.id}
                        >
                            <ImgItem service={service} right={true}/>
                            <TextItem service={service}/>
                        </Grid>)
                    } else {
                        return (<Grid
                            container
                            item
                            key={service.id}
                        >
                            <TextItem service={service}/>
                            <ImgItem service={service} left={true}/>
                        </Grid>)
                    }
                })}
            </Grid>
        </Box>
    );
}

export default Servizi;