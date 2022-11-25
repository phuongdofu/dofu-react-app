import { useState } from 'react';

import { Typography, MenuItem, Select, SelectChangeEvent, Box } from '@mui/material';
import { Switch, Checkbox, TextField, Button, Stack } from '@mui/material';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const RepeatType = () => {
    const [type, setType] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    
    return (
        <Box>
            <Typography>Repeat Type</Typography>
            <FormControl fullWidth>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={type} label="Repeat" onChange={handleChange}>
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="yearly">Yearly</MenuItem>
                </Select>
            </FormControl>   
        </Box>
    )
}

const RepeatDay = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box>
            <Checkbox {...label} />
        </Box>
    )
}

const Frequency = () => {

    return (
        <Box>
            <Typography>Frequency</Typography>
            <Stack direction="row">
                <TextField
                    id="task-frequency"
                    variant="standard" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-1000]*' }}
                />
                <Button disabled>time(s)</Button>
            </Stack>
        </Box> 
    )
}

const DatePicker = () => {
    const [value, setValue] = useState<Date | null>(new Date('1970-01-01T00:00:00'));

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    
    return (
        <DesktopDatePicker
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        />
    )
}

const EndDate = () => {

    const EndBy = () => {
        return (
            <Box>
                <Typography>End by</Typography>
                <DatePicker />
            </Box>
        )
    };

    return (
        <Box>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">End Date</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value="end-date"
                >
                    <FormControlLabel value="no-end-date" control={<Radio />} label="No End Date" />
                    <FormControlLabel value="end-date" control={<Radio />} label={<EndBy />} />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default function Repeat() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Box>
            <Box>
                <Switch {...label} />
            </Box>
            <Box>
                <Box sx={{ background: "#f2f2f2" }}>
                    <RepeatType />
                    <RepeatDay />
                    <Frequency />
                    <EndDate />
                </Box>
            </Box>
        </Box>
    )
};