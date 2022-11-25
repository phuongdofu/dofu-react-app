import * as React from 'react';
import { Box, Typography, TextField } from '@mui/material';

export default function Subject() {

    return (
        <Box>
            <Typography>Subject</Typography>
            <TextField 
                fullWidth 
                id="task-subject"
                variant="standard" 
            />
        </Box>   
    )
};
