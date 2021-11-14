import TripartatePageLayout from '../../../shared/components/layouts/TripartatePageLayout';
import {Typography} from '@mui/material';

export default function AboutUsPage()
{
    return (<TripartatePageLayout heroImageUrl={require('../../../assets/img/bg/main-hero-background.jpg')}>
                <div>
                  <Typography variant='h4' className='text-center mb-3'>About the Rate Converter</Typography>
                  <Typography variant='body1'>The exchange rate calculator is a React app by Desmond Rgwaringesu. It showcases a mobile friendly React App with the following features: </Typography>
              </div>
            </TripartatePageLayout>);
};