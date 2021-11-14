import {Link} from '@mui/material';
import './AppFooter.css';

export default function AppFooter()
{
    return (<div className='footer'>
        <div className='copyright'>
           Copyright &copy;{new Date().getFullYear()} all rights reserved
        </div>
        <div className='attribution'>
            Site by <Link href='https://zw.linkedin.com/in/desmond-rgwaringesu-83595798' sx={{textDecoration: 'none'}}>Desmond RG</Link>
        </div>
    </div>);
}