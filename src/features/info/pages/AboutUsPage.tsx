import TripartitePageLayout from '../../../shared/components/layouts/TripartitePageLayout';
import {Link, Typography} from '@mui/material';
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
                  <Typography variant='body1'>The exchange rate calculator is a React app by <Link href={appConstants.author.website} sx={{textDecoration: 'none'}} target='_blank'>{appConstants.author.name}</Link>. It showcases a mobile friendly React App with the following features: </Typography>
              </div>
            </TripartitePageLayout>);
};