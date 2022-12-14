import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import ClearIcon from '@mui/icons-material/Clear';

function SelectProduct() {
    const productAutocomplete = [
        { id: 1, name: "Hanbiro Project", tag: "Software" },
        { id: 2, name: "HR", tag: "Software" },
    ]

    return (
        <Stack spacing={3} sx={{ width: 430 }}>
            <Autocomplete
            multiple
            id="tags-standard"
            options={productAutocomplete}
            getOptionLabel={(option) => option.name}
            defaultValue={[productAutocomplete[0]]}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                placeholder="Type or click to select product"
            />
            )}
            />
        </Stack>    
    )
}

const Product = () => {
    const productRowsData = [
        { id: 1, name: "Groupware", tag: "Software" },
    ]

    return (
        <Box sx={{ flexGrow: 1, width: 430 }}>
            {productRowsData.map(item => (
            <Grid container spacing={2} sx={{ marginBottom: "3px" }}>
                <Grid item xs={6} sx={{ marginTop: "4px" }}>
                    <Link href="#" underline="none">
                        { item.name }
                    </Link>
                </Grid>
                <Grid item xs={6} >
                    <Stack direction="row" spacing={2} sx={{ float: "right" }}>
                        <Box sx={{ marginLeft: "5px" }}><Chip label={ item.tag } variant="outlined" /></Box>
                        <Box sx={{ marginLeft: "5px" }}><ClearIcon sx={{ fontSize: "1.5rem", color: "red", marginTop: "3px" }} /></Box>
                    </Stack>
                </Grid> 
            </Grid>
            ))}
            <Box sx={{ paddingTop: "5px"}}><SelectProduct /></Box>
        </Box>
    )
};

export default Product;