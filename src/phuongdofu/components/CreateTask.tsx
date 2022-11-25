import { Box } from '@mui/material';
import AssignedReps from 'phuongdofu/create components/AssignedReps';
import Customers from 'phuongdofu/create components/Customer';
import Description from 'phuongdofu/create components/Description';
import DueDate from 'phuongdofu/create components/DueDate';
import ExpectedDuration from 'phuongdofu/create components/ExpectedDuration';
import KnowledgeBase from 'phuongdofu/create components/KnowledgeBase';
import Priority from 'phuongdofu/create components/Priority';
import Purpose from 'phuongdofu/create components/Purpose';
import Repeat from 'phuongdofu/create components/Repeat';
import Sequence from 'phuongdofu/create components/Sequence';
import Subject from "phuongdofu/create components/Subject";
import SelectTags from 'phuongdofu/create components/Template';
import Template from 'phuongdofu/create components/Template';
import TemplateSave from 'phuongdofu/create components/TemplateSave';
import TaskType from 'phuongdofu/create components/Types';


export default function CreateTask() {

    return (
        <Box>
            <TaskType />
            <Subject />
            <AssignedReps/>
            <Priority />
            <Customers />
            <Purpose />
            <Description />
            <ExpectedDuration />
            <DueDate />
            <Template />
            <Sequence />
            <SelectTags />
            <KnowledgeBase />
            <TemplateSave />
            <Repeat />
        </Box>
    )
}