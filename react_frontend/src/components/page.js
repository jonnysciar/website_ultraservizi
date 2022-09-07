import {Component} from "react";
import Navbar from "./navbar";
import {PageContent} from "./pageContent";
import Container from "@mui/material/Container";
import Footer from "./footer";

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {page: 'I nostri servizi'};
    }

    onChangePage(page) {
        this.setState({page: page});
    }

    render() {
        return (
            <Container disableGutters maxWidth sx={{display: 'flex', flexDirection: 'column'}}>
                <Navbar
                    onChangePage={(page) => this.onChangePage(page)}
                />
                <PageContent page={this.state.page}/>
                <Footer />
            </Container>
        );
    }
}

const pages = ['Chi siamo', 'I nostri servizi', 'Contattaci'];

export {Page, pages};