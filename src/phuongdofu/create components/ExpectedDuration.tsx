import * as React from 'react';
import { useState } from 'react';

import { Box, Typography, TextField, FormControl, Select, SelectChangeEvent, MenuItem, Grid } from '@mui/material';

export default function ExpectedDuration() {
    const [duration, setDuration] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setDuration(event.target.value as string);
    };

    return (
        <Box>
            <Typography>Expected Duration</Typography>
            <Grid container>
                <Grid item md={8}>
                    <TextField  
                        id="duration" 
                        variant="standard"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-1000]*' }}
                    />
                </Grid>
                <Grid item md={4}>
                    <FormControl>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={duration} label="Duration" onChange={handleChange}>
                            <MenuItem value="day">Days</MenuItem>
                            <MenuItem value="week">Weeks</MenuItem>
                            <MenuItem value="month">Months</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>   
    )
}
