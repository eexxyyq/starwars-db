import React from 'react'
import './random-planet.css'
import PlanetInfo from "./planet-info";

const RandomPlanet = () => {
    return (
        <div className="random-planet">
            <img className="random-planet-img" src="https://starwars-visualguide.com/assets/img/planets/2.jpg" alt="#"/>
            <PlanetInfo className="random-planet-info"/>
        </div>
    )
}
export default RandomPlanet;