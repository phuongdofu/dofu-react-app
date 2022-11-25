import { useState } from 'react';

// material-ui
import { FormControl, Typography, MenuItem, Select, SelectChangeEvent, Box } from '@mui/material';


export default function Priority() {
  const [priority, setPriority] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  return (
    <Box>
        <Typography>Priority</Typography>
        <FormControl fullWidth>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={priority} label="Priority" onChange={handleChange}>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="high">High</MenuItem>
            </Select>
        </FormControl>
    </Box>
    
  );
}
