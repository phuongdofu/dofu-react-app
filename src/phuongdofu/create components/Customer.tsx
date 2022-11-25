// material-ui
import { Autocomplete, TextField } from '@mui/material';


const customers = [
    { id: 1, name: "Phuong Dofu" },
]


export default function Customers() {
  
  return (
    <Autocomplete
        multiple
        id="tags-outlined"
        options={customers}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} placeholder="Type or click to select a customer" />}
        sx={{
          '& .MuiOutlinedInput-root': {
            p: 1
          },
          '& .MuiAutocomplete-tag': {
            bgcolor: 'primary.lighter',
            border: '1px solid',
            borderColor: 'primary.light',
            '& .MuiSvgIcon-root': {
              color: 'primary.main',
              '&:hover': {
                color: 'primary.dark'
              }
            }
          }
        }}
      />
  );
}
