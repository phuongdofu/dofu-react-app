// material-ui
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';

import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';

// ==============================|| TIMELINE - OPPOSITE CONTENT ||============================== //


const TimelineData = () => {

    const rowTimelineData = [
        { 
        id: 1, 
        time: "2022-11-21 15:28", 
        text: "Expected Duration was updated from 1 hour to 1 day by MSR", 
        icon: <CreateOutlinedIcon style={ Icon } />
        },
        { 
        id: 2, 
        time: "2022-11-21 10:00", 
        text: "KDH noted: 'The demo location is changed. '", 
        icon: <ChatBubbleOutlineRoundedIcon style={ Icon } />
        },
        { 
        id: 3, 
        time: "2022-11-21 9:42", 
        text: "MSR uploaded a file report.doc", 
        icon: <AttachFileRoundedIcon style={ Icon } />
        }
    ]

    return rowTimelineData;
}

export default function DeskTimeline() {

  const rowTimelineData = TimelineData();

  return (
    <MainCard title="Update History">
      <Timeline position="alternate">
        {rowTimelineData.map(item => (
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                <Box style={ TimeStyle }>{item.time}</Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <Box style={ IconStyle }>{item.icon}</Box>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Box style={ ContentStyle }>{item.text}</Box>
            </TimelineContent>
        </TimelineItem>
        ))}
      </Timeline>
    </MainCard>
  );
};


const TimeStyle = {
    padding: "5px",
    paddingRight: "15px",
    paddingTop: "20px",
}

const ContentStyle = {
    border: "#d9d9d9 solid 1px",
    borderRadius: "4px",
    background: "#fff",
    padding: "15px"
}

const IconStyle = {
    paddingTop: "15px", 
}

const Icon = {
    fontSize: '2rem', 
    padding: "2px",
    border: "#17a2b8 solid 2px",
    background: "#17a2b8",
    borderRadius: "8px",
    color: "#fff"
}
