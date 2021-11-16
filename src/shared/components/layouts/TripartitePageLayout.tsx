import {Box, Card, Typography} from '@mui/material';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

/**
 * The Properties to feed into the Tripartite Page Layout
 * during rendering
 */
interface Props
{
    children: React.ReactElement;
    heroImageUrl: string;
    heroTitle?: string;
    heroSubtitle?: string;
    heroTitleSx?: SxProps<Theme>;
    heroSubtitleSx?: SxProps<Theme>;

}

/**
 * Three section page layout with a central section that
 * bleeds into the top section
 * @param props Properties to style the Hero of the page as well as the children to feed into the layout
 * @constructor
 */
export default function TripartitePageLayout(props: Props)
{
    const isTablet = useMediaQuery('(max-width:768px)');
    const isMobile = useMediaQuery('(max-width:480px)');


    const isTabletOrMobile = isTablet || isMobile;

    return (
        <Box className='page'>
            <Box className='page-header' sx={{height: '300px', backgroundImage: `url('${props.heroImageUrl}')`}}>

                <Box className='w-100 c-flex' sx={{height: isTabletOrMobile ? '75%' : '100%'}}>
                   {props.heroTitle && <Typography variant='h1' color='white' sx={{ textAlign: 'center', fontSize: isTabletOrMobile ? '24px' : '34px', marginBottom: '0.5em', ...props?.heroTitleSx}}>{props.heroTitle}</Typography>}
                    {props.heroSubtitle && <Typography variant='h2' color='white' sx={{textAlign: 'center', fontSize: isTabletOrMobile ? '16px' : '24px', ...props?.heroSubtitleSx}}>{props.heroSubtitle}</Typography>}
                </Box>

            </Box>
            <Box className='main main-raised page-middle'>
                <Card sx={{marginTop: isTabletOrMobile ? '-135px' : '-90px', overflow: 'visible', width: '90%', padding: '20px', minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    {props.children}
                </Card>
            </Box>
            <Box className='page-bottom'>

            </Box>
        </Box>
    );
}