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

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import ClearIcon from '@mui/icons-material/Clear';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import Box from '@mui/material/Box';


function SelectCustomers() {
    const customerAutocomplete = [
        { id: 1, image: Avatar1, name: "Phuong Truc", company: "Minnie Cosmetics" },
        { id: 2, image: Avatar2, name: "Stella", company: "Pretty Boutique" }
    ]

    return (
        <Stack spacing={3} sx={{ width: 430 }}>
            <Autocomplete
            multiple
            id="tags-standard"
            options={customerAutocomplete}
            getOptionLabel={(option) => option.name}
            defaultValue={[customerAutocomplete[0]]}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                placeholder="Type or click to select customers"
            />
            )}
            />
        </Stack>    
    )
}


export default function Customers() {
    const customersRowData = [
        { id: 1, image: Avatar1, name: "Situmay", company: "Situmay LLC" },
        { id: 2, image: Avatar2, name: "Kevin", company: "Kevin Design" }
    ]

    return (
        <MainCard title="Customers" content={false}>
            <SimpleBar>
            <CardContent>
                {customersRowData.map(item => (
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
                                    {item.company}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item>
                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <Box style={ IconStyle }><MailOutlineIcon sx={{ color: "green" }} /></Box>
                            <Box style={ IconStyle }><SendToMobileIcon sx={{ color: "orange" }} /></Box>
                            <Box style={ IconStyle }><ClearIcon sx={{ color: "red" }} /></Box>
                        </Stack>
                    </Grid>
                </Grid>
                ))}
                <Box sx={{ paddingTop: "5px"}}><SelectCustomers /></Box>
            </CardContent>
            </SimpleBar>
        </MainCard>
    );
};

const IconStyle = {
    fontSize: "1.5rem",
    paddingLeft: "3px",
}
