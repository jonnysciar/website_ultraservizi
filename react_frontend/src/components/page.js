import Navbar from "./structures/navbar";
import PageContent from "./structures/pageContent";
import Container from "@mui/material/Container";
import Footer from "./structures/footer";

function Page(props) {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
            {...props}
        >
            <Navbar
                pages={pages}
                id='navbar'
            />
            <PageContent
                disableGutters
                maxWidth={false}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    alignContent: 'center',
                }}
            />
            <Footer/>
        </Container>
    );
}

const pages = [
    {
        name: 'Home',
        section: 'home',
    },
    {
        name: 'Chi siamo',
        section: 'chi',
    },
    {
        name: 'I nostri servizi',
        section: 'servizi',
    },
    {
        name: 'Contatti',
        section: 'contatti',
    }
];

export {Page, pages};