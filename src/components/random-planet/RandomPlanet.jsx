import React from 'react'
import './random-planet.css'
import SwapiService from "../../services/swapi-service";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Spinner from "../spinner/";
import ErrorView from "../error";

export default class RandomPlanet extends React.Component {
    constructor(props) {
        super(props);
        this.updatePlanet();
    }

    swapi = new SwapiService();

    state = {
        planet: {},
        loading: true
    };
    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    };

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapi.getPlanetById(id).then(this.onPlanetLoaded).catch(
            this.onError
        );
    };

    render() {
        const {planet, loading, error} = this.state;
        const spinner = loading ? <div className='spinner'><Spinner /></div> : null;
        const planetView = (!loading && !error) ? <PlanetView planet={planet}/> : null;
        const errorView = (!loading && error) ? <ErrorView /> : null;
        const style = error ? {
            gridAutoColumns: '1fr 10fr 1fr'
        } : {
            gridAutoColumns: '10fr 1fr 10fr'
        };

        return (
            <div className="random-planet-info" style={style}>
                {spinner}
                {planetView}
                {errorView}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, period, diameter} = planet;
    return (
        <React.Fragment>
            <img className="random-planet-img"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            <div className='contentinfo'>
                <Typography variant="h3" style={{marginBottom: 10}}>{name}</Typography>
                <Divider/>
                <Typography variant="h5">Population: {population}</Typography>
                <Divider/>
                <Typography variant="h5">Rotation period: {period}</Typography>
                <Divider/>
                <Typography variant="h5">Diameter: {diameter}</Typography>
                <Divider/>
            </div>
        </React.Fragment>
    )
};