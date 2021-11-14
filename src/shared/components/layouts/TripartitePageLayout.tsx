import {Card, Typography} from '@mui/material';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props
{
    children: React.ReactElement;
    heroImageUrl: string;
    heroTitle?: string;
    heroSubtitle?: string;
}

export default function TripartitePageLayout(props: Props)
{
    const isTablet = useMediaQuery('(max-width:768px)');
    const isMobile = useMediaQuery('(max-width:480px)');


    const isTabletOrMobile = isTablet || isMobile;

    return (
        <div className='page'>
            <div className='page-header' style={{backgroundImage: `url('${props.heroImageUrl}')`}}>

                <div className='w-100 h-75 c-flex'>
                   {props.heroTitle && <Typography variant='h1' color='white' sx={{ textAlign: 'center', fontSize: isTabletOrMobile ? '24px' : '34px', marginBottom: '0.5em'}}>{props.heroTitle}</Typography>}
                    {props.heroSubtitle && <Typography variant='h2' color='white' sx={{textAlign: 'center', fontSize: isTabletOrMobile ? '16px' : '24px'}}>{props.heroSubtitle}</Typography>}
                </div>

            </div>
            <div className='main main-raised page-middle'>
                <Card sx={{width: '90%', padding: '20px', minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '33%'}}>
                    {props.children}
                </Card>
            </div>
            <div className='page-bottom'>

            </div>
        </div>
    );
}