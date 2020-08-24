import React from 'react'
import {Divider, List, ListItemText, Typography} from '@material-ui/core';
import './item-list-info.css'

const ListItemWDivider = () => {
    return (
        <div>
            <ListItemText primary="Name: Luke Skywalker"/>
            <Divider />
        </div>

    )
}
const ItemListInfo = () => {
    return (
        <List className='items-list'>
            <img className="item-list-img" src="https://starwars-visualguide.com/assets/img/planets/2.jpg" alt="#"/>
            <div className="items">
                <Typography variant='h5' style={{textAlign: 'center', marginBottom: 20}}>Item name</Typography>
                <div className='items-area'>
                    <ListItemWDivider/>
                    <ListItemWDivider/>
                    <ListItemWDivider/>
                    <ListItemWDivider/>
                    <ListItemWDivider/>
                </div>
            </div>
        </List>
    )
}
export default ItemListInfo;