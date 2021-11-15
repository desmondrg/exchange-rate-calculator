import * as React from 'react';
import {ICurrency, IRateConversionResult} from '../../../common/common-models';
import {Box, InputAdornment, TextField, Typography} from '@mui/material';
import CurrencySelectInput from '../../../shared/components/input/CurrencySelectInput';
import SwapButton from '../../../shared/components/buttons/SwapButton';
import ConvertButtonRow from '../../../shared/components/buttons/ConvertButtonRow';
import dateFormat from 'dateformat';
import {appConstants} from '../../../constants';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {appDataService} from '../../../core/services/app-data.service';
import {currencies} from '../../../core/data/AppSeedingSource';
import './CurrencyConverter.css';

interface Props
{
   sx?: SxProps<Theme>;
}

/**
 * The Converter State Object
 */
interface ConverterState
{
    isInitialConvert?: boolean;
    amount?: number;
    conversionResult?: IRateConversionResult;
    allCurrencies?: ICurrency[];
    sourceCurrency?: ICurrency;
    targetCurrency?: ICurrency;
    matcherOfAmountInput?: {isValid: boolean, errorMessage: string}
}

export default class CurrencyConverter extends React.Component<Props, ConverterState>
{

    /**
     * Called whenever a converter Component is instantiated
     * note: this function also initializes the state of the component
     * @param props the properties to pass into a converter instantiated by embedding via HTML
     */
    constructor(props: Props)
    {
        super(props);

        // set the initial state
        this.state = {
            isInitialConvert: true,
            amount: 0.0,
            conversionResult: {} as IRateConversionResult,
            allCurrencies: [],
            sourceCurrency: {} as ICurrency,
            targetCurrency: {} as ICurrency,
            matcherOfAmountInput: {isValid: true, errorMessage: ''}
        };
    }


    /**
     * Fetches Currencies from the API When the Converter Component has been mounted
     */
    componentDidMount(): void
    {
        appDataService.getCurrencies().subscribe(data => {

            console.log(`got currency data from server : ${JSON.stringify(data, null, 2)}`);

            this.setState({allCurrencies: currencies});
        });
    }

    onSelectSourceCurrency(currency: ICurrency)
    {
        console.log(`From currency selected ${JSON.stringify(currency, null, 2)}`);
        this.setState({sourceCurrency: currency});
        this.autoRunConversionIfPossible();

    }


    onSelectTargetCurrency(currency: ICurrency)
    {
        console.log(`To currency selected ${JSON.stringify(currency, null, 2)}`);
        this.setState({targetCurrency: currency});
        this.autoRunConversionIfPossible();
    }


    onSwapCurrenciesSelected()
    {
        console.log(`Swap currencies clicked!!!`)

        // only perform swapping if both currencies have non default placeholder empty objects
        if(this.state.sourceCurrency?.name && this.state.targetCurrency?.name)
        {
            // first hold onto the to / target currency before performing the basic swap algorithm
            let tempCurrency = {...this.state.targetCurrency};

            // update the to / target currency with the value of the from currency
            this.setState({targetCurrency: this.state.sourceCurrency});

            // update the from / source currency with the value of the temp currency
            this.setState({sourceCurrency: tempCurrency});

            console.log(`To currency swapped current from : ${JSON.stringify(this.state.sourceCurrency, null, 2)}  to: ${JSON.stringify(this.state.targetCurrency, null, 2)}`);

            // the convert button disappears after the first conversion therefore automatically call the convert fxn when
            // a user clicks the swap button
            // the convert button was configured to disappear for ux reasons : since users may forget to click it once
            // conversion results are displayed thereby resulting in them quoting the wrong values
            this.autoRunConversionIfPossible();
        }
    }

    /**
     * Automatically runs conversion of currencies provided
     * valid currencies are selected in both input fields
     * This may be necessary once the convert button disappears
     * after the first conversion run
     */
    autoRunConversionIfPossible()
    {
        if(this.state.sourceCurrency?.name && this.state.targetCurrency?.name)
        {
            // the convert button disappears after the first conversion therefore automatically call the convert fxn when
            // a user clicks the swap button
            // the convert button was configured to disappear for ux reasons : since users may forget to click it once
            // conversion results are displayed thereby resulting in them quoting the wrong values
            if(!this.state.isInitialConvert)
            {
                this.onConvertCurrenciesClicked();
            }
        }
    }

    onAmountInputChanged(event: any)
    {
        const value = event.target.value;
        console.log(value);

        const numericValue = parseFloat(value);
        console.log(`The float is ${numericValue}`);

        if(!numericValue)
        {
            // setMatcherOfAmountInput({isValid: false, errorMessage: 'Invalid Amount'});
        }

        this.setState({
            matcherOfAmountInput: {isValid: true, errorMessage: ''},
            amount: numericValue
        });
    }

