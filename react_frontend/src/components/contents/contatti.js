import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import * as React from "react";
import {styled} from "@mui/material";
import Button from "@mui/material/Button";
import * as secondary from "@mui/material/styles/createPalette";

function Contatti(props) {
    return (
        <Grid
            container
            marginBottom={1}
            marginTop={1}
            sx={{
                bgcolor: 'primary.main',
                borderRadius: 10,
                mt: 10,
                mb: 10,
                pt: 4,
                pb: 4,
                maxWidth: {xs: "80%", lg: "lg"},
            }}
            {...props}
        >
            <Grid
                item
                xs={12}
            >
                <Typography variant="h4" align="center" color="white" component="p" sx={{fontWeight: 'bold',}}>
                    Contattaci come vuoi tu!
                </Typography>
                <Typography variant="h6" align="center" color="white" component="p"
                            sx={{fontWeight: 'regular', mt: 4,}}>
                    Ti risponderemo al più presto
                </Typography>
            </Grid>

            <Grid
                item
                xs={12}
            >
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        alignContent: 'center'
                    }}
                >
                    <StyledButton
                        onClick={() => {
                            window.location.href = "https://api.whatsapp.com/send?phone=393665260226"
                        }}
                        style={{background: 'white'}}
                        sx={{
                            mt: 2,
                            pt: 1,
                            pb: 1,
                            borderRadius: 10,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'secondary.main',
                        }}
                    >
                        <WhatsAppIcon/>
                        <Typography
                            component="p"
                            sx={{
                                color: 'primary.main',
                                ml: 1,
                                justifyContent: 'center',
                            }}
                        >
                            Whatsapp
                        </Typography>
                    </StyledButton>

                    <StyledButton
                        onClick={() => {
                            window.location.href = "tel:+393665260226"
                        }}
                        style={{background: 'white'}}
                        sx={{
                            mt: 4,
                            pt: 1,
                            pb: 1,
                            borderRadius: 10,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'secondary.main',
                        }}
                    >
                        <PhoneIcon/>
                        <Typography
                            component="p"
                            sx={{
                                color: 'primary.main',
                                ml: 1,
                                justifyContent: 'center',
                            }}
                        >
                            +39 366 526 0226
                        </Typography>
                    </StyledButton>

                    <StyledButton
                        onClick={() => {
                            window.location.href = "mailto:pronto.ultraservizi@gmail.com"
                        }}
                        style={{background: 'white'}}
                        sx={{
                            mt: 4,
                            pt: 1,
                            pb: 1,
                            borderRadius: 10,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'secondary.main',
                        }}
                    >
                        <AlternateEmailIcon/>
                        <Typography
                            component="p"
                            sx={{
                                color: 'primary.main',
                                ml: 1,
                                justifyContent: 'center',
                            }}
                        >
                            pronto.ultraservizi@gmail.com
                        </Typography>
                    </StyledButton>
                </Container>
            </Grid>

        </Grid>
    );
}

const StyledButton = styled(Button)`
  && .MuiTouchRipple-child {
    background-color: ${secondary.dark};
  }
`;

export default Contatti;