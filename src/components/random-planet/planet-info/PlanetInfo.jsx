import React from 'react'
import {Typography} from "@material-ui/core";
import './planet-info.css'

const PlanetInfo = () => {
    return (
        <div className="random-planet-info">
            <Typography variant="h3" style={{marginBottom: 10}}>Earth</Typography>
            <Typography variant="h5">planet description</Typography>
        </div>
    )
}
export default PlanetInfo;