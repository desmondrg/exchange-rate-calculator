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
    initialSectedIndex: number;
    sx: SxProps<Theme>;

    onCurrencySelected(currency: ICurrency): void;
}

export default function CountrySelectInput(props: Props)
{

    let defaultCurrency = {} as ICurrency;
    // only select a currency as initially selected if its index is not past the bounds of the last index of the arry
    if(props.currencies.length - 1 <= props.initialSectedIndex)
    {

        defaultCurrency = props.currencies[props.initialSectedIndex];
    }

    // default currency is set only once even if the component is re-rendered
    const [currency, setCurrency] = React.useState(defaultCurrency);


    const handleChange = (event: SelectChangeEvent) => {

        const selectedCurrency = props.currencies.find(x => x.name === event.target.value as string);

        console.log(`Selected currency : ${selectedCurrency}`);

        if(selectedCurrency)
        {
            setCurrency(selectedCurrency);
            props.onCurrencySelected(selectedCurrency);
        }
    };

    return (
        <Box sx={{ minWidth: 120, ...props?.sx }}>
            <FormControl fullWidth>
                <InputLabel id={props.labelId + '-label'} >{props.labelTitle}</InputLabel>
                <Select
                    labelId={props.labelId + '-label'}
                    id={props.labelId}
                    value={currency?.name}
                    defaultValue=""
                    label={props.labelTitle}
                    onChange={handleChange}
                >
                    {props.currencies.map(x => {
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
