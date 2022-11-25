import * as React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function TemplateSave() {

    return (
        <Box>
            <Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Save as new template" />
                </FormGroup>
            </Box>
            <Box>
                <Box sx={{ background: "#f2f2f2", width: "90%", float: "left" }}>
                    <Typography>Task Template Name</Typography>
                    <TextField 
                        fullWidth 
                        id="template-name"
                        variant="standard" 
                    />
                </Box>
                <Box sx={{ background: "#f2f2f2", width: "90%", float: "left" }}>
                    <Typography>Description</Typography>
                    <TextField 
                        fullWidth 
                        id="template-name"
                        variant="standard" 
                    />
                </Box>
            </Box>
        </Box>      
    )
};
