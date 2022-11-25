import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function TaskType() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Task Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="manual" control={<Radio />} label="Manual" />
        <FormControlLabel value="checklist" control={<Radio />} label="Checklist" />
        <FormControlLabel value="sequence" control={<Radio />} label="Sequence" />
      </RadioGroup>
    </FormControl>
  );
}