import * as React from 'react';
import Container from '@mui/material/Container';
import Contatti from "../contents/contatti";
import Servizi from "../contents/servizi";
import ChiSiamo from "../contents/chi_siamo";
import Home from  "../contents/home"
import Carosello from "../contents/carosello";

function PageContent(props) {
    return (
        <Container
            {...props}
        >
            <Home id='home' />
            <Carosello />
            <ChiSiamo id='chi' />
            <Servizi id='servizi'/>
            <Contatti id='contatti' />
        </Container>
    );
}

export default PageContent;