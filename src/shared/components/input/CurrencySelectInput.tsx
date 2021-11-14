import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ICurrency} from '../../../core/data/DataTypes';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
//@ts-ignore
import ReactCountryFlag from 'react-country-flag'

interface Props
{
    labelTitle: string;
    labelId: string;
    currencies: ICurrency[];
    selectedCurrencyName: string;
    sx: SxProps<Theme>;

    onSelectCurrency(currency: ICurrency): void;
}

export default function CurrencySelectInput(props: Props)
{
    let currencyToSelect = {} as ICurrency;

    // add the default currency to props for auto select of the input using an index
    const localCurrencies = [{name: ''} as ICurrency, ...props.currencies];


    // use the passed in currency name to find the currency to select
    if(localCurrencies.length)
    {
         const  currencyOrNot = localCurrencies.find(x => x.name === props.selectedCurrencyName);

         if(currencyOrNot)
         {
             currencyToSelect = currencyOrNot;
         }
        // setCurrency(currencyToSelect);
    }

    // default currency is set only once even if the component is re-rendered


    const handleChange = (event: SelectChangeEvent) => {

        const selectedCurrency = localCurrencies.find(x => x.name === event.target.value as string);

        console.log(`Selected option value : ${event.target.value} yielded currency : ${selectedCurrency}`);

        if(selectedCurrency)
        {
            props.onSelectCurrency(selectedCurrency);
        }else{

        }
    };

    return (
        <Box sx={{ minWidth: 120, ...props?.sx }}>
            <FormControl fullWidth>
                <InputLabel id={props.labelId + '-label'} >{props.labelTitle}</InputLabel>
                <Select
                    labelId={props.labelId + '-label'}
                    id={props.labelId}
                    value={currencyToSelect?.name}
                    label={props.labelTitle}
                    onChange={handleChange}
                >
                    {localCurrencies.map(x => {
                        console.log(x.name);
                       return <MenuItem key={x.code} value={x.name}>
                           <div className='row'>
                               <div className='col-2'>
                                   <ReactCountryFlag
                                       countryCode={x.countryCode}
                                       svg
                                       style={{
                                           width: '2em',
                                           height: '2em',
                                       }}
                                       title={x.countryCode}
                                   />
                               </div>
                               <div className='col-8'>
                                   <span>{x.code} - {x.name}</span>
                               </div>
                           </div>
                       </MenuItem>
                    })};
                </Select>
            </FormControl>
        </Box>
    );
}
