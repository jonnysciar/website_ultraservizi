import * as React from 'react';
import Container from '@mui/material/Container';
import Contatti from "../contents/contatti";
import Servizi from "../contents/servizi";
import ChiSiamo from "../contents/chi_siamo";
import Home from  "../contents/home"
import ServiziCards from "../contents/serviziCards";

function PageContent(props) {
    return (
        <Container
            {...props}
        >
            <Home id='home' />
            <ChiSiamo id='chi' />
            <ServiziCards id='servizi' />
            <Servizi />
            <Contatti id='contatti' />
        </Container>
    );
}

export default PageContent;