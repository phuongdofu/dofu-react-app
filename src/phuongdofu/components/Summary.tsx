// material-ui
import {
  Grid,
  List,
  ListItem,
  Stack,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';

const TaskData = () => {
    const rows = [
        { id: 1, label: 'Task Type', text: 'Manual' },
        { id: 2, label: 'Due date', text: '2021-03-18' },
        { id: 3, label: 'Expected Duration', text: '1 day' },
        { id: 4, label: 'Real Duration', text: '1 day' },
        { id: 5, label: 'Priority', text: 'Normal' },
        { id: 6, label: 'Purpose', text: 'Personal purpose' },
        { id: 7, label: 'Repeat', text: 'Once a week on Monday' },
        { id: 8, label: 'Template', text: 'Task template' },
        { id: 9, label: 'Description', text: 'This is a description' },
        { id: 10, label: 'Regarding', text: '' },
        { id: 11, label: 'Tags', text: 'postmaster' },
    ]

    const rowData = rows;
    return rowData;
}

const rowData = TaskData()

const TaskSummary = () => {

    return (
        <MainCard title="Summary">
            <List sx={{ py: 0 }}>
            <ListItem>
                <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    {rowData.map(item => (
                    <Stack spacing={0.5}>
                        <Typography color="secondary">{item.label}</Typography>
                        <Typography>{item.text}</Typography>
                    </Stack>
                    ))}
                </Grid>
                </Grid>
            </ListItem>
            </List>
        </MainCard>
    )
}


export default TaskSummary;