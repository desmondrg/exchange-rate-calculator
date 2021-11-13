import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import * as React from 'react';

import cssClasses from './AppNav.module.css';

export default function AppNav()
{
    return (
        <ul className={cssClasses.mainNav}>
        <li>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/'>Home</Link>
            </Typography>
        </li>
        <li>
            <Link to='/info/about-us'>About</Link>
        </li>
        <li>
            <Link to='/info/terms-and-conditions'>Terms</Link>
        </li>
    </ul>);
}