import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FormHelperText} from "@mui/joy";

const CitySelect = ({cities,selectedCity,onChange}) => {

    return (
        <Box   sx={{
            pt:2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%', // Ustaw szerokość na 50% szerokości ekranu
            mx: 'auto', // Ustaw marginesy auto, aby wyśrodkować


        }}>
            <FormControl fullWidth>
                <InputLabel  sx={{color:'#EA9215',borderRadius: '12px 0px 12px 0px',}} id="demo-simple-select-label">City</InputLabel>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCity}
                    label="City"

                    onChange={onChange}
                >
                    {cities.map((city) => (
                        <MenuItem key={city} value={city}>
                            {city}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText sx={{color:'#EA9215'}}>Please type service location</FormHelperText>
            </FormControl>
        </Box>
    );
}

export default CitySelect;