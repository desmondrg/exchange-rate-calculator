import TripartitePageLayout from '../../../shared/components/layouts/TripartitePageLayout';
import React from 'react';
import heroImageUrl from "../../../assets/img/bg/main-hero-background.jpg";
import CurrencyConverter from './CurrencyConverter';


/**
 * The landing Page Component Used to render the Rate Converter
 */
export default function LandingPage()
{
    return (<TripartitePageLayout
            heroImageUrl={heroImageUrl}
            heroTitle='Shumba Money Rate Exchange Calculator'
            heroSubtitle='Check Local Foreign Currency Exchange Rates'>
           <CurrencyConverter/>
        </TripartitePageLayout>
    );
}