import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";

function ChiSiamo(props) {
    return (
        <Grid
            container
            sx={{
                border: 3,
                borderColor: 'secondary.main',
                justifyContent: 'center',
                mt: 10,
                mb: 10,
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
                    pt: 3,
                    pb: 3,
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
                    Ultra Servizi è una ditta specializzata nei seguenti settori: <b>traslochi</b>, <b>sgomberi</b>,
                    <b> imbiancatura</b>, <b>piccoli lavori edili</b> e <b>servizi di autotrasporti</b>.
                    Offriamo anche servizi di <b>deposito</b>, <b>custodia dei vostri beni</b> e
                    <b> noleggio piattaforme aeree</b>.<br/>
                    Un team specializzato si prenderà cura dei vostri ambienti e dei vostri beni per tutta
                    la durata del servizio.
                    Il nostro obiettivo è fornirvi un <b>lavoro rapido</b> e <b>professionale</b> garantendovi un risultato finale
                    soddisfacente.<br/>
                    Operiamo nelle province di Como, Lecco, Varese, Milano, Monza e Brianza.
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