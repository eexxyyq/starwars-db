import React from 'react'
import {List, ListItemText, ListItem} from '@material-ui/core';
import './item-list.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

function ListItemLink(props) {
    return <ListItem button component="div" {...props} />;
}

export default class ItemList extends React.Component {
    swapi = new SwapiService();

    state = {
        personList: null,
        loading: true
    };

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    };

    onListLoaded = (personList) => {
        this.setState({personList, loading: false})
    };

    componentDidMount() {
        this.swapi
            .getAllPeople()
            .then(this.onListLoaded)
            .catch(this.onError)
    }


    renderItems = (arr) => {
       const style = {borderRadius: 10, textAlign: 'center'};
        return arr.map(({id, name}) => {
            return (
                <ListItemLink style={style} key={id} onClick={() => this.props.onPersonSelected(id)}>
                    <ListItemText primary={name}/>
                </ListItemLink>
            )
        })
    };

    render() {
        const {personList} = this.state;
        if (!personList) {
            return <Spinner style={{alignSelf: 'center'}}/>
        }
        return (
            <List className="main-item-list">
                {this.renderItems(personList)}
            </List>
        )
    }
}