    onConvertCurrenciesClicked(): void
    {

        if(this.state.amount !== undefined && this.state.sourceCurrency?.name && this.state.targetCurrency?.name)
        {
            const sourceConversionRate = this.state.sourceCurrency.rateToUsd / this.state.targetCurrency.rateToUsd;

            const destConversionRate = this.state.targetCurrency.rateToUsd / this.state.sourceCurrency.rateToUsd;

            const convertedAmount = this.state.amount * sourceConversionRate;


            // split the amount into two strings
            // a prefix  to represent standard representation of money i.e 2pd
            // a suffix to represent all the other figures
            const convertedAmountStr = `${convertedAmount}`;

            let indexOfPeriod = convertedAmountStr.indexOf('.');

            let convertedAmountPrefix = '';
            let convertedAmountSuffix = '';

           if(indexOfPeriod !== -1) // if there is a period
           {
                convertedAmountPrefix = convertedAmountStr?.substr(0,indexOfPeriod + 3);
                convertedAmountSuffix = convertedAmountStr?.substr(indexOfPeriod + 3,convertedAmountStr?.length - 1);
           }else{ // there is no period in the amount thus do not split the amount
               convertedAmountPrefix = convertedAmountStr;
           }


            const convResult: IRateConversionResult = {
                sourceAmount: this.state.amount,
                convertedAmount,
                convertedAmountPrefix,
                convertedAmountSuffix,
                sourceCurrency: {...this.state.sourceCurrency, crossRate: sourceConversionRate },
                targetCurrency: {...this.state.targetCurrency, crossRate: destConversionRate }
            };

            this.setState({isInitialConvert: false, conversionResult: convResult});
        }
    }


    /**
     * Clears the currently selected source currency thereby disabling all
     * conversion event listeners (such as buttons) and displays
     */
    private onClearSourceCurrency()
    {
        this.setState({sourceCurrency: {} as ICurrency});
    }

    /**
     * Clears the currently selected target currency thereby disabling all
     * conversion event listeners (such as buttons) and displays
     */
    private onClearTargetCurrency()
    {
        this.setState({targetCurrency: {} as ICurrency});
    }


    /**
     * Renders the Converter Component
     */
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined {



        return (<Box className='row w-100' sx={{...this.props?.sx}}>
            <div className='col-12 w-100'>
                <div className='row w-100 m-0'>
                    <div className='col-md-3 p-2'>
                        <TextField
                            id="amount"
                            label="Amount"
                            variant="outlined"
                            defaultValue={0.00}
                            error={!this.state.matcherOfAmountInput?.isValid} helperText={!this.state.matcherOfAmountInput?.isValid ? this.state.matcherOfAmountInput?.errorMessage : ''}
                            sx={{width: '100%'}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Typography variant='body1'>{this.state.sourceCurrency?.symbol}</Typography>
                                    </InputAdornment>
                                ),
                            }}
                            onChange={event => this.onAmountInputChanged(event)} />
                    </div>
                    <div className='col-md-4 p-2'>
                        <CurrencySelectInput
                            sx={{width: '100%'}}
                            currencies={this.state.allCurrencies ? this.state.allCurrencies : []}
                            labelId='from-currency-id'
                            labelTitle='From'
                            selectedCountryCode={this.state.sourceCurrency?.countryCode ?? ''}
                            onClearCurrency={() => this.onClearSourceCurrency()}
                            onSelectCurrency={currency => this.onSelectSourceCurrency(currency)}/>
                    </div>
                    <div className='col-md-1  c-flex p-2'>
                        <SwapButton
                            sx={{width: '60px', height: '60px'}}
                            onSwapClicked={() => this.onSwapCurrenciesSelected()}/>
                    </div>
                    <div className='col-md-4 p-2'>
                        <CurrencySelectInput
                            sx={{width: '100%'}}
                            currencies={this.state.allCurrencies ? this.state.allCurrencies : []}
                            labelId='to-currency-id'
                            labelTitle='To'
                            selectedCountryCode={this.state.targetCurrency?.countryCode ?? ''}
                            onClearCurrency={() => this.onClearTargetCurrency()}
                            onSelectCurrency={currency => this.onSelectTargetCurrency(currency)}/>
                    </div>
                </div>

                {this.state.isInitialConvert && <ConvertButtonRow
                    isDisabled={!this.state.matcherOfAmountInput?.isValid || !this.state.sourceCurrency?.name || !this.state.targetCurrency?.name}
                    title='Convert'
                    onClick={() => this.onConvertCurrenciesClicked()} />}


                {this.state.conversionResult && this.state.sourceCurrency?.name && this.state.targetCurrency?.name && this.state.conversionResult?.sourceCurrency?.name && this.state.conversionResult.targetCurrency?.name &&

                    <div className='row w-100'>
                    <div className='col-md-6'>
                        <div className='row mb-2'>
                            <Typography variant='h6'>{this.state.conversionResult?.sourceAmount} {this.state.conversionResult?.sourceCurrency?.namePlural}  = </Typography>
                            <Box sx={{display: 'flex'}}>
                                <Box sx={{display: 'flex', marginRight: '5px'}}>
                                <Typography variant='h5'>{this.state.conversionResult?.convertedAmountPrefix}</Typography>
                                <Typography variant='h5' sx={{color: 'lightgray'}}>{this.state.conversionResult?.convertedAmountSuffix}</Typography>
                                </Box>
                                <Typography variant='h5'>{this.state.conversionResult?.targetCurrency?.namePlural}</Typography>
                            </Box>

                        </div>
                        <div className='row'>
                            <Typography variant='body2'>1 {this.state.conversionResult?.sourceCurrency?.code} = {this.state.conversionResult?.sourceCurrency?.crossRate} {this.state.conversionResult?.targetCurrency?.code}</Typography>
                            <Typography variant='body2'>1 {this.state.conversionResult?.targetCurrency?.code} = {this.state.conversionResult?.targetCurrency?.crossRate} {this.state.conversionResult?.sourceCurrency?.code}</Typography>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex align-items-center'>
                        <Typography variant='body2'>{this.state.conversionResult?.sourceCurrency?.name} to {this.state.conversionResult?.targetCurrency?.name} conversion last updated {dateFormat(this.state.conversionResult?.sourceCurrency?.dateUpdated, appConstants.dateFormat)}</Typography>
                    </div>
                </div>}
            </div>
        </Box>);
    }

}