import Grid from "@mui/material/Grid";
import * as React from "react";
import Typography from "@mui/material/Typography";

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
                "
            </Typography>
            <Typography
                {...props}
                color="white"
            >
                Professionalità e cura per i vostri ambienti
            </Typography>
            <Typography
                {...props}
                color="primary.main"
            >
                "
            </Typography>
        </Grid>
    )
}

function Home(props) {
    return (
        <Grid
            container
            disableGutters
            sx={{
                height: {lg: "100vh", xs: "70vh"},
                backgroundImage: "radial-gradient(#2c2c2d 2px, transparent 0)",
                backgroundSize: "120px 120px",
                mb: 5
            }}
            {...props}
        >
            <Grid
                container
                item
                xs={6}
                sx={{
                    height: {lg: "50vh", xs: "35vh"},
                    borderBottomRightRadius: {lg: "200px", xs: "100px"},
                    backgroundImage: "radial-gradient(farthest-corner at 0px 0px, #ab1f24, #e61e25)"
                }}
            >
                <Grid
                    container
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        minHeight: {xs: "20vh", sm: ""}
                    }}
                >
                    <HomeText variant="h2"
                              align="center"
                              component="p"
                              sx={{
                                  fontWeight: 'bold',
                                  fontFamily: 'UltraServiziFont',
                                  fontSize: {xs: "11vw", sm: "5vw"},
                              }} />

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
                            fontSize: "2vw",
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