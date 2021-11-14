import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import {Fab, Zoom} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppNav from '../nav/AppNav';
import {useState} from 'react';
import {DrawerNav} from '../nav/DrawerNav';
import {appConstants} from '../../../constants';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function ScrollTop(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}


export default function AppLayout(props: Props) {

    const isTablet = useMediaQuery('(max-width:768px)');
    const isMobile = useMediaQuery('(max-width:480px)');

    const isTabletOrMobile = isTablet || isMobile;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    function onToggleDrawerClicked(): void
    {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="absolute" style={{ background: 'transparent', boxShadow: 'none'}}>

                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/>
                            {!isTabletOrMobile && <AppNav onMenuItemClicked={() => {}} menuLinks={appConstants.localSiteUrls}/>}
                            {isTabletOrMobile &&
                            <IconButton onClick={onToggleDrawerClicked}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>}
                        </Toolbar>
                        <DrawerNav isOpen={isDrawerOpen} onMenuItemClicked={onToggleDrawerClicked} onCloseDrawer={onToggleDrawerClicked} menuLinks={appConstants.localSiteUrls}/>
                    </AppBar>
                </Box>
            </HideOnScroll>
                    {props.children}
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}

