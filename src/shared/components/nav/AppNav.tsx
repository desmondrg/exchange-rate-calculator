import './AppNav.css';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import * as React from 'react';

export default function AppNav()
{
    return (
        <ul className='main-nav'>
        <li>
           <Link to='/'>
               <Typography variant="h6" component="span">
                   Home
               </Typography>
           </Link>
        </li>
        <li>
            <Link to='/info/about-us'>
                <Typography variant="h6" component="span">
                    About
                </Typography>
            </Link>
        </li>
        <li>
            <Link to='/info/terms-and-conditions'>
                <Typography variant="h6" component="span">
                    Terms
                </Typography>
            </Link>
        </li>
    </ul>);
}