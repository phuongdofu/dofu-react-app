import { useState } from 'react';

// material-ui
import { FormControl, Typography, MenuItem, Select, SelectChangeEvent, Box } from '@mui/material';


export default function Purpose() {
  const [purpose, setPurpose] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPurpose(event.target.value as string);
  };

  return (
    <Box>
        <Typography>Purpose</Typography>
        <FormControl fullWidth>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={purpose} label="Purpose" onChange={handleChange}>
            <MenuItem value="1">Purpose 1</MenuItem>
            <MenuItem value="2">Purpose 2</MenuItem>
            <MenuItem value="3">Purpose 3</MenuItem>
            </Select>
        </FormControl>
    </Box>
    
  );
}
