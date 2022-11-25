import * as React from 'react';
import { Box, Typography, TextField } from '@mui/material';

export default function Description() {

    return (
        <Box>
            <Typography>Descriptiob</Typography>
            <TextField 
                fullWidth 
                id="task-description"
                variant="standard" 
            />
        </Box>   
    )
};
