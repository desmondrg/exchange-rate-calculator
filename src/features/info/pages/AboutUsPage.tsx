import TripartitePageLayout from '../../../shared/components/layouts/TripartitePageLayout';
import {Link, List, ListItem, Typography} from '@mui/material';
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
                  <Typography variant='h4' className='text-center mb-3'>About the Currency Converter</Typography>
                  <Typography variant='body1'>The exchange rate calculator is a React app by <Link href={appConstants.author.website} sx={{textDecoration: 'none'}} target='_blank'>{appConstants.author.name}</Link>. It showcases a mobile friendly React App with the following features: </Typography>
                   <ul>
                           <li>Input validation for the entered amount</li>
                           <li>A conversion button that only gets activated if all form values are valid</li>
                           <li>Reactive / automatic currency conversion upon changes to form data</li>
                           <li>Swapping of selected currencies for rate conversion</li>
                           <li>Autocomplete search inputs for currencies</li>
                           <li>A <i>scroll to top</i> button</li>
                           <li>
                               <li>Mobile Responsive Design with the following behaviours and features:</li>
                               <ul>
                                   <li>A Drawer Nav Menu that slides in from the left</li>
                                   <li>A currency swapping button that rotates on mobile devices to display accurate currency swapping information</li>
                                   <li>Footer copyright and attribution text that is centralised on mobile only</li>
                               </ul>
                           </li>

                    </ul>
                </div>
            </TripartitePageLayout>);
};