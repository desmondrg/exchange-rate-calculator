import './AppNav.css';
import {Link} from 'react-router-dom';
import * as React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import {IMenuLinkItem} from '../../../core/data/app-data-models';

interface Props
{
    menuLinks: IMenuLinkItem[];
    onMenuItemClicked: () => void
}

export default function AppNav(props: Props)
{
    return (
        <List className='main-nav m-0'>
            {props.menuLinks.map((x, index) => (
                <ListItem component={Link} to={x.path}  key={x.title} onClick={props.onMenuItemClicked}>
                    <ListItemText primary={x.title}  />
                </ListItem>
            ))}
    </List>);
}