import React from 'react';
import icon from "./Death-Star-icon.png";
import {Typography} from "@material-ui/core";

const ErrorView = () => {
    return (
        <div className='spinner' style={{textAlign: 'center'}}>
            <img src={icon} alt="Error icon" style={{width: 100, height: 100, color: 'tomato'}}/>
            <Typography variant='h5' style={{color: 'tomato'}} >Something gonna wrong</Typography>
            <Typography variant='h6' style={{color: 'tomato'}} >We our R2D2 to fix this situation</Typography>
            <Typography variant='h6' style={{color: 'tomato'}} >Keep calm and wait ;)</Typography>
        </div>
    )
};

export default ErrorView;