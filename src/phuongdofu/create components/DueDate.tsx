import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';


export default function DueDate() {
    const [value, setValue] = useState<Date | null>(new Date('1970-01-01T00:00:00'));

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    
    return (
        <Box>
            <DesktopDatePicker
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
    )
}