import React from 'react'
import {List, ListItemText, ListItem} from '@material-ui/core';
import './item-list.css'
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const ItemList = () => {
    return (
        <List className="main-item-list">
            <ListItemLink href="#simple-list" style={{borderRadius: 10, textAlign: 'center'}}>
                <ListItemText primary="Luke Skywalker" />
            </ListItemLink>
            <ListItemLink href="#simple-list" style={{borderRadius: 10, textAlign: 'center'}}>
                <ListItemText primary="ObiOne Kenoobee" />
            </ListItemLink>
            <ListItemLink href="#simple-list" style={{borderRadius: 10, textAlign: 'center'}}>
                <ListItemText primary="Dart Weider" />
            </ListItemLink>
            <ListItemLink href="#simple-list" style={{borderRadius: 10, textAlign: 'center'}}>
                <ListItemText primary="Luke Skywalker" />
            </ListItemLink>
            <ListItemLink href="#simple-list" style={{borderRadius: 10, textAlign: 'center'}}>
                <ListItemText primary="ObiOne Kenoobee" />
            </ListItemLink>
            <ListItemLink href="#simple-list" style={{borderRadius: 10, textAlign: 'center'}}>
                <ListItemText primary="Dart Weider" />
            </ListItemLink>
        </List>
    )
}
export default ItemList;