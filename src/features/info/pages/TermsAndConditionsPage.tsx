import TripartitePageLayout from '../../../shared/components/layouts/TripartitePageLayout';
import {Typography} from '@mui/material';
import heroImageUrl from "../../../assets/img/bg/main-hero-background.jpg";

/**
 * A simple page with a disclaimer message
 */
export default function TermsAndConditionsPage()
{
    return (<TripartitePageLayout heroImageUrl={heroImageUrl} heroSubtitle='Trust the Pride' heroSubtitleSx={{fontStyle: 'italic'}}>
        <div>
            <Typography variant='h4' className='text-center mb-3'>Terms and Conditions</Typography>
            <Typography variant='body1'>The rate conversions carried out by this app are for demonstration purposes only. Desmond Rgwaringesu or Shumba Money will not be held liable for any financial lose resulting from use of this application.</Typography>
        </div>
    </TripartitePageLayout>);
}

