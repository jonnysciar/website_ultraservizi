import * as React from 'react';
import {Button} from "@mui/material";
import {Component} from "react";

class Pulsante extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: 0};
    }



    render() {
        const string = "Button clicked " + this.state.clicked + " times";
        return (
            <div>
                <Button variant="contained" onClick={() => {
                    this.setState({clicked: this.state.clicked + 1});
                    console.log(this.state.clicked);
                }}>
                {string}
                </Button>
            </div>
        );
    }
}
export default Pulsante;
