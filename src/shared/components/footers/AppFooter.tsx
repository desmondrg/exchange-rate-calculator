import {Link} from '@mui/material';
import './AppFooter.css';
import {appConstants} from '../../../constants';

export default function AppFooter()
{
    return (<div className='footer'>
        <div className='copyright'>
           Copyright &copy;{new Date().getFullYear()} all rights reserved
        </div>
        <div className='attribution'>
            Site by <Link href={appConstants.author.website} sx={{textDecoration: 'none'}} target='_blank'>{appConstants.author.name}</Link>
        </div>
    </div>);
}