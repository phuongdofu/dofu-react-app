import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function SelectKnowledge() {
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
}

const KnowledgeBase = () => {
    const knowledgeRowsData = [
        { id: 1, knowledge: "How to access admin page?", tag: "postmaster" },
        { id: 2, knowledge: "How to add an user?", tag: "postmaster" },
    ]

    return (
        <Box sx={{ flexGrow: 1, width: 430 }}>
            {knowledgeRowsData.map(item => (
            <Grid container spacing={2} sx={{ marginBottom: "3px" }}>
                <Grid item xs={6} sx={{ marginTop: "4px" }}>
                    <Link href="#" underline="none">
                        { item.knowledge }
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
            <Box sx={{ paddingTop: "5px"}}><SelectKnowledge /></Box>
        </Box>
    )
};

export default KnowledgeBase;