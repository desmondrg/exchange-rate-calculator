import TripartatePageLayout from '../../../shared/components/layouts/TripartatePageLayout';
import CurrencySelectInput from '../../../shared/components/input/CurrencySelectInput';
import {currencies} from '../../../core/data/AppSeedingSource';
import {ICurrency, IRateConversionResult} from '../../../core/data/DataTypes';
import {useState} from 'react';
import SwapButton from '../../../shared/components/buttons/SwapButton';
import {InputAdornment, TextField, Typography} from '@mui/material';
import ConvertButtonRow from '../../../shared/components/buttons/ConvertButtonRow';
import {appConstants} from '../../../constants';
import dateFormat from "dateformat";

export default function LandingPage()
{
    const [amount, setAmount] = useState(0.00);
    const [conversionResult, setConversionResult] = useState({} as IRateConversionResult);

    const [sourceCurrency, setSourceCurrency] = useState({} as ICurrency);
    const [targetCurrency, setTargetCurrency] = useState({} as ICurrency);
    const [matcherOfAmountInput, setMatcherOfAmountInput] = useState({isValid: true, errorMessage: ''});

    // function validateInputAmount(input: string)
    // {
    //     const float = parseFloat(input);
    //
    //     console.log(`The float is ${float}`);
    //
    //     return false;
    // }

    function onSelectSourceCurrency(currency: ICurrency)
    {
        console.log(`From currency selected ${JSON.stringify(currency, null, 2)}`);
        setSourceCurrency(currency);
    }

    function onSelectTargetCurrency(currency: ICurrency)
    {
        console.log(`To currency selected ${JSON.stringify(currency, null, 2)}`);
        setTargetCurrency(currency);

    }


    function onSwapCurrenciesSelected()
    {
        console.log(`Swap currencies clicked!!!`)

        // only perform swapping if both currencies have non default placeholder empty objects
        if(sourceCurrency?.name && targetCurrency?.name)
        {
            // first hold onto the to / target currency before performing the basic swap algorithm
            let tempCurrency = {...targetCurrency};

            // update the to / target currency with the value of the from currency
            setTargetCurrency(sourceCurrency);

            // update the from / source currency with the value of the temp currency
            setSourceCurrency(tempCurrency);

            console.log(`To currency swapped current from : ${JSON.stringify(sourceCurrency, null, 2)}  to: ${JSON.stringify(targetCurrency, null, 2)}`);

        }
    }

    function onAmountInputChanged(event: any)
    {
        const value = event.target.value;
       console.log(value);

        const numericValue = parseFloat(value);
        console.log(`The float is ${numericValue}`);

        if(!numericValue)
       {
           // setMatcherOfAmountInput({isValid: false, errorMessage: 'Invalid Amount'});
       }

        setMatcherOfAmountInput({isValid: true, errorMessage: ''});

        setAmount(numericValue);

    }

    function onConvertCurrenciesClicked(): void
    {

        const sourceConversionRate = sourceCurrency.rateToUsd / targetCurrency.rateToUsd;

        const destConversionRate = targetCurrency.rateToUsd / sourceCurrency.rateToUsd;

        const convertedAmount = amount * sourceConversionRate;

        const convResult: IRateConversionResult = {
            sourceAmount: amount,
            convertedAmount,
            sourceCurrency: {...sourceCurrency, crossRate: sourceConversionRate },
            targetCurrency: {...targetCurrency, crossRate: destConversionRate }
        }

        setConversionResult(convResult);
    }


    return (<TripartatePageLayout heroImageUrl={require('../../../assets/img/bg/main-hero-background.jpg')}>
           <div className='row w-100'>
               <div className='col-12 w-100'>
                   <div className='row w-100'>
                       <div className='col-md-3 p-2'>
                           <TextField
                               id="amount"
                               label="Amount"
                               variant="outlined"
                               error={!matcherOfAmountInput.isValid} helperText={!matcherOfAmountInput.isValid ? matcherOfAmountInput.errorMessage : ''}
                               sx={{width: '100%'}}
                               InputProps={{
                                   startAdornment: (
                                       <InputAdornment position="start">
                                           <Typography variant='body1'>{sourceCurrency?.symbol}</Typography>
                                       </InputAdornment>
                                   ),
                               }}
                               onChange={onAmountInputChanged} />
                       </div>
                       <div className='col-md-4 p-2'>
                           <CurrencySelectInput
                               sx={{width: '100%'}}
                               currencies={currencies}
                               labelId='from-currency-id'
                               labelTitle='From'
                               selectedCurrencyName={sourceCurrency.name ?? ''}
                               onSelectCurrency={onSelectSourceCurrency}/>
                       </div>
                       <div className='col-md-1  c-flex p-2'>
                           <SwapButton
                               sx={{width: '60px', height: '60px'}}
                               onSwapClicked={onSwapCurrenciesSelected}/>
                       </div>
                       <div className='col-md-4 p-2'>
                           <CurrencySelectInput
                               sx={{width: '100%'}}
                               currencies={currencies}
                               labelId='to-currency-id'
                               labelTitle='To'
                               selectedCurrencyName={targetCurrency.name ?? ''}
                               onSelectCurrency={onSelectTargetCurrency}/>
                       </div>
                   </div>

                   <ConvertButtonRow isDisabled={!matcherOfAmountInput.isValid || !sourceCurrency?.name || !targetCurrency.name} title='Convert' onClick={onConvertCurrenciesClicked} />

                   {conversionResult?.sourceCurrency?.name && conversionResult.targetCurrency?.name &&
                   <div className='row w-100'>
                      <div className='col-md-6'>
                          <div className='row mb-2'>
                              <Typography variant='h6'>{conversionResult.sourceAmount} {conversionResult.sourceCurrency.namePlural}  = </Typography>
                              <Typography variant='h5'>{conversionResult.convertedAmount} {conversionResult.targetCurrency.namePlural}</Typography>
                          </div>
                          <div className='row'>
                              <Typography variant='body2'>1 {conversionResult.sourceCurrency.code} = {conversionResult.sourceCurrency.crossRate} {conversionResult.targetCurrency.code}</Typography>
                              <Typography variant='body2'>1 {conversionResult.targetCurrency.code} = {conversionResult.targetCurrency.crossRate} {conversionResult.sourceCurrency.code}</Typography>
                          </div>
                      </div>
                       <div className='col-md-6 d-flex align-items-center'>
                           <Typography variant='body2'>{conversionResult.sourceCurrency.name} to {conversionResult.targetCurrency.name} conversion last updated {dateFormat(conversionResult.sourceCurrency.dateUpdated, appConstants.dateFormat)}</Typography>
                       </div>
                   </div>}
               </div>
           </div>
        </TripartatePageLayout>
    );
}