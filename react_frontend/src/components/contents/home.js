import * as React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function HomeText(props) {
    return (
        <Grid
            container
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Typography
                {...props}
                color="primary.main"
            >
                U
            </Typography>
            <Typography
                {...props}
                color="white"
            >
                ltra&nbsp;<br/>
            </Typography>
            <Typography
                {...props}
                color="primary.main"
            >
                S
            </Typography>
            <Typography
                {...props}
                color="white"
            >
                ervizi
            </Typography>
        </Grid>
    )
}

function HomeDesc(props) {
    let props_lg = JSON.parse(JSON.stringify(props));
    let props_xs = JSON.parse(JSON.stringify(props));
    props_lg.sx.display = {xs: "none", lg: "block"};
    props_xs.sx.display = {xs: "block", lg: "none"};
    return (
        <Container
            disableGutters
            sx={{
                display: "flex",
                flexDirection: {xs: "column", lg: "row"},
                justifyContent: {xs: "flex-start", lg: "center"},
                alignItems: "center"
            }}
        >
            {/* Large description */}
            <Typography
                {...props_lg}
                color="primary.main"
            >
                "
            </Typography>
            <Typography
                {...props_lg}
                color="white"
            >
                Professionalità e cura per i vostri ambienti
            </Typography>
            <Typography
                {...props_lg}
                color="primary.main"
            >
                "
            </Typography>

            {/* Extra Small description */}
            <Container
                disableGutters
                sx={{
                    display: {xs: "inline-flex", lg: "none"},
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    {...props_xs}
                    color="primary.main"
                >
                    "
                </Typography>
                <Typography
                    {...props_xs}
                    color="white"
                >
                    Professionalità e cura<br/>
                </Typography>
            </Container>
            <Container
                disableGutters
                sx={{
                    display: {xs: "inline-flex", lg: "none"},
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    {...props_xs}
                    color="white"
                >
                    per i vostri ambienti
                </Typography>
                <Typography
                    {...props_xs}
                    color="primary.main"
                >
                    "
                </Typography>
            </Container>
        </Container>
    )
}

function Home(props) {
    return (
        <Grid
            container
            sx={{
                height: {xs: "70vh", lg: "100vh"},
                backgroundImage: "radial-gradient(#2c2c2d 2px, transparent 0)",
                backgroundSize: "120px 120px",
                mb: 10
            }}
            {...props}
        >
            <Grid
                container
                item
                xs={6}
                sx={{
                    height: {xs: "35vh", lg: "50vh"},
                    borderBottomRightRadius: {xs: "100px", lg: "200px"},
                    backgroundImage: "radial-gradient(farthest-corner at 0px 0px, #ab1f24, #e61e25)",
                }}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        minHeight: {xs: "20vh", sm: ""},
                    }}
                >
                    <HomeText variant="h2"
                              align="center"
                              component="p"
                              sx={{
                                  fontWeight: 'bold',
                                  fontFamily: 'UltraServiziFont',
                                  fontSize: {xs: "11vw", sm: "5vw"},
                              }}/>

                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <HomeDesc
                        variant="h4"
                        align="center"
                        component="p"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: {xs: "3vw", lg: "2vw"},
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    height: {lg: "50vh", xs: "35vh"},
                }}
            >
            </Grid>

            <Grid
                item
                xs={6}
                sx={{
                    height: {lg: "50vh", xs: "35vh"},
                }}
            >
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    height: {lg: "50vh", xs: "35vh"},
                    borderTopLeftRadius: {lg: "200px", xs: "100px"},
                    backgroundImage: "radial-gradient(farthest-corner at 0px 0px, #e61e25, #ab1f24)"
                }}
            >
            </Grid>
        </Grid>
    );
}

export default Home;