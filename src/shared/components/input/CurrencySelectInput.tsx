import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import {SelectChangeEvent} from '@mui/material/Select';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
//@ts-ignore
import ReactCountryFlag from 'react-country-flag'
import {Autocomplete, AutocompleteChangeReason, InputAdornment, TextField} from '@mui/material';
import {SyntheticEvent} from 'react';
import './CurrencySelectInput.css';
import {ICurrency} from '../../../core/data/app-data-models';

/**
 * The Properties to feed into the Currency Select Input
 * during rendering
 */
interface Props
{
    labelTitle: string;
    labelId: string;
    currencies: ICurrency[];
    selectedCountryCode: string | null;
    sx: SxProps<Theme>;

    onSelectCurrency(currency: ICurrency): void;
    onClearCurrency(): void;

}

/**
 * The state of the Currency Select Input
 */
interface CurrencySelectInputState
{
    localCurrencies: ICurrency[];
    currencyToSelect: ICurrency;
}

/**
 * The input for selecting a single currency from a list of currencies
 * supplied to a user. The converter
 * uses the class component syntax for easier state management
 */
export default class CurrencySelectInput extends React.Component<Props, CurrencySelectInputState>
{
    constructor(props: Props)
    {
        super(props);

        this.state =
            {
                currencyToSelect: {} as ICurrency,
                localCurrencies: []
            };
    }


    onOptionSelected(event: SyntheticEvent<Element, Event>,
                     value: ICurrency | null,
                     reason: AutocompleteChangeReason)
     {


         console.log( `AutocompleteChangeReason value begin :`);
         console.log(`AutocompleteChangeReason ${reason}`);

         console.log( `Autocomplete value begin :`);
         console.log(value);

         switch(reason)
         {
             case 'createOption':

                 break;
             case 'selectOption':

                 if(value)
                 {
                     this.props.onSelectCurrency(value);
                 }

                 break;
             case 'removeOption':
                 break;
             case 'clear':
                 this.props.onClearCurrency();
                 break;
             case 'blur':
                 break;

         }

    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined {

         return (
            <Box sx={{ minWidth: 120, ...this.props?.sx }}>
                <Autocomplete
                    disablePortal
                    id={this.props.labelId}
                    options={this.props.currencies}
                    sx={{ width: '100%' }}
                    getOptionLabel={option => `${option.code} - ${option.name}`}
                    onChange={(
                        event,
                        value,
                        reason, details) => this.onOptionSelected(event, value, reason)}
                    renderOption={(props, option: ICurrency, state) => {

                         return (
                             <li {...props} className='my-1'>
                                 <div className='row option-row'>
                                     <div className='col-2'>
                                         {option.name &&
                                         <ReactCountryFlag
                                             countryCode={option.countryCode}
                                             svg
                                             style={{
                                                 width: '2em',
                                                 height: '2em',
                                                 borderRadius: '0.5em'
                                             }}
                                             title={option.countryCode}
                                         />
                                         }
                                     </div>
                                     <div className='col-8'>
                                         <span>{option.code} - {option.name}</span>
                                     </div>
                                 </div>
                             </li>

                            );
                        }
                    }
                    renderInput={(params) =>
                        <TextField {...params}
                                   label={this.props.labelTitle}
                                   InputProps={{
                                       ...params.InputProps,
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               {this.props.selectedCountryCode &&
                                               <ReactCountryFlag
                                                   countryCode={this.props.selectedCountryCode}
                                                   svg
                                                   style={{
                                                       width: '2em',
                                                       height: '2em',
                                                       borderRadius: '0.5em'
                                                   }}
                                                   title={this.props.selectedCountryCode}
                                               />}
                                           </InputAdornment>
                                       ),
                                   }}
                        />}
                />

            </Box>
        );
    }
}
