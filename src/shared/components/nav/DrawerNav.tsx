import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, useMediaQuery} from '@mui/material';
// import AppNav from './AppNav';
// import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from 'react-router-dom';
import {IMenuLinkItem} from '../../../core/data/app-data-models';

/**
 * The Properties to feed into the Drawer Nav
 * during rendering
 * */
interface Props
{
    isOpen: boolean;
    menuLinks: IMenuLinkItem[];
    onMenuItemClicked: () => void
    onCloseDrawer:() => void
}

const container = window !== undefined ? () => window.document.body : undefined;

/**
 * The Nav menu for Mobile users of the App. The menu appears as a drawer
 * that slides in from the left side of the device
 * @param props Properties to open or close the drawer as well as provide link information
 */
export function DrawerNav(props: Props)
{
    // const isTablet = useMediaQuery('(max-width:768px)');
    const isMobile = useMediaQuery('(max-width:480px)');

    return (<Drawer open={props.isOpen}
                    variant="temporary"
                    container={container}
                    onClose={props.onCloseDrawer}
                    PaperProps={{sx:{width: isMobile ?  '50%' : '200px'}}}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}>
        <div>
            <Toolbar />
            <Divider />
            <List>
                {props.menuLinks.map((x, index) => (
                    <ListItem button component={Link} to={x.path} key={x.title} onClick={props.onMenuItemClicked}>
                        <ListItemIcon>
                            {x.icon}
                        </ListItemIcon>
                        <ListItemText primary={x.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    </Drawer>);
}