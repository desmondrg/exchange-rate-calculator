import useMediaQuery from '@mui/material/useMediaQuery';
import {Button} from '@mui/material';

interface Props
{
    onClick: () => void;
    isDisabled: boolean;
    title: string;
}

export default function ConvertButtonRow(props: Props)
{
    const isMatch = useMediaQuery('(max-width:768px)');

    return(<div className={'w-100 my-2 px-2 ' + (isMatch ? 'c-flex' : 'd-flex justify-content-end')}>
            <Button variant="contained" onClick={props.onClick} disabled={props.isDisabled}>{props.title}</Button>
    </div>);
}