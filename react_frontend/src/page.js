import {Component} from "react";
import Navbar from "./navbar";

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {page: ''};
    }

    onChangePage(page) {
        this.setState({page: page});
    }

    render() {
        return (
            <div>
                <Navbar
                    onChangePage={(page) => this.onChangePage(page)}
                    sx={{order: 1}}
                />
                <p>{this.state.page}</p>
            </div>
        );
    }
}

const pages = ['Chi siamo', 'I nostri servizi', 'Contattaci'];

export {Page, pages};