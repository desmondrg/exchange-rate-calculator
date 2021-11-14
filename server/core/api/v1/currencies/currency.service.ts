import * as seedingSource from '../../../../core/database/sources/AppSeedingSource';

export class CurrencyService
{
    constructor()
    {
    }

    findAll()
    {
        return seedingSource.currencies;
    }
}

export const currencyService = new CurrencyService();