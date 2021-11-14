import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, useMediaQuery} from '@mui/material';
// import AppNav from './AppNav';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
// import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from 'react-router-dom';
import {IMenuLinkItem} from '../../../common/common-models';

interface Props
{
    isOpen: boolean;
    menuLinks: IMenuLinkItem[];
    onMenuItemClicked: () => void
    onCloseDrawer:() => void
}

const container = window !== undefined ? () => window.document.body : undefined;

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
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={x.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    </Drawer>);
}