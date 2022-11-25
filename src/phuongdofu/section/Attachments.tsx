import * as React from 'react';
import MainCard from 'components/MainCard';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import DownloadIcon from '@mui/icons-material/Download';
import ClearIcon from '@mui/icons-material/Clear';
import DescriptionIcon from '@mui/icons-material/Description';


const Attachments = () => {

    const attachmentRowsData = [
        { id: 1, name: "sample_list.txt", size: "(18.94 KB) 2019/11/02 12:00:12" },
        { id: 2, name: "testcase_sample.xlsx", size: "(18.94 KB) 2019/11/02 12:00:12" },
    ]

    return (
        <MainCard sx={{ flexGrow: 1, width: 430 }}>
            <Stack spacing={1}>
            {attachmentRowsData.map(item => (
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs={2}>
                        <DescriptionIcon sx={{ fontSize: "3rem", color: "blue", marginTop: "3px" }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Stack>
                            <Typography variant="h5" noWrap>
                                {item.name}
                            </Typography>
                            <Typography variant="caption" color="secondary" noWrap>
                                {item.size}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
                        <DownloadIcon sx={{ fontSize: "1.5rem", color: "blue", marginTop: "3px" }} />
                        <ClearIcon sx={{ fontSize: "1.5rem", color: "red", marginTop: "3px", float: "right" }} />
                    </Grid>
                </Grid>
            ))}
            </Stack>
        </MainCard>
    )
}

export default Attachments;