import * as React from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';

export default function SelectTags() {

    const knowledgeAutocomplete = [
        { id: 1, knowledge: "How to change language?", tag: "Groupware" },
        { id: 2, knowledge: "How to set working time for all users?", tag: "HR" },
    ]

    return (
        <Stack spacing={3} sx={{ width: 430 }}>
            <Autocomplete
            multiple
            id="tags-standard"
            options={knowledgeAutocomplete}
            getOptionLabel={(option) => option.knowledge}
            defaultValue={[knowledgeAutocomplete[0]]}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                placeholder="Type or click to select knowledge base"
            />
            )}
            />
        </Stack>    
    )
};