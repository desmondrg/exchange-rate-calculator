import './AppNav.css';
import {Link} from 'react-router-dom';
import * as React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import {IMenuLinkItem} from '../../../core/data/app-data-models';

/**
 * Properties of the AppNav
 */
interface Props
{
    menuLinks: IMenuLinkItem[];
    onMenuItemClicked: () => void
}

/**
 * The Main Nav Menu of the website
 * @param props Properties with info needed to render links as well as listen for anchor click events
 */
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