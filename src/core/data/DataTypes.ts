export interface ICurrency
{
    name: string;
    namePlural: string;
    code: string;
    countryCode: string;
    symbol: string;
    decimalDigits: number;
    rateToUsd: number;
    dateCreated: string;
    dateUpdated: string;
}

export interface IConvertedCurrency extends ICurrency
{
    conversionRate: number;
}

export interface IRateConversionResult
{
    sourceAmount: number,
    convertedAmount: number,
    sourceCurrency: IConvertedCurrency,
    convertedCurrency: IConvertedCurrency
}