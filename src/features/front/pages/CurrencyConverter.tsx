import * as React from 'react';
import {ICurrency, IRateConversionResult} from '../../../common/common-models';

interface Props
{

}

interface ConverterState
{
    amount: number;
    conversionResult: IRateConversionResult;
    allCurrencies: ICurrency[];
    sourceCurrency: ICurrency;
    targetCurrency: ICurrency;
    matcherOfAmountInput: {isValid: string, errorMessage: string}
}

export default class CurrencyConverter extends React.Component<Props, ConverterState>
{

    /**
     * Renders the Converter Component
     */
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined {

        return (<div></div>);
    }
}