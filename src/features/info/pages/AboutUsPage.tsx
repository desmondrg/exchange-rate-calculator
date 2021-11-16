import TripartitePageLayout from '../../../shared/components/layouts/TripartitePageLayout';
import {Typography} from '@mui/material';
import heroImageUrl from "../../../assets/img/bg/main-hero-background.jpg";
import {appConstants} from '../../../constants';

/**
 * A simple page to display information about the application. The page
 * displays information such as the features of the app and the author of
 * the app.
 */
export default function AboutUsPage()
{
    return (<TripartitePageLayout heroImageUrl={heroImageUrl} heroSubtitle='Trust the Pride' heroSubtitleSx={{fontStyle: 'italic'}}>
                <div>
                  <Typography variant='h4' className='text-center mb-3'>About the Rate Converter</Typography>
                  <Typography variant='body1'>The exchange rate calculator is a React app by <a href={appConstants.author.website}>{appConstants.author.name}</a> It showcases a mobile friendly React App with the following features: </Typography>
              </div>
            </TripartitePageLayout>);
};