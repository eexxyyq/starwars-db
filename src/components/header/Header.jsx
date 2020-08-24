import React from 'react'
import {Typography, Button} from "@material-ui/core";
import './header.css'

const Header = () => {
    const style = {
        fontSize: 25
    }
    return (
        <div className="Header">
            <Typography variant='h3' style={{marginLeft: 40, marginTop:  10, marginBottom: 5}}>StarDB</Typography>
            <div className="buttons">
                <Button style={style}>People</Button>
                <Button style={style}>Planets</Button>
                <Button style={style}>Starships</Button>
            </div>
        </div>
    )
}
export default Header;