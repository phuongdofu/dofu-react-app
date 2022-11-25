import Grid from '@mui/material/Grid';

import TaskViewCenter from './components/CenterView';
import RightView from './components/RightView';
import TaskSummary from './components/Summary';


export default function TaskView() {

    return (
        <Grid container>
            <Grid item md={4}>
                <TaskSummary />
            </Grid>
            <Grid item md={4}>
                <TaskViewCenter />
            </Grid>
            <Grid item md={4}>
                <RightView />
            </Grid>
        </Grid>   
    )
};