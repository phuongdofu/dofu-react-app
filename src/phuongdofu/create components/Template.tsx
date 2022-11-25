import { useState } from 'react';

// material-ui
import { FormControl, Typography, MenuItem, Select, SelectChangeEvent, Box } from '@mui/material';


export default function SelectTags() {
  const [tags, setTags] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTags(event.target.value as string);
  };

  return (
    <Box>
        <Typography>Template</Typography>
        <FormControl fullWidth>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={tags} label="Template" onChange={handleChange}>
            <MenuItem value="1">Template 1</MenuItem>
            <MenuItem value="2">Template 2</MenuItem>
            <MenuItem value="3">Template 3</MenuItem>
            </Select>
        </FormControl>
    </Box>
    
  );
}
