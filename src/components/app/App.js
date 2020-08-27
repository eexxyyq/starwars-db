import React from 'react';
import './App.css';
import {CssBaseline, createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemListInfo from "../item-list-info";


export default class App extends React.Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 5
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const theme = createMuiTheme({
            palette: {
                type: "dark"
            }
        });

        return (
            <div className="App">
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Header/>
                    <RandomPlanet/>
                    <div className="item-container">
                        <ItemList className="item-list" onPersonSelected={this.onItemSelected}/>
                        <ItemListInfo className="item-list-info" personId={this.state.selectedPerson}/>
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}
