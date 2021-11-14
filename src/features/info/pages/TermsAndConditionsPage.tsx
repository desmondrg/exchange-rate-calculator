import TripartatePageLayout from '../../../shared/components/layouts/TripartatePageLayout';
import {Typography} from '@mui/material';
import heroImageUrl from "../../../assets/img/bg/main-hero-background.jpg";

export default function TermsAndConditionsPage()
{
    return (<TripartatePageLayout heroImageUrl={heroImageUrl}>
        <div>
            <Typography variant='h4' className='text-center mb-3'>Terms and Conditions</Typography>
            <Typography variant='body1'>The rate conversions carried out by this app are for demonstration purposes only. Desmond Rgwaringesu or Shumba Money will not be held liable for any financial lose resulting from use of this application.</Typography>
        </div>
    </TripartatePageLayout>);
}

