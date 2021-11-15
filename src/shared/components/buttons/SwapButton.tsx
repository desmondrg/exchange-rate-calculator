import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Fab} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

/**
 * Properties for responding to swap button clicks and for
 * customizing appearance of the button
 */
interface Props
{
    onSwapClicked: () => void;
    sx: SxProps<Theme>;
}

/**
 * The button for swapping currencies on the main converter component
 * @param props The properties for laying out the button and listening to button clicks
 */
export default function SwapButton(props: Props)
{
    const isMatch = useMediaQuery('(min-width:768px)');

    return (<Fab color="primary" aria-label="add" onClick={props.onSwapClicked} sx={{...props.sx}}>
        {isMatch ?  <SwapHorizIcon /> : <SwapVertIcon />}
    </Fab>);
}