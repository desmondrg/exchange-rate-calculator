import useMediaQuery from '@mui/material/useMediaQuery';
import {Button} from '@mui/material';

/**
 * Props for controlling the button nested by the Button Row
 */
interface Props
{
    onClick: () => void;
    isDisabled: boolean;
    title: string;
}

/**
 * A Mobile Responsive Row that shifts the position of the
 * Currency conversion button depending on device's screen
 * dimensions. The row centers the convert button on mobile
 * devices and it aligns the button to the right on large
 * screen devices.
 * @param props The props to control the nested button
 */
export default function ConvertButtonRow(props: Props)
{
    const isMatch = useMediaQuery('(max-width:768px)');

    return(<div className={'w-100 my-2 px-2 ' + (isMatch ? 'c-flex' : 'd-flex justify-content-end')}>
            <Button variant="contained" onClick={props.onClick} disabled={props.isDisabled}>{props.title}</Button>
    </div>);
}