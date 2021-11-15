import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import React from 'react';


export const appConstants = {
  dateFormat: 'dddd, mmmm dS, yyyy, h:MM:ss TT',
  localSiteUrls: [
    {title: 'Home', path: '/', icon: (<HomeIcon />)},
    {title: 'About', path: '/info/about-us', icon: (<InfoIcon />)},
    {title: 'Terms', path: '/info/terms-and-conditions', icon: (<WarningAmberIcon />)},
  ]
};
