import Grid from "@mui/material/Grid";
import * as React from "react";

function Servizi(props) {
    return (
        <Grid
            container
            disableGutters
            sx={{
                minHeight: {lg: "100vh", xs: "70vh"},
                borderTop: 4,
                borderTopColor: "secondary.main",
                borderBottom: 4,
                borderBottomColor: "secondary.main",
                mt: 5,
                mb: 5,
            }}
            {...props}
        >
            {/* Traslochi */}
            <Grid
                item
                component="img"
                src="images/services/traslochi.jpg"
                alt="traslochi"
                id="traslochi"
                xs={6}
                sx={{
                    objectFit: "cover",
                    height: {lg: "50vh", xs: "35vh"},
                    borderBottomRightRadius: {lg: "200px", xs: "100px"},
                    boxShadow: 10,
                }}
            >
            </Grid>
            <Grid
                item
                xs={6}
            >
            </Grid>

            {/* Sgomberi */}
            <Grid
                item
                xs={6}
            >
            </Grid>
            <Grid
                item
                component="img"
                src="images/services/sgomberi.jpg"
                alt="sgomberi"
                id="sgomberi"
                xs={6}
                sx={{
                    objectFit: "cover",
                    height: {lg: "50vh", xs: "35vh"},
                    borderTopLeftRadius: {lg: "200px", xs: "100px"},
                    boxShadow: 10,
                }}
            >
            </Grid>

            {/* Deposito */}
            <Grid
                item
                component="img"
                src="images/services/deposito.jpg"
                alt="deposito"
                id="deposito"
                xs={6}
                sx={{
                    objectFit: "cover",
                    height: {lg: "50vh", xs: "35vh"},
                    borderBottomRightRadius: {lg: "200px", xs: "100px"},
                    boxShadow: 10,
                }}
            >
            </Grid>
            <Grid
                item
                xs={6}
            >
            </Grid>

            {/* Piattaforma */}
            <Grid
                item
                xs={6}
            >
            </Grid>
            <Grid
                item
                component="img"
                src="images/services/piattaforma.jpg"
                alt="piattaforma"
                id="piattaforma"
                xs={6}
                sx={{
                    objectFit: "cover",
                    height: {lg: "50vh", xs: "35vh"},
                    borderTopLeftRadius: {lg: "200px", xs: "100px"},
                    boxShadow: 10,
                }}
            >
            </Grid>

            {/* Imbiancatura */}
            <Grid
                item
                component="img"
                src="images/services/imbiancatura.jpg"
                alt="imbiancatura"
                id="imbiancatura"
                xs={6}
                sx={{
                    objectFit: "cover",
                    height: {lg: "50vh", xs: "35vh"},
                    borderBottomRightRadius: {lg: "200px", xs: "100px"},
                    boxShadow: 10,
                }}
            >
            </Grid>
            <Grid
                item
                xs={6}
            >
            </Grid>

            {/* Edile */}
            <Grid
                item
                xs={6}
            >
            </Grid>
            <Grid
                item
                component="img"
                src="images/services/edile.jpg"
                alt="edile"
                id="edile"
                xs={6}
                sx={{
                    objectFit: "cover",
                    height: {lg: "50vh", xs: "35vh"},
                    borderTopLeftRadius: {lg: "200px", xs: "100px"},
                    boxShadow: 10,
                }}
            >
            </Grid>
        </Grid>
    );
}

export default Servizi;