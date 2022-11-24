import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

// material-ui
import { Avatar, CardContent, Grid, Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';

import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';
import Avatar4 from 'assets/images/users/avatar-4.png';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ClearIcon from '@mui/icons-material/Clear';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import Box from '@mui/material/Box';


function SelectReps() {
    const repsAutocomplete = [
        { id: 1, image: Avatar1, name: "Phuong Dofu", dept: "Planning/QA" },
        { id: 2, image: Avatar2, name: "Stella", dept: "Planning/QA" }
    ]

    return (
        <Stack spacing={3} sx={{ width: 430 }}>
            <Autocomplete
            multiple
            id="tags-standard"
            options={repsAutocomplete}
            getOptionLabel={(option) => option.name}
            defaultValue={[repsAutocomplete[0]]}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                placeholder="Type or click to select reps"
            />
            )}
            />
        </Stack>    
    )
}


export default function AssignedReps() {
    const repsRowData = [
        { id: 1, image: Avatar3, name: "Phuoc", dept: "Groupware" },
        { id: 2, image: Avatar4, name: "Thien", dept: "Groupware" }
    ]

    return (
        <MainCard title="Assiigned Reps" content={false}>
            <SimpleBar>
            <CardContent>
                {repsRowData.map(item => (
                <Grid container sx={{ paddingBottom: "5px" }}> 
                    <Grid item>
                        <Grid container spacing={3} sx={{ width: 350 }}>
                            <Grid item>
                                <Avatar alt="coverimage" src={item.image} />
                            </Grid>
                            <Grid item>
                                <Box>
                                    <Typography align="left" variant="subtitle1">
                                    {item.name}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography align="left" variant="caption" color="secondary">
                                    {item.dept}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item>
                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <Box style={ IconStyle }><MailOutlineIcon sx={{ color: "green" }} /></Box>
                            <Box style={ IconStyle }><ChatBubbleOutlineIcon sx={{ color: "purple" }} /></Box>
                            <Box style={ IconStyle }><ClearIcon sx={{ color: "red" }} /></Box>
                        </Stack>
                    </Grid>
                </Grid>
                ))}
                <Box sx={{ paddingTop: "5px"}}><SelectReps /></Box>
            </CardContent>
            </SimpleBar>
        </MainCard>
    );
};

const IconStyle = {
    fontSize: "1.5rem",
    paddingLeft: "3px",
}


