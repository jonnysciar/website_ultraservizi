import React, {Component} from 'react';
import logo from './elisabetta.jpg';
import './App.css';

class App extends Component {

  state = {};

  componentDidMount() {
    this.dadJokes()
  }

  dadJokes = () => {
    fetch('/api/allPersone')
        .then((response) => response.text())
        .then((message) => {
            let utenti = JSON.parse(message);
            let stringa = "";
            utenti.forEach((u) => {
                stringa = stringa + "\n" + u.nome;
            })
            this.setState({message: "Elisabetta"});
        });
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h3 className="App-title">{this.state.message}</h3>
          </header>
        </div>
    );
  }
}

export default App;
