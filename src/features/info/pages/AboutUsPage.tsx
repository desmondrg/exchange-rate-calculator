import TripartitePageLayout from '../../../shared/components/layouts/TripartitePageLayout';
import {Typography} from '@mui/material';
import heroImageUrl from "../../../assets/img/bg/main-hero-background.jpg";


export default function AboutUsPage()
{
    return (<TripartitePageLayout heroImageUrl={heroImageUrl}>
                <div>
                  <Typography variant='h4' className='text-center mb-3'>About the Rate Converter</Typography>
                  <Typography variant='body1'>The exchange rate calculator is a React app by Desmond Rgwaringesu. It showcases a mobile friendly React App with the following features: </Typography>
              </div>
            </TripartitePageLayout>);
};