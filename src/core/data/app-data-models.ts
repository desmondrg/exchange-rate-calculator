/**
 * A Currency showing standardized
 * Currency information modeling
 * real life currencies
 */
import React from 'react';

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

/**
 * A Currency that contains a cross rate
 * to be used when converting from one
 * currency to another via an intermediate
 * currency such as the US Dollar
 */
export interface ICrossRateCurrency extends ICurrency
{
    crossRate: number;
}

/**
 * The Result of converting a currency
 * from the source currency to the desired target
 * currency via an intermediate
 * currency such as the US Dollar
 */
export interface IRateConversionResult
{
    sourceAmount: number,
    convertedAmount: number,
    convertedAmountPrefix: string,
    convertedAmountSuffix: string,
    sourceCurrency: ICrossRateCurrency,
    targetCurrency: ICrossRateCurrency
}


/**
 * Used as a model for storing information
 * that can be used to render links
 * in a nav bar
 */
export interface IMenuLinkItem
{
    icon: React.ReactNode;
    title: string;
    path: string;
}