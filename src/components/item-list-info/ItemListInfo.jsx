import React from 'react'
import {Divider, ListItemText, Typography} from '@material-ui/core';
import './item-list-info.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorView from "../error";

const ListItemWDivider = ({label, text}) => {
    return (
        <div>
            <ListItemText primary={`${label} : ${text}`}/>
            <Divider/>
        </div>
    )
}
export default class ItemListInfo extends React.Component {
    swapi = new SwapiService();

    state = {
        person: {},
        loading: true
    }

    componentDidMount() {
        this.updateInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            this.updateInfo()
        }
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    };

    onItemLoaded = (person) => {
        this.setState({person, loading: false});
    };

    updateInfo() {
        const {personId} = this.props;
        if (personId) {
            this.swapi
                .getPersonById(personId)
                .then(this.onItemLoaded)
                .catch(this.onError)
        }
    }

    render() {
        const {person, loading, error} = this.state;
        const spinner = loading ? <div className='spinner'><Spinner/></div> : null;
        const personView = (!loading && !error) ? <PersonView person={person}/> : null;
        const errorView = (!loading && error) ? <ErrorView/> : null;
        const style = error ? {
            gridAutoColumns: '1fr 10fr 1fr'
        } : {
            gridAutoColumns: '10fr 1fr 20fr'
        };
        return (
            <div className='items-list' style={style}>
                {spinner}
                {errorView}
                {personView}
            </div>
        )
    }
}

const PersonView = ({person}) => {
    const {id, name, gender, birthYear, eyeColor} = person;
    return (
        <React.Fragment>
            <img className="item-list-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                 alt="#"/>
            <div className="items">
                <Typography variant='h5' style={{textAlign: 'center', marginBottom: 20}}>{name}</Typography>
                <div className='items-area'>
                    <ListItemWDivider label='Gender' text={gender}/>
                    <ListItemWDivider label='Birth year' text={birthYear}/>
                    <ListItemWDivider label='Eye color' text={eyeColor}/>
                </div>
            </div>
        </React.Fragment>
    )
}