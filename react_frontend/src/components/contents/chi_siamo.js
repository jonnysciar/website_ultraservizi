import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";

function ChiSiamo(props) {
    const chi_siamo = "UltraServizi è una ditta specializzata nei seguenti settori:\n" +
        "              traslochi, sgomberi, imbiancatura, piccoli lavori edili e servizi di autotrasporti.\n" +
        "              Offriamo anche servizi di custodia dei vostri beni e di noleggio piattaforme aeree.\n" +
        "              Operiamo nelle province di Como, Lecco, Varese, Milano, Monza e Brianza.\n" +
        "              Un team specializzato si prendera cura dei vostri ambienti e dei vostri beni per tutta " +
        "              la durata del servizio.\n" +
        "              Il nostro obiettivo è fornirvi un lavoro rapido e professionale garantendovi un risultato finale " +
        "              soddisfacente.";
    return (
        <Grid
            container
            marginBottom={1}
            marginTop={1}
            sx={{
                border: 3,
                borderColor: 'secondary.main',
                justifyContent: 'center',
                mt: 2,
                mb: 2,
                maxWidth: {xs: "80%", lg: "md"},
            }}
            {...props}
        >
            <Grid
                item
                xs={12}
                sx={{
                    bgcolor: 'primary.main',
                    pt: 4,
                    pb: 4,
                    borderBottom: 3,
                    borderColor: 'secondary.main',
                }}
            >
                <Typography variant="h4" align="center" color="white" component="p" sx={{fontWeight: 'bold',}}>
                    Chi siamo
                </Typography>
            </Grid>

            <Grid
                item
                xs={1}
                md={2}
                sx={{
                    bgcolor: 'white',
                }}
            >
            </Grid>
            <Grid
                item
                xs={10}
                md={8}
                sx={{
                    bgcolor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h6"
                    component="p"
                    paragraph={true}
                    sx=
                        {{
                            fontWeight: 'regular',
                            lineHeight: 2,
                            color: 'primary.main',
                            textAlign: 'center',
                            whiteSpace: 'pre-line',
                        }}
                >
                    {chi_siamo}
                </Typography>
            </Grid>
            <Grid
                item
                xs={1}
                md={2}
                sx={{
                    bgcolor: 'white',
                }}
            >
            </Grid>

        </Grid>
    );
}

export default ChiSiamo;