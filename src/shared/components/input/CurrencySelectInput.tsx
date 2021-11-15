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
import {ICurrency} from '../../../common/common-models';
import {Autocomplete, AutocompleteChangeReason, InputAdornment, TextField} from '@mui/material';
import {SyntheticEvent} from 'react';
import './CurrencySelectInput.css';

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

interface CurrencySelectInputState
{
    localCurrencies: ICurrency[];
    currencyToSelect: ICurrency;
}

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


        // let currencyToSelect = {} as ICurrency;

        // add the default currency to props for auto select of the input using an index
        // const localCurrencies = [{name: ''} as ICurrency, ...this.props.currencies];


        // use the passed in currency name to find the currency to select
        // if(this.state.localCurrencies?.length)
        // {
        //      const  currencyOrNot = this.state.localCurrencies?.find(x => x.name === this.props.selectedCurrencyName);
        //
        //      if(currencyOrNot)
        //      {
        //          currencyToSelect = currencyOrNot;
        //      }
        //     // setCurrency(currencyToSelect);
        // }

        // default currency is set only once even if the component is re-rendered
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


// <FormControl fullWidth>
//     <InputLabel id={this.props.labelId + '-label'} >{this.props.labelTitle}</InputLabel>
//     <Select
//         labelId={this.props.labelId + '-label'}
//         id={this.props.labelId}
//         value={this.props.selectedCurrencyName}
//         defaultValue=""
//         label={this.props.labelTitle}
//         onChange={event => this.onOptionSelected(event, value, reason)}
//
//     >
//         {this.props.currencies?.map(x => {
//             console.log(x.name);
//             return <MenuItem key={x.code} value={x.name}>
//                 <div className='row'>
//                     <div className='col-2'>
//                         {x.countryCode &&
//                         <ReactCountryFlag
//                             countryCode={x.countryCode}
//                             svg
//                             style={{
//                                 width: '2em',
//                                 height: '2em',
//                                 borderRadius: '0.5em'
//                             }}
//                             title={x.countryCode}
//                         />
//                         }
//                     </div>
//                     <div className='col-8'>
//                         <span>{x.code} - {x.name}</span>
//                     </div>
//                 </div>
//             </MenuItem>
//         })};
//     </Select>
// </FormControl>