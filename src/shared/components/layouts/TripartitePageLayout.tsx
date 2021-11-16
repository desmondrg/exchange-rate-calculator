import {Box, Card, Typography} from '@mui/material';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

interface Props
{
    children: React.ReactElement;
    heroImageUrl: string;
    heroTitle?: string;
    heroSubtitle?: string;
    heroTitleSx?: SxProps<Theme>;
    heroSubtitleSx?: SxProps<Theme>;

}

export default function TripartitePageLayout(props: Props)
{
    const isTablet = useMediaQuery('(max-width:768px)');
    const isMobile = useMediaQuery('(max-width:480px)');


    const isTabletOrMobile = isTablet || isMobile;

    return (
        <div className='page'>
            <Box className='page-header' sx={{height: '300px', backgroundImage: `url('${props.heroImageUrl}')`}}>

                <Box className='w-100 c-flex' sx={{height: isTabletOrMobile ? '75%' : '100%'}}>
                   {props.heroTitle && <Typography variant='h1' color='white' sx={{ textAlign: 'center', fontSize: isTabletOrMobile ? '24px' : '34px', marginBottom: '0.5em', ...props?.heroTitleSx}}>{props.heroTitle}</Typography>}
                    {props.heroSubtitle && <Typography variant='h2' color='white' sx={{textAlign: 'center', fontSize: isTabletOrMobile ? '16px' : '24px', ...props?.heroSubtitleSx}}>{props.heroSubtitle}</Typography>}
                </Box>

            </Box>
            <Box className='main main-raised page-middle'>
                <Card sx={{marginTop: isTabletOrMobile ? '-145px' : '-90px', width: '90%', padding: '20px', minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    {props.children}
                </Card>
            </Box>
            <div className='page-bottom'>

            </div>
        </div>
    );
}