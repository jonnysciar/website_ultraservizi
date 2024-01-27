import Grid from "@mui/material/Grid";
import * as React from "react";

function Home(props) {
    return (
        <Grid
            container
            disableGutters
            sx={{
                minHeight: {lg: "100vh", xs: "70vh"},
                backgroundImage: "radial-gradient(#2c2c2d 2px, transparent 0)",
                backgroundSize: "120px 120px",
            }}
            {...props}
        >
            <Grid
                item
                xs={6}
                sx={{
                    borderBottomRightRadius: {lg: "200px", xs: "100px"},
                    backgroundImage: "radial-gradient(farthest-corner at 0px 0px, #ab1f24, #e61e25)"
                }}
            >
            </Grid>
            <Grid
                item
                xs={6}
            >
            </Grid>

            <Grid
                item
                xs={6}
            >
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    borderTopLeftRadius: {lg: "200px", xs: "100px"},
                    backgroundImage: "radial-gradient(farthest-corner at 0px 0px, #e61e25, #ab1f24)"
                }}
            >
            </Grid>
        </Grid>
    );
}

export default Home;