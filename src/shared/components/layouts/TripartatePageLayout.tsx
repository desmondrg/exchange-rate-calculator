import {Card} from '@mui/material';
import * as React from 'react';

interface Props
{
    children: React.ReactElement;
    heroImageUrl: string;
}

export default function TripartatePageLayout(props: Props)
{
    return (
        <div className='page'>
            <div className='page-header' style={{backgroundImage: `url('${props.heroImageUrl}')`}}>

            </div>
            <div className='main main-raised page-delocalized'>
                <Card sx={{width: '90%', padding: '20px', minHeight: '40vh', display: 'flex', alignItems: 'center', position: 'absolute'}}>
                    {props.children}
                </Card>
            </div>
            <div className='page-bottom'>

            </div>
        </div>
    );
}